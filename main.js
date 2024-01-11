$(document).ready(function(){
	$('#phone').mask('(00) 90000-0000');
	$('#cpf').mask('000.000.000-00');
	$('#birthdate').mask('00/00/0000');
});


const inputs = document.querySelectorAll(".input");

function addcl() {
let parent = this.parentNode.parentNode;
parent.classList.add("focus");
}

function remcl() {
let parent = this.parentNode.parentNode;
if (this.value == "") {
	parent.classList.remove("focus");
}
}

function validateForm() {
var birthdate = new Date(document.getElementById("birthdate").value);
var today = new Date();
var age = today.getFullYear() - birthdate.getFullYear();
var monthDiff = today.getMonth() - birthdate.getMonth();

if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
	age--;
}

if (age < 18) {
	document.getElementById("ageWarning").innerText = "Você precisa ter pelo menos 18 anos para se cadastrar.";
	return false;
} else {
	document.getElementById("ageWarning").innerText = "";
	return true;
}
}

inputs.forEach(input => {
input.addEventListener("focus", addcl);
input.addEventListener("blur", remcl);
});


function mostrarsenha(){
	var inputpass = document.getElementById("password")
	var btnShowpass = document.getElementById('btn-senha')

	if (inputpass.type === 'password') {
        inputpass.type = 'text';
        btnShowpass.classList.replace( 'bi-eye-slash', 'bi-eye',);
    } else {
        inputpass.type = 'password';
        btnShowpass.classList.replace('bi-eye', 'bi-eye-slash');
    }
	


}