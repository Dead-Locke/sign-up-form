const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const msg = document.querySelector('.mismatch');
const form = document.querySelector('form');
const vis_pw = document.querySelector('.material-icons.vis')
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const num = document.getElementById("number");
const len = document.getElementById("length");
const validation_box = document.getElementById("message");

var lowerCase = /[a-z]/g;
var upperCase = /[A-Z]/g
var numbers = /[0-9]/g;

function check_match() {
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

function switch_visibility() {
    if(vis_pw.innerHTML === 'visibility') {
        vis_pw.innerHTML = 'visibility_off';
        pass1.type = 'text'
        pass2.type = 'text'
        return
    }
    vis_pw.innerHTML = 'visibility';
    pass1.type = 'password'
    pass2.type = 'password'

}

function display_validation() {
    validation_box.style.display = "block";
}

function hide_validation() {
    validation_box.style.display = "none";
}

function validate() {
    //validate at least 1 letter
    if(pass1.value.match(lowerCase)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    //validate capitals
    if(pass1.value.match(upperCase)){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } 
    else{
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

     //validate numbers
    if(pass1.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } 
    else{
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    //validate length
    if(pass1.value.length >= 8) {
        len.classList.remove("invalid");
        len.classList.add("valid");
    } 
    else{
        len.classList.remove("valid");
        len.classList.add("invalid");
    }


}

pass1.addEventListener('keyup', validate)
pass1.addEventListener('input', check_match)
pass2.addEventListener('input', check_match)
pass1.addEventListener('focus', display_validation)
pass2.addEventListener('focus', display_validation)
// pass1.addEventListener('blur', hide_validation)
// pass2.addEventListener('blur', hide_validation)
vis_pw.addEventListener('click', switch_visibility)
vis_pw.addEventListener('click', display_validation)
form.addEventListener('submit', submit)










