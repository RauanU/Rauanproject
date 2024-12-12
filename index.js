let tools = document.querySelector('.tools');
let h2 = document.querySelector('h2');
let calculator = document.querySelector('.calculator');
let chat = document.querySelector('.chat');
let toDo = document.querySelector('.to-do');
let weather = document.querySelector('.weather');

if(tools) {
    tools.style.opacity = '1';
}

if(h2) {
    h2.style.opacity = '1';
}

const text = "Привет! Здесь ты можешь использовать инструменты от Рауана.";
const container = document.querySelector('h1');
let index = 0
function typeText() {
    if (index < text.length) {
        container.textContent += text[index];
        index++;
        setTimeout(typeText, 12);
    } else {
        container.style.borderRight = 'none';
    }
}

typeText();

calculator.addEventListener('click', () => {
    let a = document.createElement('a')
    a.href = 'components/calculator.html';
    window.open(a);
});

toDo.addEventListener('click', () => {
    let a = document.createElement('a')
    a.href = 'components/to-do.html';
    window.open(a);
});

chat.addEventListener('click', () => {
    let a = document.createElement('a')
    a.href = 'components/chat.html';
    window.open(a);
});

weather.addEventListener('click', () => {
    let a = document.createElement('a')
    a.href = 'components/weather.html';
    window.open(a);
});