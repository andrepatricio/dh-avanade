let tarefas = [];
let addButton = document.querySelector('#adiciona');
let removeButton = document.querySelector('#remove');

addButton.addEventListener("click", (event)=> {
    let inputText = document.querySelector('#input-text');
    let text = inputText.value;
    tarefas.push(text);
    console.log(tarefas);
    render(text);
})

removeButton.addEventListener("click", (event)=> {
    tarefas.pop();
    remove();
})


function render(item) {
    let list = document.querySelector('#list');
    const listItem = document.createElement("li");
    listItem.innerHTML = item;
    list.append(listItem);
}

function remove() {
    let list = document.querySelector('#list');
    list.removeChild(list.lastElementChild);
}