//การจัดการ array ใน jacascript
let tools = ["html","css","js","php","bootstrap","ajax","jquery","nodejs"];
let result = "เครื่องมือที่ใช้งาน = " + tools.join(" | ");
console.log(result);

let urlArr = ["www","google","com"]; 
let google = urlArr.join(".");
///ใช้ในการค้นหาข้อมูลที่อยู่ใน Array
console.log(tools.lastIndexOf("php"));


// ใช้ loop forEach ในการเข้าถึง Array
tools.forEach((Element,i)=>{
    console.log("index ที่ :"+(i+1) , Element);
});

// ใช้ sort , reverse ในการเรียงข้อมูลอยุ่ในรูปเเบบ string เรียงเเบบ A-Z
tools.reverse();
tools.sort();
console.log(tools);

// ใช้ includes ในการตรวจสอบข้อมูล
console.log(tools.includes("4564"));

if(tools.includes("hoho")){
    console.log("มีการใช้งาน Css");
} else {
    console.log("ไม่มีการใช้งาน Css");
}

//ใช้ concat เชื่อม array 

let newTools = ["java","python","c++"];
let Alltools = tools.concat(newTools);

//ใช้ Fill ในการเติมข้อมูลใน Array
Alltools.fill("Golang",1);
console.log(Alltools);

//ใช้ phush เพื่อเพิิ่มข้อมูล  and pop ในการลบข้อมูลใน Array

tools.push("jojo","vuejs");
console.log(tools);
tools.pop();
console.log(tools);

//ใช้ shift และ unshift ในการเพิ่มข้อมูลใน Array
tools.unshift("sql");
tools.unshift("reacte");
tools.shift();
console.log(tools); 

//ใช้ slice ในการคัดลอกข้อมูลใน Array (ไม่มีผลกับ array ที่ไปดึงข้อมูล)

let copytools = tools.slice(0,3);
let copytools2 = tools.slice(5);
console.log(copytools);
console.log(copytools2);

//ใช้ splice ในการคัดลอกข้อมูลใน Array (มีผลกับ array ที่ไปดึงข้อมูลใน Array)

let copytools3 = tools.splice(0,3);
console.log(copytools3);
console.log(tools);