document.querySelector("#arAlun").style.display = 'none';
document.querySelector("#arProf").style.display = 'none';

function enviaEmail(){
    var nome = document.querySelector(".nomePagPrin").value;

    alert("Você foi cadastrado " + nome);
}
var btnForm = document.querySelector("#btnForm");
btnForm.onclick = function() {
    var checkboxAl = document.getElementById("checkAL");
    var checkboxPro = document.getElementById("checkPro");
    if(checkboxAl.checked == true) {
        document.querySelector("#arAlun").style.display = 'block';
    }
    if(checkboxPro.checked == true) {
        document.querySelector("#arProf").style.display = 'block';
    }
    return false;
}