const drag_item = document.querySelectorAll('.drag-item')
const drag_list = document.querySelectorAll('.drag-item-list')
const ulEl = document.querySelector('#backlog-list')
const inputItem = document.querySelector('#input')
const submitBtn = document.querySelector('#btn-submit-item')



//รายการ
let selectItem;
let inputItemText;
drag_item.forEach((item) => {
    item.addEventListener('dragstart', onDragStart);
});
submitBtn.addEventListener('click', addItem);
//รับค่าจาก input
function addItem(item) {
    let itemText = input.value;
    let rawItem = input;
    const itemEl = document.createElement(`li`);
    itemEl.classList.add('drag-item');
    itemEl.setAttribute('draggable', 'true')
    itemEl.textContent = itemText;
    ulEl.append(itemEl);
    input.value = '';
    inputItemText = itemEl;

}

//หมวดหมู่
drag_list.forEach((list) => {
    list.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    list.addEventListener('dragenter', (e) => {
        e.preventDefault();
    });
    list.addEventListener('drop', onDrop)
})
function onDragStart() {
    selectItem = this;
    inputItemText = this;

}

function onDrop() {
    this.append(inputItemText);
    selectItem = null;
}




