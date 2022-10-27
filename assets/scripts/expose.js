// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var hornSelect = document.getElementById("horn-select");
  var audio = document.getElementsByTagName("audio")[0];
  var volume = document.getElementById("volume");

  hornSelect.onchange = function () {
    if (hornSelect.value != 'select') {
      console.log("Changing value");
      document.getElementsByTagName("img")[0].src = `assets/images/${hornSelect.value}.svg`;
      audio.src = `assets/audio/${hornSelect.value}.mp3`;
    }
  }

  document.getElementsByTagName("button")[0].onclick = function () {
    audio.play();
  }


  // volume.addEventListener("change", function () {
  //   let volumeControls = document.getElementById("volume-controls");
  //   let img = volumeControls.getElementsByTagName("img");

  //   if (volume.value === "0") {
  //     console.log('changing volume')
  //     img.src = `assets/images/${hornSelect.value}.svg`;
  //   }
  // })


  volume.onchange = function () {
    let volumeControls = document.getElementById("volume-controls");
    let img = volumeControls.getElementsByTagName("img");

    if (volume.value === "0") {
      document.getElementById('volume-controls').getElementsByTagName('img').src = `assets/icons/volume-level-${volume.value}.svg`;
      console.log('changing volume', img.src)
    }
  }
}
