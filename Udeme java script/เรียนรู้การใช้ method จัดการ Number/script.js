// number (integer) จำนวนเต็ม (float) จุดทศนิยม

let age = 50.59;
console.log(Number.isInteger(age));
if(Number.isInteger(age) ){
    console.log("อายุถูกต้อง");
}else {
    console.log("อายุไม่ถูกต้อง");
}

//การเปลี่ยน string เป็น number

let input = "100";
let input2 = "10.5";

//ใช้งาน parseFloat and parseInt เพื่องแปลงข้อความให้เป็นตัวเลข
let result = Number.parseFloat(input)+Number.parseFloat(input2);
console.log(result);

//แปลง number to string  

console.log(typeof age.toString());

// การใช้สัญกรณ์วิทยาศาสตร์

let sc =500;

console.log(sc.toExponential(2));


//เปลี่ยนให้เป็นจำนวนเต็มบวกโดยใช้ abs
console.log(Math.abs(-10));

//ปัดจุดทศนิยม
console.log(Math.ceil(4.5)); //ปัดขึ้น
console.log(Math.floor(4.5)); //ปัดลง
console.log(Math.round(4.5)); // มากกว่า .5 ปัดขึ้น
console.log(Math.round(4.4)); // น้อยกว่า .4 ปัดลง
console.log(Math.trunc(9.99999999965415645)); //ลบจุดทศนิยม
console.log(Math.pow(2,3)); //ยกกําลัง
console.log(Math.sqrt(100)); // หารากที่2
console.log(Math.random()); // สุ่มตัวเลข
console.log(Math.max(1,2,3,4,5,6,7,8,9,10,1500)); // หาค่าสูงสุด