var inputTask = document.querySelector('.for-tasks');
var addBtn = document.querySelector('.add');
var clearAllBtn = document.querySelector('.ca');
var ul = document.querySelector('ul');

addBtn.addEventListener('click', () => {
    if (inputTask.value.trim().length > 0) {
        var div = document.createElement('div');
        div.className = 'task';

        var li = document.createElement('li');
        li.textContent = inputTask.value.trim();

        var editBtn = document.createElement('button');
        editBtn.className = 'editBtn';
        editBtn.textContent = 'изменить';

        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.textContent = 'удалить';

        div.appendChild(li);
        div.appendChild(editBtn);
        div.appendChild(deleteBtn);
        ul.appendChild(div);

        inputTask.value = '';
    }
});

ul.addEventListener('click', (event) => {
    var target = event.target;
    if(target.classList.contains('editBtn')) {
        var parent = target.parentElement;
        var li = parent.querySelector('li');
        parent.innerHTML = `
            <input type="text" class="editedTask" value="${li.textContent}">
            <button class="ok">Ok</button>
        `;

        const okBtn = parent.querySelector('.ok');
        okBtn.addEventListener('click', () => {
            const editedInput = parent.querySelector('.editedTask');
            if (editedInput.value.trim().length > 0) {
                parent.innerHTML = `
                    <li>${editedInput.value.trim()}</li>
                    <button class="editBtn">изменить</button>
                    <button class="deleteBtn">удалить</button>
                `;
            }
        });
    } else if(target.classList.contains('deleteBtn')) {
        var parent = target.parentElement;
        parent.remove();
    }
});

clearAllBtn.addEventListener('click', () => {
    ul.innerHTML = '';
});