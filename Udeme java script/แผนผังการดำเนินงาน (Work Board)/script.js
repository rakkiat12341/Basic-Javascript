const drag_item = document.querySelectorAll('.drag-item')
const drag_list = document.querySelectorAll('.drag-item-list')
const ulEl = document.querySelector('#backlog-list')
const inputItem = document.querySelector('#input')
const submitBtn = document.querySelector('#btn-submit-item')



//รายการ
let selectItem;
drag_item.forEach((item) => {
    item.addEventListener('dragstart', onDragStart);
});
submitBtn.addEventListener('click',addItem);
function addItem(item) {
    let itemText = input.value;
    const itemEl = document.createElement(`li`);
    itemEl.classList.add('drag-item');
    itemEl.setAttribute('draggable','true')
    itemEl.textContent=itemText;
    ulEl.append(itemEl);
    input.value = '';
}

//หมวดหมู่
drag_list.forEach((list)=>{
    list.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });
    list.addEventListener('dragenter',(e)=>{
        e.preventDefault();
    });
    list.addEventListener('drop',onDrop)
})

function onDrop(){
    this.append(selectItem);
    selectItem=null;
}
function onDragStart() {
    selectItem = this;
}

//รับค่าจาก input



