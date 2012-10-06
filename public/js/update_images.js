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
    { name: "WBB-2 @ NOR Bklyn-Driggs", url: "http://207.251.86.1.238/cctv357.jpg" }, 
    { name: "WBB-4 @ NOR Bklyn-Mid Span", url: "http://207.251.86.238/cctv359.jpg" }, 
    { name: "WBB-6 @ Delancy-Clinton", url: "http://207.251.86.238/cctv361.jpg" } 
  ]



  // $.each(images, function(index, val){
  //     console.log(val)
  // })

  var pause = false
  var interval_id = null
  var cam_template = "<div class='cam'><span>{{name}}</span><img src='{{url}}' /></div>"


  function appendRender(){
    // Clear all old views
    $("#cams").html("")
    // Update view for each cam
    $.each(brooklyn_cams, function(index, cam){
      cam_details = {
        name: cam['name'],
        url: cam['url']
      }
      html = Mustache.to_html(cam_template, cam_details)
      $("#cams").append(html)
    })
  } 

  function start(){
    interval_id = setInterval(function(){
      appendRender()
    }, 5000)
  }

  function stop(){
    clearInterval(interval_id)
  }

  function toggle_pause(){
    if (pause == false){
      pause = true
      clearInterval(interval_id)
    } else {
      pause = false
      start()
    }
  }

  // bind toggle_pause to pause button
  $("#pause").click(function(){
    toggle_pause()
  })

  // Run it
  appendRender()
  start()

})















