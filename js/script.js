document.querySelector("#arAlun").style.display = 'none';
document.querySelector("#arProf").style.display = 'none';

function Mudarestado(el) {
    var display = document.querySelector(el).style.display;
    if(display == 'none')
        document.getElementById(el).style.display = 'block';
        alert("teste");
}

function enviaEmail(){
    var nome = document.querySelector(".nomePagPrin").value;

    alert("Você foi cadastrado " + nome);
}

function createFerEd(){
    var checkboxAl = document.querySelector("#checkAL");
    var checkboxPro = document.querySelector("#checkPro");
    if(checkboxAl.checked == true) {
        Mudarestado('#arAluno');
        alert("asda");
    }
    if(checkboxPro.checked == true) {
        Mudarestado('#arProf');
        
    }
}