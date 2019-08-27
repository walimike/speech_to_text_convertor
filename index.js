window.SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const icon = document.querySelector('i.fa.fa-microphone')
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
const sound = document.querySelector('.sound');
container.appendChild(paragraph);
let listening = false;
let question = false;

icon.addEventListener("click", () => {
  sound.play();
  dictate();
});


const dictate = () => {
  recognition.start();
  recognition.onresult = event => {
    const speechToText = event.results[0][0].transcript;
    paragraph.textContent = speechToText;
  };
};
