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
inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
    });
    
    
    function mostrarsenha(){
        var inputpass = document.getElementById("password")
        var btnShowpass = document.getElementById('btn-senha')
    
        if (inputpass.type === 'password') {
            inputpass.type = 'text';
            btnShowpass.classList.replace( 'bi-eye-slash', 'bi-eye');
        } else {
            inputpass.type = 'password';
            btnShowpass.classList.replace('bi-eye','bi-eye-slash');
        }
        
    
    
    }