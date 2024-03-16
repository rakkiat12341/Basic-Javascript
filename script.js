// let name;  //การประกาศตัวเเปล
// name = "Rakkiat";

// let age = 20;

// let name = "rakkiat", age = 20; 

// console.log(name);
// document.write(name)

// console.log("อายุ"+age)

// const tax = 0.07; // คำนวนภาษี 
// console.log("vat ="+ tax)

// // let x,y;

// // x=20; // integer จำนวนเต็ม
// // y = 20.15; // float จุดทศนิยม

// let money = 500+500; //number
// let price = 99.99.toString();
// let username = 'rakkiat12342'
// let check_name = false;

// // console.log(typeof(price))
// // console.log(typeof(username));
// // console.log(money);
// // console.log(typeof(check_name));

// let age = +("20.15");  //เเปลงข้อความให้เป็นตัวเลขจำนวนเต็ม

// console.log(age+200);
// console.log(typeof(age));
// console.log(typeof(price));


// //index start from 0
// let number = Array(100,"20000",300,4000,500,60,75,856,569.99,156560,true);
// console.log(number)

// let colors = ["red","blue","green"];
// colors[2] = "yellow"

// console.log(colors)

// let days = ["Monday","Tuesday","Wednesday"];

// console.log(days);



// let a = 109 , b = 10;

// let check =  (a==b);

// console.log (check)

// if (check == true ){
//     console.log("เท่ากัน")
// }else{
//     console.log("ไม่เท่ากัน")
// }




// let a= 5 , b = 10;

// //เพิ่มค่า  prefix 

// console.log("ค่าปัจจุบัน ",a);
// console.log("prefix ",++a);
// console.log("ค่าปัจจุบัน ",a);


// a=5;
// // การเพิ่มค่าแบบ postfix
// console.log("ค่าปัจจุบัน ",a);
// console.log("postfix ",a++);
// console.log("ค่าปัจจุบัน ",a);


// //ลดค่า  prefix  -- 

// console.log("ค่าปัจจุบัน ",b);
// console.log("postfix ",b--);
// console.log("ค่าปัจจุบัน ",b);

// console.log("ค่าปัจจุบัน ",b);
// console.log("postfix ",b--);
// console.log("ค่าปัจจุบัน ",b);

 
// let x=10,y=50;

// console.log("ก่อน = ",x);
// x+=y;
// console.log("หลัง = ",x);

// console.log(10-(2+1));
//  

// let age = 50;

// if (age <=15){

//     if(age== 15) {
//         console.log(" ม.3");

//     }else if (age === 14 ){
//         console.log ("ม.2");
//     }else if(age == 13){
//         console.log("ม.1");
//     }else {
//         console.log("ประถมศึกษา");
//     }
// }else {
//     console.log ("ปริญญาตรี");


// let nubermonth = 2; // 0 = ปิดไฟ 1 = เปิดไฟ

// let name ;
// // if(status == 0) {
// //     ligth="ปิดไฟ";
// // } else if (status==1){
// //     ligth = "เปิดไฟ";
// // } else {
// //     ligth = "ไม่ทราบสถานะไฟ";
// // }

// switch(nubermonth){
//     case 1:name = "มากราคม";
//     case 2 : name = "กุมภาพันธื"; break;
//     case 3 : name = "มีนาคม";
    
// }

// console.log(name);

//โปรเเกรมคำนวนเลขคู่เลขคี่

// let x = 23 ;

// if(x%2 == 0 ){
//     console.log("เลขคู่");
// } else {
//     console.log("เลขคี่");
// }

// โปรเเกรมเปรียบเทียบเลข

// let x = 100, y = 100

// if(x>y){
//     console.log("x มีค่ามากที่สุด");
// } else if(x<y){
//     console.log("y มีค่ามากที่สุด");
// } else if (x==y){
//     console.log("x และ y มีค่าเท่ากัน");
// }


// การใช้ Loop while
// let count = 1; // ตัวเเปลนับจำนวนรอบ

// while(count <= 5) {
//     console.log("ผลิตสินค้าชิ้นที่ " +count);
//     if(count == 3){
//         break;
//     }
//     count++;
// }

// การใช้ Loop for

// let count = 1;

// for(count = 1 ; count <=5 ; count++){
//     console.log("Hello World ");
// }

// for(let count = 10; count >=1; count--){
//     console.log(count);
// }

// การใช้งาน loop dowhile

// let count = 1;

// do{
// console.log(count);
// count++;
// }while(count <= 5)



// for(let count = 1 ; count <=10; count++){
//     console.log(count);
//     if(count ==5)continue;
    
// }

// function Say_hello() {
//     console.log("Hello World");
// }

// function Say_bye() {
//  for(let i =1; i<=10; i++){
//      console.log("product no." + i);
//  }
// }

// function message() {
//     alert ("แจ้งเตือนโอนเงิน")
// }

// function displayName(){
// document.write("rakkiat")
// }


// function plusNumber(x){
//     console.log(x);
// }

// plusNumber(5);
// plusNumber(10);

// let number = 200;

// plusNumber(number);

// function fullName(Fname,Lname){
//     console.log ("Fullname = ",Fname,"Lastname = ",Lname);
// }

// fullName("rakkiat","oatsawarat");

// fullName("rakkiat");

// function summation (x,y){
//     let total = x+y;
//     console.log("Total = ",total);
// }


// summation(987,20);


// function getComputerIP(){
//     return"127.0.0.1";
// }

// let myID =getComputerIP();

// console.log(myID);

// function getNumber(){
//     return 100*5;
// }

// let total = getNumber();
// console.log("ผลการคูณเลข = ",total);

// function getMyaddress (){
//     let city = "Bangkok";
//     return city;
// }

// console.log("คุณอยู่ที่จังหวัด = ",getMyaddress());

// function setSalary(salary){
//     let bonus = 1000;
//    return salary+bonus;
// }

// let a = setSalary(17000);
// console.log ("Aรายได้ทั้งหมด = ",a)

// let b = setSalary(20000);
// console.log ("Bรายได้ทั้งหมด = ",b)

// function getName(name,city){
//     return name + city;
// }

// console.log (getName("ระยอง","บางมาด"))

// function fullName(Fname,Lname,city="กรุงเทพ"){
// console.log("ชื่อ = ",Fname,"นามสกุล = ",Lname,"อยู่ที่จังหวัด = ",city);
// }

// fullName("สมพง","กงๆ","ตราด");
// fullName("ยาว","บ้านดอน","เชียงราย");
// fullName("กล้อง","ดู");

