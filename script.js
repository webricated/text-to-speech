// console.log(`jay shree ram`);

let btn = document.querySelector('button');

let textarea = document.querySelector('textarea');



let utter = new SpeechSynthesisUtterance();
let voices = [];

let select = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = (e) => {
    voices = window.speechSynthesis.getVoices();
    

    const hindiVoices = voices.filter((voice) => voice.lang.startsWith('hi'));

    const enVoices = voices.filter((voice) => voice.lang.startsWith('en'));


    utter.voice = hindiVoices[0] || enVoices[0];

    hindiVoices.concat(enVoices).forEach((element, i) => {
        select.options[i] = new Option(element.name, i);
    })

};



btn.addEventListener('click', ()=> {
   let userInput = textarea.value;
    utter.text = userInput;
    // utter.lang = "hi-IN";
    window.speechSynthesis.speak(utter);

})