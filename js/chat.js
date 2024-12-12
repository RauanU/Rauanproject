let input = document.querySelector('input');
let sendBtn = document.querySelector('button');
let msgPlace = document.querySelector('.messages-place');

sendBtn.addEventListener('click', () => {
    let ourMsg = document.createElement('p');
    if(input.value.length > 0) {
        let check = true;
        ourMsg.classList.add('our-msg');
        ourMsg.textContent = input.value;
        msgPlace.appendChild(ourMsg);
        let botMsg = document.createElement('p');
        botMsg.classList.add('bot-msg');
        botMsg.textContent = "Я пока не умею отвечать";
        msgPlace.appendChild(botMsg);
        input.value = '';
    }
});