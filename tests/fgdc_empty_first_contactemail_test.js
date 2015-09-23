describe("FGDC empty string as first contactEmail", function (service) {
  beforeEach(function(){
      module('wcodpApp');
  });

  var doc;
  beforeEach(inject(function($injector, _$httpBackend_) {  
    //Title - Official Recognized Boundary of Pacific Marine and Estuarine Fish Habitat Partnership, 2013
    doc = $.parseXML('<?xml version="1.0" encoding="ISO-8859-1"?> <metadata> <idinfo> <citation> <citeinfo> <origin>Bureau of Ocean Energy Management, Mapping and Boundary Branch</origin> <pubdate>20060210</pubdate> <title>Digital Offshore Cadastre (DOC) - Pacific83 - Baseline Points</title> <geoform>Map</geoform> <serinfo> <sername>Digital Offshore Cadastre</sername> <issue>current</issue> </serinfo> <pubinfo> <pubplace>Herndon, Virginia</pubplace> <publish>Bureau of Ocean Energy Management, Mapping and Boundary Branch</publish> </pubinfo> <onlink>http://www.boem.gov/Oil-and-Gas-Energy-Program/Mapping-and-Data/Pacific-files/PCBSLNPT.aspx</onlink> <onlink>http://www.boem.gov/Oil-and-Gas-Energy-Program/Mapping-and-Data/Pacific.aspx</onlink> <lworkcit> <citeinfo> <origin>Bureau of Ocean Energy Management, Mapping and Boundary Branch</origin> <pubdate>2006</pubdate> <title> Technical Information Management System (TIMS), Mapping System, Block and Boundary Component </title> <geoform>Map</geoform> <pubinfo> <pubplace>Herndon, Virginia</pubplace> <publish> Bureau of Ocean Energy Management, Mapping and Boundary Branch </publish> </pubinfo> </citeinfo> </lworkcit> </citeinfo> </citation> <descript> <abstract> This data set contains baseline points in ESRI Arc/Info export and Arc/View shape file formats for the BOEM Pacific Region. Baseline points are used by the BOEM to calculate the Submerged Lands Act (SLA) boundary line and the Limit of 8(g) Zone boundary line. These points may also be used to calculate other offshore boundary lines. A second file containing bay closing lines and other tangent lines is also available. </abstract> <purpose> Baseline points and other cadastre information the BOEM produces are generated in accordance with 30 Code of Federal Regulations (CFR) 256.8 to support Federal land ownership and mineral resource management. </purpose> <supplinf> The BOEM is making its existing cadastre data available at http://www.boem.gov/Oil-and-Gas-Energy-Program/Mapping-and-Data/Index.aspx and on CD-ROM. These data will include digital images of BOEM data at the regional, planning area, Official Protraction Diagram (OPD), and Supplemental Official OCS Block Diagram (SOBD) levels and digital spatial data in Arc/Info export or Arc/View shape format at the regional or planning area levels. </supplinf> </descript> <timeperd> <timeinfo> <sngdate> <caldate>2006</caldate> </sngdate> </timeinfo> <current>Publication date</current> </timeperd> <status> <progress>Complete</progress> <update>As needed</update> </status> <spdom> <bounding> <westbc>-124.79</westbc> <eastbc>-117.12</eastbc> <northbc>48.42</northbc> <southbc>32.51</southbc> </bounding> </spdom> <keywords> <theme> <themekt>None</themekt> <themekey>Offshore</themekey> <themekey>Cadastre</themekey> <themekey>Baseline points</themekey> <themekey>Outer Continental Shelf, OCS</themekey> <themekey>Bureau of Ocean Energy Management, BOEM</themekey> <themekey>Oil and gas</themekey> <themekey>Three Mile Line</themekey> </theme> <place> <placekt>None</placekt> <placekey>USA</placekey> <placekey>Pacific Ocean</placekey> <placekey>Exclusive Economic Zone, EEZ</placekey> <placekey>California, CA</placekey> <placekey>Oregon, OR</placekey> <placekey>Washington, WA</placekey> </place> </keywords> <accconst> None. The Block and Boundary data is in the public domain. </accconst> <useconst> The data was developed within the U.S. Government; no proprietary rights may be attached to them nor may they be sold to the U.S. Government as part of any procurement of ADP products or services. </useconst> <ptcontac> <cntinfo> <cntorgp> <cntorg> Bureau of Ocean Energy Management, Mapping and Boundary Branch </cntorg> <cntper>Branch Chief, Mapping and Boundary Branch</cntper> </cntorgp> <cntpos>Branch Chief</cntpos> <cntaddr> <addrtype>Mailing address</addrtype> <address>381 Elden Street</address><city>Herndon</city> <state>Virginia</state> <postal>20170</postal> <country>USA</country> </cntaddr> <cntvoice>(703) 787-1312</cntvoice> <cntfax>(703) 787-1236</cntfax> <cntemail></cntemail> <cntemail>mapping.boundary.branch@BOEM.gov</cntemail> <hours>8:00am-6:00pm ET</hours> </cntinfo> </ptcontac> <browse> <browsen>pac_baseln.gif</browsen> <browsed> An image of the BOEM Pacific Region Baseline GIS data file. </browsed> <browset>GIF</browset> </browse> <native> Coverages were created in Arc/Info version 7.0.4 on a Sun Sparc Station 10 running Solaris 2.5.1 </native> <crossref> <citeinfo> <origin>Bureau of Ocean Energy Management, Mapping and Boundary Branch</origin> <pubdate>1997-2006</pubdate> <title>Supplemental Official OCS Block Diagrams (SOBD s)</title> <edition>current version</edition> <geoform>Diagram</geoform> <pubinfo> <pubplace>Herndon, Virginia</pubplace> <publish>Bureau of Ocean Energy Management, Mapping and Boundary Branch</publish> </pubinfo> <othercit> SOBD s contain additional coordinate and area calculations for individual blocks. </othercit> <onlink>http://www.boem.gov/Oil-and-Gas-Energy-Program/Mapping-and-Data/Index.aspx</onlink> <lworkcit> <citeinfo> <origin>Bureau of Ocean Energy Management, Mapping and Boundary Branch</origin> <pubdate>2006</pubdate> <title> Technical Information Management System (TIMS), Mapping System, Block and Boundary Component </title> </citeinfo> </lworkcit> </citeinfo> </crossref> <crossref> <citeinfo> <origin> Bureau of Ocean Energy Management, Pacific Region, Leasing Activities Section </origin> <pubdate>Unpublished material</pubdate> <title>Leases</title> <pubinfo> <pubplace>Camarillo, California</pubplace> <publish> Bureau of Ocean Energy Management, Pacific Region, Leasing Activities Section </publish> </pubinfo> <othercit> This Oracle database contains current information on the status of Federal leases. </othercit> <lworkcit> <citeinfo> <origin>Bureau of Ocean Energy Management</origin> <pubdate>2006</pubdate> <title> Technical Information Management System (TIMS), Lease Administration Component </title> </citeinfo> </lworkcit> </citeinfo> </crossref> </idinfo> <dataqual> <logic> Coordinates for baseline points have been measured from source documents and have been defined to be correct to 3 decimal places of a meter. </logic> <complete> The NAD83 Pacific baseline points are shown for the entire coastline of California, Oregon and Washington. </complete> <posacc> <horizpa> <horizpar> Coordinates for points forming the baseline are calculated values to 3 decimal places of a meter. </horizpar> </horizpa> </posacc> <lineage> <srcinfo> <srccite> <citeinfo> <origin>Bureau of Ocean Energy Management, Mapping and Boundary Branch</origin> <pubdate>2002</pubdate> <title>TIMS, Mapping Syetem, Block and Boundary Component</title> <geoform>Map</geoform> <pubinfo> <pubplace>Herndon, Virginia</pubplace> <publish> Bureau of Ocean Energy Management, Mapping and Boundary Branch </publish> </pubinfo> </citeinfo> </srccite> <typesrc>Computer program</typesrc> <srctime> <timeinfo> <sngdate> <caldate>2002</caldate> </sngdate> </timeinfo> <srccurr>Publication date</srccurr> </srctime> <srccitea>BOEM, TIMS</srccitea> <srccontr>Source coordinates were taken from TIMS.</srccontr> </srcinfo> <procstep> <procdesc> The source data for the baseline points are generally NOAA nautical charts, topographic sheets and hydrographic surveys. Where the source was on NAD27, the latest version of NADCON was used to transform the coordinates to NAD83. Additionally, if available, HARN adjustments are made. Points along the coastline and offshore islands and offshore rocks which may contribute to the baseline are selected and their location digitized and placed in the TIMS Block and Boundary database. Points are selected using criteria from the Law of the Sea and various U. S. Supreme Court decisions. Points are based on mean lower low water (MLLW) if shown on the NOAA source. In the absence of the MLLW line, the mean high water line was used. The elevations of offshore rocks awash are indicated if known. Field reconnaissance was conducted on other rocks awash to determine if they were bare at predicted low tide. In-house computer programs are used to determine which points contribute to the various projected lines BOEM uses. </procdesc> <srcused>BOEM, TIMS</srcused> <procdate>20060210</procdate> <proccont> <cntinfo> <cntorgp> <cntorg> Bureau of Ocean Energy Management, Mapping and Boundary Branch </cntorg> <cntper></cntper> </cntorgp> <cntpos>Branch chief</cntpos> <cntaddr> <addrtype>Mailing address</addrtype> <address>381 Elden Street</address> <city>Herndon</city> <state>Virginia</state> <postal>20170</postal> <country>USA</country> </cntaddr> <cntvoice>(703) 787-1312</cntvoice> <cntfax>(703) 787-1236</cntfax> <cntemail></cntemail> <cntemail>mapping.boundary.branch@BOEM.gov</cntemail> <hours>8:00am-6:00pm ET</hours> </cntinfo> </proccont> </procstep> </lineage> </dataqual> <spdoinfo> <indspref>U.S. Pacific Outer Continental Shelf (OCS)</indspref> <direct>Vector</direct> </spdoinfo> <spref> <horizsys> <geograph> <latres>0.00000001</latres> <longres>0.00000001</longres> <geogunit>Decimal degrees</geogunit> </geograph> <geodetic> <horizdn>North American Datum 1983</horizdn> <ellips>Geodetic Reference System 80</ellips> <semiaxis>6378137 m</semiaxis> <denflat>298.25722210088</denflat> </geodetic> </horizsys> </spref> <eainfo> <overview> <eaover> The shape files contain the following entities: Shape: Point Baseline_I: Internal ESRI number Regcode: Region code (P = Pacific) Mapnum: OPD number Apprvdate: OPD approval date (day-month-year) Sourcedoc: Baseline source document number Sourcedate: Baseline source date (day-month-year) Evaldate: Baseline point evaluation date Pointnum: Baseline point number Ptnumadd: Baseline point number for added point Pointcode: Baseline point code (0 = a line through, 1 = a line from, 2 = a line to, 3 = a point at) Pointstat: Baseline point status code (A = ambulatory baseline point) Featurecod: Baseline point feature code (C1 = surveyed coastline, C2 = unsurveyed coastline, CA1 = mean lower low water line, F14 = jetty, F4 = breakwater, F6 = groin, G1 = island, G2 = islet, J21 = rocky area which uncovers at sounding datum, K10 = rock which does not cover, K11 = rock which covers and uncovers with height, K12 = rock awash at (near) source sounding datum, K12Y = rock awash at (near) source datum seen in reconnaissance, K13 = underwater rock, KA = rock awash (height unknown), KAN = rock awash (height unknown) not seen in reconnaissance, KAY = rock awash (height unknown) seen in reconnaissance) Feature: Baseline feature description name Contention: Baseline point contention code (NAC = Not applicable code) Sublandact: Baseline point Submerged Lands Act boundary contributor ( 0 = does not contribute, 1 = contributes as an arc center, 2 = contributes as a tangent segment end point, 3 = contributes as an arc center and a tangent segment end point) Limit8g: Baseline point Limit of 8(g) Zone contributor code (same as sublandact codes) Eezlimit: Baseline point EEZ limit contributor code  BOEM has NOT used the baseline points to calculate the location of the EEZ boundary line Otherbnd: Baseline point other boundary contributor code  BOEM has NOT used the baseline points to calculate other boundaries Latitude: Baseline point latitude Longitude: Baseline point longitude Mapprjzone: Baseline point UTM map projection zone (10 = 126W to 120W longitude, 11 = 120W to 114W longitude) X_coord: Baseline point x-coordinate location Y_coord: Baseline point y-coordinate location Relmapzone: Baseline point related UTM map projection zone code (same as mapprjzone codes) Relx_coord: Baseline point related x-coordinate location Rely_coord: Baseline point related y-coordinate location Seqnumber: Baseline point sequence number (BOEM database internal number) Effectdate: Baseline point effective date (day-month-year) Datumcode: Datum code (1 = NAD83) Nadconvers: NADCON version number Translat: Transformed latitude Translong: Transformed longitude Tranx_coor: Transformed x-coordinate location Trany_coor: Transformed y-coordinate location Tranmapprj: Transformed map projection zone code (same as mapprjzone codes) </eaover> <eadetcit>Bureau of Ocean Energy Management</eadetcit> </overview> </eainfo> <distinfo> <distrib> <cntinfo> <cntorgp> <cntorg> Bureau of Ocean Energy Management, Mapping and Boundary Branch </cntorg> </cntorgp> <cntaddr> <addrtype>Mailing address</addrtype> <address>381 Elden Street</address><city>Herndon</city> <state>Virginia</state> <postal>20170</postal> <country>USA</country> </cntaddr> <cntvoice>(703) 787-1312</cntvoice> <cntfax>(703) 787-1236</cntfax> <cntemail>mapping.boundary.branch@BOEM.gov</cntemail> <hours>8:00am-6:00pm ET</hours> </cntinfo> </distrib> <resdesc>Digital Offshore Cadastre</resdesc> <distliab> As is. No responsibility is assumed for the correctness of this data. </distliab> <stdorder> <digform> <digtinfo> <formname>ASHP</formname> <formvern>3</formvern> <transize>0.4 Mbytes</transize> </digtinfo> <digtopt> <onlinopt> <computer> <networka> <networkr>http://www.boem.gov/Oil-and-Gas-Energy-Program/Mapping-and-Data/Index.aspx</networkr> </networka> </computer> <accinstr> From the GIS Coverages section of the website html page, click on the Arc/View shapefile file you wish to download. The downloaded file will need to be unzipped. The result will be the necessary Arc/View shapefiles and .dbf file. </accinstr> <oncomp> Dell Pentium server running Windows NT 4.0 </oncomp> </onlinopt> </digtopt> </digform> <fees>None</fees> </stdorder> </distinfo> <metainfo> <metd>20040514</metd> <metrd>20040514</metrd> <metc> <cntinfo> <cntorgp> <cntorg> Bureau of Ocean Energy Management, Mapping and Boundary Branch </cntorg> <cntper></cntper> </cntorgp> <cntpos>Branch Chief</cntpos> <cntaddr> <addrtype>Mailing address</addrtype> <address>381 Elden Street</address><city>Herndon</city> <state>Virginia</state> <postal>20170</postal> <country>USA</country> </cntaddr> <cntvoice>(703) 787-1312</cntvoice> <cntfax>(703) 787-1236</cntfax> <cntemail></cntemail> <cntemail>mapping.boundary.branch@BOEM.gov</cntemail> <hours>8:00am - 6:00pm ET</hours> </cntinfo> </metc> <metstdn>Content Standard for Digital Geospatial Metadata</metstdn> <metstdv>FGDC-STD-001-1998</metstdv> <mettc>Local time</mettc> </metainfo> </metadata>');
    service = $injector.get('metadata');
  }));

  describe('get contact email', function () {
    it("should return valid email", inject(function () {            
      var value = service.get('contactEmail',doc);
      expect(value).toEqual('mapping.boundary.branch@BOEM.gov');
    }))
  })  
});