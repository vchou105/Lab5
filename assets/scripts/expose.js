// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  var hornSelect = document.getElementById("horn-select");
  var audio = document.getElementsByTagName("audio")[0];
  var button = document.getElementsByTagName("button")[0]

  hornSelect.onchange = function () {
    if (hornSelect.value !== "select") {
      document.getElementsByTagName("img")[0].src = `assets/images/${hornSelect.value}.svg`;
      audio.src = `assets/audio/${hornSelect.value}.mp3`;
    }
  }

  button.onclick = function () {
    audio.load();
    if (hornSelect.value !== "select") {
      audio.play();
    }
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  }

  volume.onchange = function () {
    let volume = document.getElementById("volume");
    let volumeControls = document.getElementById("volume-controls");
    let img = volumeControls.getElementsByTagName("img")[0];
    let value = Number(volume.value);

    audio.volume = value / 100;

    if (value === 0) {
      img.src = `assets/icons/volume-level-${volume.value}.svg`;
    }
    else if (value >= 1 && value < 33) {
      img.src = `assets/icons/volume-level-1.svg`;
      img.alt = "Volume level 1";
    }
    else if (value >= 33 && value < 67) {
      img.src = `assets/icons/volume-level-2.svg`;
      img.alt = "Volume level 2";
    }
    else {
      img.src = `assets/icons/volume-level-3.svg`;
      img.alt = "Volume level 3";
    }
  }
}
