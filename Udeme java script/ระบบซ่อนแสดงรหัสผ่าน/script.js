const input = document.getElementById('input');
const Btn = document.getElementById('Btn');

Btn.addEventListener('click', showPassword);

function showPassword() {
    if (input.getAttribute('type') === "password") {
        input.setAttribute('type', "text")
        Btn.textContent = "ซ่อนรหัสผ่าน"
        Btn.style.backgroundColor = "purple"
    } else {
        input.setAttribute('type', 'password')
        Btn.textContent = "แสดงรหัสผ่าน"
        Btn.style.backgroundColor = "red"
    }

}





