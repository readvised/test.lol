console.log("Congrats!! You've managed to make your way to inspect element. I guess ya skidding ass deserves the src after all lol ~ Smokey");

let counter = 0; let Title = 'Smokey'; let direction = true;
aniTitle = setInterval(function () {
    if (counter == Title.length) direction = false;
    if (counter == false) direction = true;
    counter = (direction == true) ? ++counter : --counter;
    newtitle = (counter == 0) ? "#0101" : Title.slice(0, counter);
    document.title =  '' + newtitle;
}, 400)

window.oncontextmenu = function () {
  return false;
}
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
    return false;
  }
  else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
    return false;
  }
});

function audioPlay() {
  var audio = document.getElementById("audio");
  audio.volume = 0.3;
  audio.play()
}

function videoPlay() {
  var video = document.getElementById("video");
  video.play()
}
