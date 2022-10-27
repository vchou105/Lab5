// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var hornSelect = document.getElementById("horn-select");

  hornSelect.onchange = function() {
    if (hornSelect.value != 'select') {
      console.log("Changing value");
      document.getElementsByTagName("img")[0].src=`assets/images/${hornSelect.value}.svg`;
      document.getElementsByTagName("audio")[0].src=`assets/audio/${hornSelect.value}.mp3`;
    }
  }
}
