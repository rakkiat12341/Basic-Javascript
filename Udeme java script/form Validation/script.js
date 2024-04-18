const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password1 = document.getElementById('password')
const password2 = document.getElementById('re-password')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInput([username,email,password1,password2]);
    if(!validateEmail(email.value)){
        showError(email,'Email ไม่ถูกต้อง');
    }else {
        showsuccess(email);
    }
    checkPassword(password1,password2);
    checkInputLength(username,5,10);
    checkInputLength(password1,5,12);
});

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'formcontrol error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}

function showsuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'formcontrol success';
    const small = formControl.querySelector('small')
    small.innerText = "ถุกต้อง";
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function checkInput(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim() ===''){
            showError(input,`กรุณาป้อน ${getInputCase(input)}`);
        }else {
            showsuccess(input);
        } 
    });
}

function getInputCase(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

function checkPassword(password1,password2){
    if(password1.value !== password2.value){
        showError(password2,'รหัสผ่านไม่ตรงกัน');
    }
}

 function checkInputLength(input,min,max){
    if(input.value.length<min){
        showError(input,` ${getInputCase(input)} อย่างน้อย ${min} ตัวอักษร`);
    }else if(input.value.length >max){
        showError(input,` ${getInputCase(input)} น้อยมากกว่า ${max} ตัวอักษร`);
    }else{
        showsuccess(input);
    }
 }