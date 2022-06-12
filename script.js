const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const msg = document.querySelector('.mismatch');
const form = document.querySelector('form');


function validate() {
    if ((pass1.value == pass2.value) && (pass1.value != '')){
        pass1.classList.remove('error');
        pass2.classList.remove('error');
        msg.innerText = "Passwords Match!"
        msg.style.color = 'green';  
    } else {
        pass1.classList.add('error');
        pass2.classList.add('error');;
        msg.innerText = "Password Mismatch";
        msg.style.color = 'red';
    }
}

const submit = (e) => {
    e.preventDefault();
}


pass1.addEventListener('input', validate)
pass2.addEventListener('input', validate)
form.addEventListener('submit', submit)






