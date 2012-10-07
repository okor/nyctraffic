$(function(){

  var brooklyn_cams = [
    { name: "6 Ave @ Flatbush Ave", url: "http://207.251.86.238/cctv426.jpg" }, 
    { name: "Adams @ Tillary", url: "http://207.251.86.238/cctv89.jpg" }, 
    { name: "Altantic Ave @ BQE", url: "" },    
    { name: "Atlantic Ave @ Boerum St", url: "http://207.251.86.238/cctv424.jpg" }, 
    { name: "Atlantic Ave @ Vanderbilt Ave", url: "" },   
    { name: "Belt @ Knapp", url: "http://207.251.86.238/cctv125.jpg" }, 
    { name: "Belt Pkwy @ 68 St", url: "http://207.251.86.238/cctv114.jpg" }, 
    { name: "Belt Pkwy @ Erskine", url: "http://207.251.86.238/cctv116.jpg" }, 
    { name: "Belt Pkwy @ Flatbush", url: "http://207.251.86.238/cctv61.jpg" }, 
    { name: "Belt Pkwy @ Ocean Pkwy", url: "http://207.251.86.238/cctv115.jpg" }, 
    { name: "BQE @ Bklyn Navy Yard", url: "http://207.251.86.238/cctv105.jpg" }, 
    { name: "BQE @ Cadman Plz Ent", url: "http://207.251.86.238/cctv285.jpg" }, 
    { name: "BQE @ Columbia St", url: "" },   
    { name: "BQE @ Congress St", url: "" },   
    { name: "BQE @ Hamilton Ave B-G Ramp", url: "http://207.251.86.238/cctv44.jpg" }, 
    { name: "BQE @ Kent Ave", url: "" },    
    { name: "BQE @ Metropolitan Ave", url: "http://207.251.86.238/cctv287.jpg" }, 
    { name: "BQE @ Varick St", url: "http://207.251.86.238/cctv275.jpg" }, 
    { name: "BQE S of Varick Ave", url: "http://207.251.86.238/cctv276.jpg" }, 
    { name: "Brooklyn-Battery Tunnel @ Brooklyn Side", url: "http://webcam.mta.info/btimg/172.28.208.8/2/image.jpg" }, 
    { name: "Cadman Plz E @ Prospect St", url: "http://207.251.86.238/cctv318.jpg" }, 
    { name: "Cadman Plz W @ Prospect St", url: "http://207.251.86.238/cctv319.jpg" }, 
    { name: "Flatbush Ave @ Fulton St", url: "http://207.251.86.238/cctv419.jpg" }, 
    { name: "Flatbush Ave @ Tillary St", url: "http://207.251.86.238/cctv329.jpg" }, 
    { name: "Flatbush Ave @ Willoughby", url: "http://207.251.86.238/cctv330.jpg" }, 
    { name: "Flatbush Ave and Atlantic Ave", url: "http://207.251.86.238/cctv421.jpg" }, 
    { name: "Gowanus Expy @ 63 Street", url: "http://207.251.86.238/cctv49.jpg" }, 
    { name: "Gowanus Expy @ 92 St", url: "http://207.251.86.238/cctv103.jpg" }, 
    { name: "Gowanus Expy @ Gowanus Prospect", url: "http://207.251.86.238/cctv46.jpg" }, 
    { name: "Gowanus Expy @ Sackett St", url: "http://207.251.86.238/cctv45.jpg" }, 
    { name: "Gowanus Expy WB @ 36 St", url: "http://207.251.86.238/cctv279.jpg" }, 
    { name: "Gowanus Expy WB @ 6 Ave", url: "http://207.251.86.238/cctv280.jpg" }, 
    { name: "Marine Parkway @ North Bound", url: "" },   
    { name: "MHB-27 Bklyn N URW @ Twr", url: "http://207.251.86.238/cctv393.jpg" }, 
    { name: "MHB-30 Bklyn S URW @ Twr-Walkwy", url: "http://207.251.86.238/cctv396.jpg" }, 
    { name: "MHB-31 Bklyn N URW @ Anch", url: "http://207.251.86.238/cctv397.jpg" }, 
    { name: "MHB-33 Bklyn LRW @ Ex Ramp", url: "http://207.251.86.238/cctv399.jpg" }, 
    { name: "Prospect Expy @ Fort Hamilton Pkwy", url: "http://207.251.86.238/cctv47.jpg" }, 
    { name: "Prospect Expy N of Caton Ave", url: "http://207.251.86.238/cctv277.jpg" }, 
    { name: "Sands St @ BQE Ent", url: "http://207.251.86.238/cctv315.jpg" }, 
    { name: "Sands St @ Brooklyn Bridge Ent", url: "http://207.251.86.238/cctv314.jpg" }, 
    { name: "Verrazano-Narrows @ Brooklyn Bound", url: "http://webcam.mta.info/btimg/172.28.211.8/1/image.jpg" }, 
    { name: "WBB Brooklyn Entrance", url: "http://207.251.86.238/cctv43.jpg" }, 
    { name: "WBB-1 @ Bklyn Plaza", url: "http://207.251.86.238/cctv356.jpg" }, 
    { name: "WBB-14 @ NIR Bklyn Kent Ave", url: "http://207.251.86.238/cctv369.jpg" }, 
    { name: "WBB-16 @ SOR Bklyn Kent Ave", url: "http://207.251.86.238/cctv371.jpg" }, 
    { name: "WBB-18 @ SOR Cntr Span", url: "http://207.251.86.238/cctv373.jpg" }, 
    { name: "WBB-19 @ Bklyn Tower", url: "http://207.251.86.238/cctv374.jpg" },
    // Shit right here is broke! 
    // { name: "WBB-2 @ NOR Bklyn-Driggs", url: "http://207.251.86.1.238/cctv357.jpg" }, 
    { name: "WBB-4 @ NOR Bklyn-Mid Span", url: "http://207.251.86.238/cctv359.jpg" }, 
    { name: "WBB-6 @ Delancy-Clinton", url: "http://207.251.86.238/cctv361.jpg" } 
  ]

  var manhattan_cams = [
    { name: "1 Ave @ 14 St" , url: "" }, 
    { name: "1 Ave @ 79 St " , url: "http://207.251.86.238/cctv252.jpg" },
    { name: "1 Ave @ 86 St" , url: "" }, 
    { name: "11 Ave @ 34 ST  " , url: "http://207.251.86.238/cctv200.jpg" },
    { name: "11 Avenue @ 42 Street " , url: "http://207.251.86.238/cctv31.jpg" },
    { name: "1 Ave @ 110 St  " , url: "http://207.251.86.238/cctv261.jpg" },
    { name: "1 Ave @ 23 St" , url: "" }, 
    { name: "1 Ave @ 124 St" , url: "" },  
    { name: "1 Ave @ 96 St " , url: "http://207.251.86.238/cctv260.jpg" },
    { name: "2 Ave @ 110 St  " , url: "http://207.251.86.238/cctv251.jpg" },
    { name: "2 Ave @ 125 St  " , url: "http://207.251.86.238/cctv102.jpg" },
    { name: "2 Ave @ 14 St " , url: "http://207.251.86.238/cctv256.jpg" },
    { name: "2 Ave @ 23 St " , url: "http://207.251.86.238/cctv257.jpg" },
    { name: "2 Ave @ 49 St " , url: "http://207.251.86.238/cctv258.jpg" },
    { name: "2 Ave @ 58 St " , url: "http://207.251.86.238/cctv400.jpg" },
    { name: "2 Ave @ 90 St " , url: "http://207.251.86.238/cctv255.jpg" },
    { name: "2 Ave @ Houston Street" , url: "" },  
    { name: "2 Avenue @ 36 St-Midtown Tunnel " , url: "http://207.251.86.238/cctv4.jpg" },
    { name: "2 Avenue @ QBB  " , url: "http://207.251.86.238/cctv3.jpg" },
    { name: "207 ST @ 9 Ave  " , url: "http://207.251.86.238/cctv203.jpg" },
    { name: "3 AVE @ 34 ST" , url: "" }, 
    { name: "3 Ave @ 42 St " , url: "http://207.251.86.238/cctv290.jpg" },
    { name: "3 Ave @ 49 St " , url: "" },
    { name: "3 Ave @ 57 St " , url: "http://207.251.86.238/cctv291.jpg" },
    { name: "3 Ave @ 59 St " , url: "http://207.251.86.238/cctv292.jpg" },
    { name: "5 Ave @ 34 St " , url: "http://207.251.86.238/cctv305.jpg" },
    { name: "5 Ave @ 57 St " , url: "http://207.251.86.238/cctv299.jpg" },
    { name: "5 AVE @ 72 ST " , url: "http://207.251.86.238/cctv298.jpg" },
    { name: "5 Avenue @ 23 Street  " , url: "http://207.251.86.238/cctv7.jpg" },
    { name: "5 avenue @ 42 Street  " , url: "http://207.251.86.238/cctv6.jpg" },
    { name: "5 Avenue @ 49 Street  " , url: "http://207.251.86.238/cctv8.jpg" },
    { name: "6 Ave @ 23 St " , url: "http://207.251.86.238/cctv308.jpg" },
    { name: "6 Ave @ 57 St " , url: "http://207.251.86.238/cctv304.jpg" },
    { name: "6 Ave @ 58 St" , url: "" }, 
    { name: "6 Avenue @ 34 Street  " , url: "http://207.251.86.238/cctv9.jpg" },
    { name: "6 Avenue @ 42 Street  " , url: "http://207.251.86.238/cctv12.jpg" },
    { name: "6 Avenue @ 49 Street  " , url: "http://207.251.86.238/cctv10.jpg" },
    { name: "7 Ave @ 125 Street  " , url: "http://207.251.86.238/cctv66.jpg" },
    { name: "7 Ave @ 145 Street  " , url: "http://207.251.86.238/cctv68.jpg" },
    { name: "7 Ave @ 23 St " , url: "http://207.251.86.238/cctv312.jpg" },
    { name: "7 Ave @ 34 St " , url: "http://207.251.86.238/cctv307.jpg" },
    { name: "7 Ave @ 49 St " , url: "http://207.251.86.238/cctv306.jpg" },
    { name: "7 Ave and 43 St" , url: "" }, 
    { name: "8 Ave @ 49 St " , url: "http://207.251.86.238/cctv310.jpg" },
    { name: "8 Avenue @ 34 Street  " , url: "http://207.251.86.238/cctv19.jpg" },
    { name: "8 Avenue @ 42 Street  " , url: "http://207.251.86.238/cctv20.jpg" },
    { name: "8 Avenue @ Columbus Cr  " , url: "http://207.251.86.238/cctv18.jpg" },
    { name: "9 Ave @ 23 Street " , url: "http://207.251.86.238/cctv70.jpg" },
    { name: "9th Ave @ 30th Street" , url: "" }, 
    { name: "9th Avenue @ 34 Street  " , url: "http://207.251.86.238/cctv17.jpg" },
    { name: "Amsterdam Ave @ 178 Street  " , url: "http://207.251.86.238/cctv29.jpg" },
    { name: "Baxter @ Canal Street " , url: "http://207.251.86.238/cctv11.jpg" },
    { name: "Bowery @ Canal Street " , url: "http://207.251.86.238/cctv13.jpg" },
    { name: "Broadway @ 169 Street " , url: "http://207.251.86.238/cctv65.jpg" },
    { name: "Broadway @ 42 St  " , url: "http://207.251.86.238/cctv403.jpg" },
    { name: "Broadway @ 46 Street  " , url: "http://207.251.86.238/cctv26.jpg" },
    { name: "Broadway @ 51 St  " , url: "http://207.251.86.238/cctv311.jpg" },
    { name: "Broadway @ Chambers St  " , url: "http://207.251.86.238/cctv337.jpg" },
    { name: "Brooklyn Battery Tunnel @ West Street" , url: "" }, 
    { name: "Brooklyn Bridge - Ped Walk Way" , url: "" },  
    { name: "Canal Street @ Allen Street " , url: "http://207.251.86.238/cctv325.jpg" },
    { name: "Canal Street @ Chrystie Street  " , url: "http://207.251.86.238/cctv324.jpg" },
    { name: "Center St @ Park Row (Brk Br) " , url: "" },
    { name: "Central Park S @ Columbus Cr  " , url: "http://207.251.86.238/cctv5.jpg" },
    { name: "Central Park W @ 96 Street  " , url: "http://207.251.86.238/cctv69.jpg" },
    { name: "Church Street @ Vesey " , url: "http://207.251.86.238/cctv2.jpg" },
    { name: "Dyer @ 42 Street  " , url: "http://207.251.86.238/cctv21.jpg" },
    { name: "E 57 St @ QBB " , url: "http://207.251.86.238/cctv15.jpg" },
    { name: "E 63 St @ QBB " , url: "http://207.251.86.238/cctv16.jpg" },
    { name: "FDR @ 111 ST  " , url: "http://207.251.86.238/cctv166.jpg" },
    { name: "FDR @ 135 Street  " , url: "http://207.251.86.238/cctv27.jpg" },
    { name: "FDR @ 155 Street  " , url: "http://207.251.86.238/cctv74.jpg" },
    { name: "FDR @ 23 St " , url: "http://207.251.86.238/cctv134.jpg" },
    { name: "FDR @ 3 Ave " , url: "http://207.251.86.238/cctv164.jpg" },
    { name: "FDR @ Brooklyn Bridge NB  " , url: "http://207.251.86.238/cctv327.jpg" },
    { name: "FDR Dr @ 36 Street  " , url: "http://207.251.86.238/cctv23.jpg" },
    { name: "FDR Dr @ 78 Street  " , url: "http://207.251.86.238/cctv24.jpg" },
    { name: "FDR Dr @ 96 Street  " , url: "http://207.251.86.238/cctv25.jpg" },
    { name: "FDR Dr @ Catherine Street " , url: "http://207.251.86.238/cctv22.jpg" },
    { name: "FDR Dr @ Old Slip " , url: "http://207.251.86.238/cctv64.jpg" },
    { name: "FDR Drive @ Brooklyn Bridge Exit SB " , url: "http://207.251.86.238/cctv326.jpg" },
    { name: "Harlem River Dr @ GWashington Bridge  " , url: "http://207.251.86.238/cctv67.jpg" },
    { name: "Henry Hudson @ 72 Street  " , url: "http://207.251.86.238/cctv113.jpg" },
    { name: "Henry Hudson @ South Bound " , url: "" }, 
    { name: "Henry Hudson Pkwy @ 125 St  " , url: "http://207.251.86.238/cctv175.jpg" },
    { name: "Henry Hudson Pkwy @ 135 St  " , url: "http://207.251.86.238/cctv1.jpg" },
    { name: "Henry Hudson Pkwy @ 153 St  " , url: "http://207.251.86.238/cctv28.jpg" },
    { name: "Henry Hudson Pkwy @ 96 St " , url: "http://207.251.86.238/cctv188.jpg" },
    { name: "Holland Tunnel  " , url: "http://207.251.86.238/cctv92.jpg" },
    { name: "Lexington Ave @ 42 St " , url: "http://207.251.86.238/cctv303.jpg" },
    { name: "Lexington Ave @ 49 St " , url: "http://207.251.86.238/cctv302.jpg" },
    { name: "Lexington Ave @ 57 ST " , url: "http://207.251.86.238/cctv294.jpg" },
    { name: "Lexington Ave @ 72 ST " , url: "http://207.251.86.238/cctv295.jpg" },
    { name: "Lexington Ave @ 86 St " , url: "http://207.251.86.238/cctv182.jpg" },
    { name: "Lincoln Tunnel  " , url: "" },
    { name: "MADISON @ 34 ST " , url: "http://207.251.86.238/cctv296.jpg" },
    { name: "MADISON @ 57 ST " , url: "" },
    { name: "Madison Ave @ 49 St " , url: "http://207.251.86.238/cctv301.jpg" },
    { name: "Manhattan BBT Entrance  " , url: "" },
    { name: "MHB-16 Manh Colonnade Entr  " , url: "http://207.251.86.238/cctv382.jpg" },
    { name: "MHB-20 Mahn S URW @ Anch  " , url: "http://207.251.86.238/cctv386.jpg" },
    { name: "MHB-25 Manh S URW @ Twr Walkwy" , url: "" },  
    { name: "Montgomergy @ South St  " , url: "http://207.251.86.238/cctv338.jpg" },
    { name: "Park Ave @ 34 St  " , url: "http://207.251.86.238/cctv309.jpg" },
    { name: "Pearl St @ Dover  " , url: "http://207.251.86.238/cctv316.jpg" },
    { name: "Pearl Street @ St. James Pl " , url: "http://207.251.86.238/cctv317.jpg" },
    { name: "QBB LL CM @ W Channel " , url: "http://207.251.86.238/cctv412.jpg" },
    { name: "QBB NOR @ York Ave  " , url: "http://207.251.86.238/cctv407.jpg" },
    { name: "QBB SOR @ 1 Ave " , url: "http://207.251.86.238/cctv404.jpg" },
    { name: "QBB UL CM @ Roosevelt " , url: "http://207.251.86.238/cctv413.jpg" },
    { name: "QBB UL CM @ York Ave  " , url: "http://207.251.86.238/cctv408.jpg" },
    { name: "Queens Midtown Tunnel @ Manhattan Side" , url: "" }, 
    { name: "RT. 9A @ N. Moore St" , url: "" },  
    { name: "South Street @ Pike Street  " , url: "http://207.251.86.238/cctv328.jpg" },
    { name: "Sutton Pl @ 58 St " , url: "http://207.251.86.238/cctv402.jpg" },
    { name: "Triborough Bridges @ Manhattan Bound" , url: "" },  
    { name: "Trinity @ Brooklyn Battery Tunnel " , url: "http://207.251.86.238/cctv63.jpg" },
    { name: "Varick St @ Hudson Street " , url: "http://207.251.86.238/cctv331.jpg" },
    { name: "Water St @ John St  " , url: "http://207.251.86.238/cctv213.jpg" },
    { name: "Water St @ Wall St  " , url: "http://207.251.86.238/cctv212.jpg" },
    { name: "WBB Manhattan Entrance  " , url: "http://207.251.86.238/cctv48.jpg" },
    { name: "WBB-20 @ MidSpan  " , url: "http://207.251.86.238/cctv375.jpg" },
    { name: "WBB-21 @ SOR Manh Appr  " , url: "http://207.251.86.238/cctv376.jpg" },
    { name: "WBB-22 @ S Manh Twr " , url: "http://207.251.86.238/cctv377.jpg" },
    { name: "WBB-23 @ N Manh Twr " , url: "http://207.251.86.238/cctv378.jpg" },
    { name: "West St @ 14 St " , url: "http://207.251.86.238/cctv193.jpg" },
    { name: "West St @ 22 St" , url: "" }, 
    { name: "West St @ 34 St " , url: "http://207.251.86.238/cctv59.jpg" },
    { name: "West St @ 42 St " , url: "http://207.251.86.238/cctv190.jpg" },
    { name: "West St @ Albany St" , url: "" }, 
    { name: "West St @ Canal St  " , url: "http://207.251.86.238/cctv50.jpg" },
    { name: "West St @ Clarkson  " , url: "http://207.251.86.238/cctv189.jpg" },
    { name: "West St @ Murray " , url: "" }, 
    { name: "West Street @ Intrepid  " , url: "http://207.251.86.238/cctv90.jpg" },
    { name: "Worth Street @ Bowery " , url: "http://207.251.86.238/cctv323.jpg" },
    { name: "Worth Street @ Lafayette Street " , url: "" },
    { name: "Worth Street @ W. Broadway  " , url: "http://207.251.86.238/cctv321.jpg" },
    { name: "York Ave @ 91 ST  " , url: "http://207.251.86.238/cctv195.jpg" },
  ]

  var staten_cams = [
    { name: "Gower St WOF Manor Rd Underpass " , url: "http://207.251.86.238/cctv140.jpg" },
    { name: "Hylan Blvd @ New Dorp Lane  " , url: "http://207.251.86.238/cctv247.jpg" },
    { name: "MLK Expy N of Forest Ave  " , url: "http://207.251.86.238/cctv273.jpg" },
    { name: "Outerbridge Crossing @ Tyrellan Ave " , url: "http://207.251.86.238/cctv95.jpg" },
    { name: "SIE @ 440 DR M.L.King Expy Exit 9", url: "" }, 
    { name: "SIE @ 440- West Shore Expy Ext 5  " , url: "http://207.251.86.238/cctv135.jpg" },
    { name: "SIE @ Bradley Ave Exit 12 " , url: "http://207.251.86.238/cctv139.jpg" },
    { name: "SIE @ Clove Rd  " , url: "http://207.251.86.238/cctv96.jpg" },
    { name: "SIE @ Fingerboard Rd ", url: "" }, 
    { name: "SIE @ Hylan Blvd  ", url: "" },
    { name: "SIE @ Richmond Ave  " , url: "http://207.251.86.238/cctv83.jpg" },
    { name: "SIE @ Slosson Ave ", url: "" },
    { name: "SIE @ Victory Blvd EOF Exit 9 " , url: "http://207.251.86.238/cctv137.jpg" },
    { name: "SIE @ W of Clove Rd ", url: "" },
    { name: "SIE @ Wolley Ave WOD Exit 11  " , url: "http://207.251.86.238/cctv138.jpg" },
    { name: "SIE @ WSE " , url: "http://207.251.86.238/cctv271.jpg" },
    { name: "Verrazano-Narrows @ Staten Island Bound ", url: "" },
    { name: "Victory Blvd @ Bay St ", url: "" },
    { name: "Victory Blvd @ Jersey St  ", url: "" },
    { name: "Victory Blvd WOF Campus Dr  " , url: "http://207.251.86.238/cctv232.jpg" },
    { name: "West Shore Expy @ Arden Ave " , url: "http://207.251.86.238/cctv347.jpg" },
  ]

  var queens_cams = [
    { name: "Belt @ 225 St  " , url: "http://207.251.86.238/cctv117.jpg" }, 
    { name: "Belt Pkwy @ 134 St   " , url: "http://207.251.86.238/cctv281.jpg" }, 
    { name: "Belt Pkwy @ Brookville Blvd  " , url: "http://207.251.86.238/cctv335.jpg" }, 
    { name: "Belt Pkwy @ Cross Bay Blvd   " , url: "http://207.251.86.238/cctv72.jpg" }, 
    { name: "BQE @ 31 St  " , url: "http://207.251.86.238/cctv288.jpg" }, 
    { name: "BQE @ Broadway   " , url: "http://207.251.86.238/cctv106.jpg" }, 
    { name: "Clearview @ Northern Blvd  " , url: "http://207.251.86.238/cctv144.jpg" }, 
    { name: "Clearview Expy @ 26th Ave", url: "" }, 
    { name: "Clearview Expy @ 35 Ave  " , url: "http://207.251.86.238/cctv340.jpg" }, 
    { name: "Cross Bay Blvd @ N Conduit Ave   " , url: "http://207.251.86.238/cctv274.jpg" }, 
    { name: "Cross Island Expy @ 14 Ave  ", url: "" },
    { name: "Cross Island Pkwy @ Bayside Marina   " , url: "http://207.251.86.238/cctv178.jpg" }, 
    { name: "Cross Island Pkwy @ Throgsneck   " , url: "http://207.251.86.238/cctv120.jpg" }, 
    { name: "Cross Island Pkwy @ Union Tpke   " , url: "http://207.251.86.238/cctv143.jpg" }, 
    { name: "CrossBay @ North Bound  ", url: "" },
    { name: "CrossBay @ South Bound  ", url: "" },
    { name: "GCP @ 166 St  ", url: "" },
    { name: "GCP @ 214 St   " , url: "http://207.251.86.238/cctv128.jpg" }, 
    { name: "GCP @ 31 ST ", url: "" },
    { name: "GCP @ Jewl Ave Appr ", url: "" },
    { name: "GCP EB @ 126 St  " , url: "http://207.251.86.238/cctv269.jpg" }, 
    { name: "GCP EB @ 37 St   " , url: "http://207.251.86.238/cctv268.jpg" }, 
    { name: "GCP EB @ 78 Ave ", url: "" },
    { name: "GCP EB @ Astoria Blvd  " , url: "http://207.251.86.238/cctv270.jpg" }, 
    { name: "GCP EB @ Roosevelt Ave  ", url: "" },
    { name: "GCP WB @ 96 St", url: "" },  
    { name: "GR Brewer @ Belt  ", url: "" },
    { name: "H Beach @ 158 Ave  " , url: "http://207.251.86.238/cctv162.jpg" }, 
    { name: "LIE @ 61 St  " , url: "http://207.251.86.238/cctv284.jpg" }, 
    { name: "LIE @ 84 St  " , url: "http://207.251.86.238/cctv157.jpg" }, 
    { name: "LIE @ GCP  " , url: "http://207.251.86.238/cctv60.jpg" }, 
    { name: "LIE @ Kissena Blvd   " , url: "http://207.251.86.238/cctv129.jpg" }, 
    { name: "LIE @ QMT- Pulaski Br  " , url: "http://207.251.86.238/cctv55.jpg" }, 
    { name: "LIE EB @ Pulaski Bridge  " , url: "http://207.251.86.238/cctv55.jpg" }, 
    { name: "LIE near Woodhaven Blvd - 61 St  " , url: "http://207.251.86.238/cctv58.jpg" }, 
    { name: "Marine Parkway @ South Bound ", url: "" }, 
    { name: "Northern Blvd @ 68 St  " , url: "http://207.251.86.238/cctv187.jpg" }, 
    { name: "Northern Blvd @ 97 St  " , url: "http://207.251.86.238/cctv289.jpg" }, 
    { name: "Northern Blvd @ GCP  " , url: "http://207.251.86.238/cctv186.jpg" }, 
    { name: "Oceania @ LIE  " , url: "http://207.251.86.238/cctv149.jpg" }, 
    { name: "QBB @ Crescent St  " , url: "http://207.251.86.238/cctv418.jpg" }, 
    { name: "QBB LL CM @ 11 St  " , url: "http://207.251.86.238/cctv416.jpg" }, 
    { name: "QBB UL @ Queens Pier   " , url: "http://207.251.86.238/cctv415.jpg" }, 
    { name: "QBB Uramp @ 23 St  " , url: "http://207.251.86.238/cctv417.jpg" }, 
    { name: "Qns Blvd @ 65 Ave  " , url: "http://207.251.86.238/cctv146.jpg" }, 
    { name: "Qns Blvd @ 65 PL   " , url: "http://207.251.86.238/cctv148.jpg" }, 
    { name: "Qns Blvd @ QnCnt Mall  " , url: "http://207.251.86.238/cctv145.jpg" }, 
    { name: "Queens Blvd @ 36 Street  " , url: "http://207.251.86.238/cctv57.jpg" }, 
    { name: "Queens Blvd @ 51 St  " , url: "http://207.251.86.238/cctv185.jpg" }, 
    { name: "Queens Blvd @ Van Dam  " , url: "http://207.251.86.238/cctv56.jpg" }, 
    { name: "Queens Midtown Tunnel @ Queens Side ", url: "" },
    { name: "Queens Plaza N @ Queens Boro Bridge  " , url: "http://207.251.86.238/cctv54.jpg" }, 
    { name: "Rockaway Tpke @ 5 Towns (Division St)  " , url: "http://207.251.86.238/cctv332.jpg" }, 
    { name: "Throgs Neck Bridge @ Queens Bound ", url: "" },
    { name: "Triborough Bridge Queens Bound  ", url: "" },
    { name: "Van Wyck @ Atlantic  " , url: "http://207.251.86.238/cctv153.jpg" }, 
    { name: "Van Wyck @ Queens Blvd  ", url: "" },
    { name: "Van Wyck Expy @ 101 Avenue   " , url: "http://207.251.86.238/cctv52.jpg" }, 
    { name: "Van Wyck Expy near GCP - Booth Memorial  " , url: "http://207.251.86.238/cctv53.jpg" }, 
    { name: "VAN WYCK EXPY S. OF LIE  " , url: "http://207.251.86.238/cctv198.jpg" }, 
    { name: "Whitestone @ 14 Ave  " , url: "http://207.251.86.238/cctv197.jpg" }, 
    { name: "Whitestone @ Queens Bound ", url: "" },
    { name: "Whitestone Bridge ", url: "" },
    { name: "Whitestone Nof Linden Pl   " , url: "http://207.251.86.238/cctv183.jpg" }, 
  ]

  var bronx_cams = [
    { name: "Bronx River Pkwy @ 233 ST " , url: "http://207.251.86.238/cctv194.jpg" }, 
    { name: "Bruckner Expy @ Bronx River Pkwy  " , url: "http://207.251.86.238/cctv35.jpg" }, 
    { name: "Cross Bronx Expy @ E of Bronx River Pkwy  " , url: "http://207.251.86.238/cctv38.jpg" }, 
    { name: "Cross Bronx Expy @ E of Undercliff (GWB)", url: "" },  
    { name: "Cross Bronx Expy @ Randall Avenue " , url: "http://207.251.86.238/cctv33.jpg" }, 
    { name: "Fordham Rd @ Hughes Ave " , url: "http://207.251.86.238/cctv202.jpg" }, 
    { name: "Fordham Rd and Grand Concourse  " , url: "http://207.251.86.238/cctv201.jpg" }, 
    { name: "Henry Hudson @ North Bound ", url: "" }, 
    { name: "Henry Hudson Pkwy @ 232 St  " , url: "http://207.251.86.238/cctv173.jpg" }, 
    { name: "Hutchinson River Pkwy @ East Tremont  " , url: "http://207.251.86.238/cctv40.jpg" }, 
    { name: "Hutchinson Rvr Pkwy @ Whitestone Br " , url: "http://207.251.86.238/cctv32.jpg" }, 
    { name: "Macombs Dam Bridge  " , url: "http://207.251.86.238/cctv191.jpg" }, 
    { name: "Major Deegan @ Triboro Bridge " , url: "http://207.251.86.238/cctv111.jpg" }, 
    { name: "Major Deegan Expy @ N of Alex Hamilton Bridge " , url: "http://207.251.86.238/cctv42.jpg" }, 
    { name: "Major Deegan Expy @ S of W 167 Street", url: "" }, 
    { name: "NE Thruway @ Conner St  " , url: "http://207.251.86.238/cctv172.jpg" }, 
    { name: "New Eng Thru @ Bartow " , url: "http://207.251.86.238/cctv122.jpg" }, 
    { name: "New England Trwy @ East Tremont " , url: "http://207.251.86.238/cctv36.jpg" }, 
    { name: "Throgs Neck Bridge @ Bronx Bound  ", url: "" },
    { name: "Triborough Bridge Bronx Bound ", url: "" },
    { name: "Whitestone @ Bronx Bound  ", url: "" },
  ]

  var pause = false
  var interval_id = null
  var cam_template = "<div class='cam'><img src='{{url}}{{time}}' /><span title='{{name}}'>{{short_name}}</span></div>"


  function appendRender(region){
    var time = '?' + Date.now().toString()
    // Clear all old views
    $("#cams").html("")
    // Update view for each cam
    $.each(region, function(index, cam){
        cam_details = {
          name: cam['name'],
          short_name: cam['name'].substr(0, 40),
          url: cam['url'],
          time: time
        }
      if (cam_details['url'] !== ""){
        html = Mustache.to_html(cam_template, cam_details)
        $("#cams").append(html)
      }
    })
  } 

  function start(region){
    appendRender(region)
    interval_id = setInterval(function(){
      appendRender(region)
    }, 5000)
  }

  function stop(){
    clearInterval(interval_id)
  }

  function toggle_pause(button){
    if (pause == false){
      $(button).removeClass('icon-pause').addClass('icon-play')
      pause = true
      clearInterval(interval_id)
    } else {
      $(button).removeClass('icon-play').addClass('icon-pause')
      pause = false
      start()
    }
  }

  // bind toggle_pause to pause button
  $("#pause").click(function(){
    toggle_pause(this)
  })

  $("#region_chooser").bind('change', function(){
    region = eval( $(this).find('option:selected').val() )
    console.log(region)
    stop()
    start(region)
  })

  // Run it
  start(bronx_cams)

})















