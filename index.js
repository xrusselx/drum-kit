document.querySelectorAll(".drum").forEach(function (btn) {
  btn.addEventListener("click", function () {
    playDrum(btn.innerHTML);
    buttonAnimation(btn.innerHTML);
  });
});

document.addEventListener("keydown", function (event) {
  playDrum(event.key);
  buttonAnimation(event.key);
});

function playDrum(instrument) {
  switch (instrument) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      break;
    case "j":
      var audio = new Audio("./sounds/crash.mp3");
      break;
    case "k":
      var audio = new Audio("./sounds/snare.mp3");
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      break;
    default:
      console.log(btn.innerHTML);
  }
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();
