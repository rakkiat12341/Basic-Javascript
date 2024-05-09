const button = document.querySelector('button');
const result = document.querySelector('#result');

button.addEventListener('click',countDay);

function countDay(){
    const date1 = document.getElementById('date1').value;
    const date2 = document.getElementById('date2').value;

    const startDate = new Date(date1);
    const endDate = new Date(date2);

    const jojo = endDate - startDate;
    console.log(jojo);

    //คำนวนหาผลต่างของวัน
    const times = Math.abs(endDate - startDate);
    //แปลงเวลาให้กลายเป็นวัน
    const day = Math.ceil(times / (1000 * 3600 * 24));
   
    result.innerHTML = `ระยะห่างของวันคือ ${day} วัน`

}






