// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const inputForm = document.querySelector('form');
  const inputTxt = document.querySelector('.txt');
  const pitch = document.querySelector('#pitch');
  const pitchValue = document.querySelector('.pitch-value');
  const rate = document.querySelector('#rate');
  const rateValue = document.querySelector('.rate-value');
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

  myButton.addEventListener('click' , (event) => {
    const myText = document.getElementById("text-to-speak");

    const utterThis = new SpeechSynthesisUtterance(myText.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
     synth.speak(utterThis);
     console.log(synth.speaking);

    let myImage = document.getElementsByTagName('img')[0];

    let myInterval = setInterval (function() {
      let speaking = synth.speaking;
      console.log("inside");
      if (speaking) {
        myImage.src="assets/images/smiling-open.png";
      }
      else {
        console.log("else");
        myImage.src="assets/images/smiling.png";
        clearInterval(myInterval);
      }
     }, 100)
  })
}