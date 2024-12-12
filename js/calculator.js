var input = document.querySelector('input');
var delBtn = document.querySelector('.del');
var resBtn = document.querySelector('.res');
var numBtns = document.querySelectorAll('.num');
var opBtns = document.querySelectorAll('.op');

numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        input.value += btn.textContent;
    });
});

opBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let lastChar = input.value[input.value.length - 1];
        if (input.value && !['*', '/', '-', '+', ' '].includes(lastChar)) {
            input.value += ` ${btn.textContent} `;
        }
    });
});

delBtn.addEventListener('click', () => {
    var lastElement = input.value.length - 1;
    if(input.value[lastElement] === ' ') {
        var updated = input.value.slice(0, lastElement - 2);
        input.value = updated;
    } else {
        var updated = input.value.slice(0, lastElement);
        input.value = updated;
    }
});

delBtn.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    input.value = '';
});

resBtn.addEventListener('click', () => {
    try {
        let expression = input.value.trim();

        if (!expression || ['*', '/', '-', '+'].includes(expression[expression.length - 1])) {
            alert('Пожалуйста, введите корректное выражение!');
            return;
        }

        let result = eval(expression.replace(/ /g, ''));
        input.value = result;
    } catch (error) {
        alert('Произошла ошибка при вычислении. Проверьте введённое выражение!');
    }
});