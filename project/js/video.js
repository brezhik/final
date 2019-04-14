var video = document.querySelector("#video"),
    button = document.querySelector("#button");
    
button.addEventListener("click", function() {
  video.play()
  video.setAttribute("controls","controls");
}, false);

$("#button").click(function() {
  $("#section-video-poster").addClass('section-video-poster-hide');
})
