let text = "Rakkiatoat";
let lastName = "Oatsawarat";


// concat เพื่อเชื่อม string 
let result = text.concat(" "+lastName);
console.log(result);

// การเข้าถึงโดยใช้ index ของแต่ล่ะตัวอักษร
console.log(text[6]);

// indexOf and lastIndexOf ค้นหาตัวอักษรที่เรากำหนด โดยส่งค่ากลับมาเป็นเลข Index
console.log(text.indexOf("t"));

// substring เราอยากได้ sting ในเช่วงใด โดยกำหนดตัวเริ่มต้นเเละตัวสุดท้าย
console.log(text.substring(0,3));

// split แยกตัวอักษร

let url = "www.example.com";
let urlSplit =url.split(".")
console.log(urlSplit[1]);

//แปลงตัวอักษร เป็นตัวพิมพ์ใหญ๋-เล็ก
console.log(text.toLowerCase());
console.log(text.toUpperCase());

//ค้นหาขข้อความด้วย include ส่งค่ากลับเป็น true หรือ false (Boolen)
let food = "ต้มผัดแกงทอด";
console.log(food.includes("ทอด"));

//ทำซ้ำข้อความ ใช้ repeat 
console.log(text.repeat(10));

//เปรียบเทียบคำขึ้นต้นเเละลงท้าย ใช้ stratWith เเละ endWith ส่งค่ากลับเป็น true หรือ false (Boolen)
console.log(url.startsWith('www'));

//แทนที่ข้อความ ใช้ replace replaceAll
let years = "Happy new years 2023";
console.log(years.replace("2023","2024"));

//charAt 
const mesage = "happybirthday";
console.log(mesage.charAt(7));
console.log(mesage.charAt(10));

// การลบช่องว่างออกจากข้อความ  trim (ลบซ้ายขวา) trimStrat (ลบช่องว่างด้านซ้าย)
// trimEnd (ลบช่องว่างด้านขวา)
let nameGu = "  Rakkiatoat  ";
console.log(nameGu.trim());