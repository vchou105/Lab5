// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let voices = [];
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');

  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }

    voices = speechSynthesis.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const myButton = document.getElementsByTagName("button")[0];

  myButton.addEventListener('click' , () => {
    const myText = document.getElementById("text-to-speak");

    const utterThis = new SpeechSynthesisUtterance(myText.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
     synth.speak(utterThis);

    let myImage = document.getElementsByTagName('img')[0];

    let myInterval = setInterval (function() {
      let speaking = synth.speaking;
      if (speaking) {
        myImage.src="assets/images/smiling-open.png";
      }
      else {
        myImage.src="assets/images/smiling.png";
        clearInterval(myInterval);
      }
     }, 100)
  })
}