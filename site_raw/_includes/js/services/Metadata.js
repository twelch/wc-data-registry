angular.module('wcodpApp').factory('metadata', [function() {

    // jQuery selector strings used for xml lookup of values across
    //  various metadata formats. Note that for crossbrowser support of 
    //  namespaced elements, we provide two selector paths: one with 
    //  the namespaces and escaped colons; another without the namespaces.
    var _paths = {
        datePublished: {
            cd: "",
            fgdc: "metadata > idinfo > citation > citeinfo > pubdate",
            // fgdc: "metadata > idinfo > timeperd > timeinfo > sngdate > caldate",
            iso: "gmd\\:identificationInfo > gmd\\:MD_DataIdentification > gmd\\:citation > gmd\\:CI_Citation > gmd\\:date > gmd\\:CI_Date > gmd\\:date > gco\\:DateTime, identificationInfo > MD_DataIdentification > citation > CI_Citation > date > CI_Date > date > DateTime",
            //Note that for selector below, matching on 'gmd\\:' namespace within pseudoselectors 'has' and 'contains' was not returning a result, dropping this match in these places but leaving elsewhere worked for some reason
            isoii: "gmd\\:identificationInfo > gmd\\:MD_DataIdentification > gmd\\:citation > gmd\\:CI_Citation > gmd\\:date > gmd\\:CI_Date:has(dateType:has(CI_DateTypeCode:contains('publication'))) > gmd\\:date > gco\\:Date, identificationInfo > MD_DataIdentification > citation > CI_Citation > date > CI_Date:has(dateType:has(CI_DateTypeCode:contains('publication'))) > gdate > Date",
            //Original iso2 selector left as secondary
            isoii2: "gmd\\:identificationInfo > gmd\\:MD_DataIdentification > gmd\\:citation > gmd\\:CI_Citation > gmd\\:date > gmd\\:CI_Date > gmd\\:date > gco\\:Date, identificationInfo > MD_DataIdentification > citation > CI_Citation > date > CI_Date > gdate > Date"
        },
        creator: {
            cd: "rdf\\:RDF > rdf\\:Description > dc\\:creator",
            fgdc: "metadata > idinfo > citation > citeinfo > origin",
            iso: "gmd\\:identificationInfo > gmd\\:MD_DataIdentification > gmd\\:pointOfContact > gmd\\:CI_ResponsibleParty > gmd\\:organisationName > gco\\:CharacterString, identificationInfo > MD_DataIdentification > pointOfContact > CI_ResponsibleParty > organisationName > CharacterString",
            isoii: "gmd\\:identificationInfo > gmd\\:MD_DataIdentification > gmd\\:citation > gmd\\:CI_Citation > gmd\\:citedResponsibleParty > gmd\\:CI_ResponsibleParty > gmd\\:organisationName > gco\\:CharacterString, identificationInfo > MD_DataIdentification > gcitation > CI_Citation > citedResponsibleParty > CI_ResponsibleParty > organisationName > CharacterString"
        },
        publisher: {
            cd: "",
            fgdc: "metadata > distinfo > distrib > cntinfo > cntorgp > cntorg",
            //fgdc: "metadata > idinfo > citation > citeinfo > pubinfo > publish",
            iso: "gmd\\:contact > gmd\\:CI_ResponsibleParty > gmd\\:organisationName > gco\\:CharacterString, contact > CI_ResponsibleParty > organisationName > CharacterString",
            isoii: "gmd\\:contact > gmd\\:CI_ResponsibleParty > gmd\\:organisationName > gco\\:CharacterString, contact > CI_ResponsibleParty > organisationName > CharacterString"
        },
        contactName: {
            cd: "",
            fgdc: "metadata > idinfo > ptcontac > cntinfo > cntorgp > cntper",
            iso: "gmd\\:MD_Metadata > gmd\\:identificationInfo > gmd\\:MD_DataIdentification > gmd\\:pointOfContact > gmd\\:CI_ResponsibleParty > gmd\\:individualName > gco\\:CharacterString, MI_Metadata > identificationInfo > MD_DataIdentification > pointOfContact > CI_ResponsibleParty > individualName > CharacterString",
            isoii: "gmd\\:identificationInfo > gmd\\:MD_DataIdentification > gmd\\:citation > gmd\\:CI_Citation > gmd\\:citedResponsibleParty > gmd\\:CI_ResponsibleParty > gmd\\:individualName, identificationInfo > MD_DataIdentification > citation > CI_Citation > citedResponsibleParty > CI_ResponsibleParty > individualName"
		},
        contactEmail: {
            cd: "",
            fgdc: "metadata > idinfo > ptcontac > cntinfo > cntemail",
            iso: "gmd\\:contactInfo > gmd\\:CI_Contact > gmd\\:address > gmd\\:CI_Address > gmd\\:electronicMailAddress > gco\\:CharacterString, contactInfo > CI_Contact > address > CI_Address > electronicMailAddress > CharacterString",
            isoii: "gmd\\:identificationInfo > gmd\\:MD_DataIdentification > gmd\\:citation > gmd\\:CI_Citation > gmd\\:citedResponsibleParty > gmd\\:CI_ResponsibleParty > gmd\\:contactInfo > gmd\\:CI_Contact > gmd\\:address > gmd\\:CI_Address > gmd\\:electronicMailAddress > gco\\:CharacterString, identificationInfo > MD_DataIdentification > citation > CI_Citation > citedResponsibleParty > CI_ResponsibleParty > gmd\\:contactInfo > CI_Contact > address > CI_Address > electronicMailAddress > CharacterString"
        },
        constraints: {
            cd: "rdf\\:RDF > rdf\\:Description > dct\\:abstract > rdf\\:value[rdf\\:resource='mxd.subject']",
            fgdc: "metadata > idinfo > useconst",
            iso: "gmd\\:identificationInfo > gmd\\:MD_DataIdentification > gmd\\:resourceConstraints > gmd\\:MD_LegalConstraints > gmd\\:otherConstraints > gco\\:CharacterString, identificationInfo > MD_DataIdentification > resourceConstraints > MD_LegalConstraints > otherConstraints > CharacterString",
            isoii: "gmd\\:identificationInfo > gmd\\:MD_DataIdentification > gmd\\:resourceConstraints > gmd\\:MD_LegalConstraints > gmd\\:useLimitation > gco\\:CharacterString, identificationInfo > MD_DataIdentification > resourceConstraints > MD_LegalConstraints > useLimitation > CharacterString"
        }
    };

    function _getPaths(fieldName) {
        if (_.has(_paths, fieldName)) {
            return _paths[fieldName];
        }
        return null;
    }

    function _getVal(path, xml) {
        var val = null;
        $(xml).find(path).each(function () {
            // Expecting only one match xml element and act on the first.
            val = $(this).text();
            if (val) {
                val = $.trim(val);
            }
            return; 
        });
        return val;
    }


    return {
        
        /**
         * Finds and returns a value for the given metadata key. The key 
         * is used to get an xml path across multiple xml metadata formats 
         * (ISO, DC, FGDC).
         * 
         * @param  {[type]} fieldName Key used to lookup value accross
         * multiple metadata formats.
         * @param  {[type]} xml       Metadata as XML provided by jQuery.
         * @return {string | null}    Null if a value is not found. Otherwise,
         * the value as a string.
         */
        get: function (fieldName, xml) {
            var paths = _getPaths(fieldName),
                val = null;
            _.some(paths, function(path, key) {
                // Stops looping once a non-empty string is found.
                val = _getVal(path, xml);
                return val;
            });
            return val;
        },

        getXml: function (url, success, fail) {
            $.ajax({
                type: "GET",
                url: url,
                dataType: "xml",
                success: function (xml, status, jqXhr) {
                    if (success) {
                        success(xml);
                    }
                },
                complete: function (jqXhr, status) {
                    if (console) { console.log('XML request: ' + status); }
                }

            });            
        }

    };

}]);
