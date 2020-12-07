document.querySelector("#arAlun").style.display = 'none';
document.querySelector("#arProf").style.display = 'none';
var prova1 = new Array(0,0,0,0,0,0,0,0,0,0,0);
var prova2 = new Array(0,0,0,0,0,0,0,0,0,0,0);
var prova3 = new Array(0,0,0,0,0,0,0,0,0,0,0);
function enviaEmail() {
    var nome = document.querySelector(".nomePagPrin").value;

    alert("Você foi cadastrado " + nome);
}
var btnForm = document.querySelector("#btnForm");
btnForm.onclick = function () {
    var checkboxAl = document.getElementById("checkAL");
    var checkboxPro = document.getElementById("checkPro");
    if (checkboxAl.checked == true) {
        document.querySelector("#arAlun").style.display = 'block';
    } else {
        document.querySelector("#arAlun").style.display = 'none';
    }
    if (checkboxPro.checked == true) {
        document.querySelector("#arProf").style.display = 'block';
    } else {
        document.querySelector("#arProf").style.display = 'none';
    }
    return false;
}

var btnNotAl = document.querySelector("#btnNotAl");
btnNotAl.onclick = function () {
    var txt = "";
    for (var i = 0; i < 10; i++) {
        var txt = txt + "<table border=\"1px\"><tr><td>Alunos</td><td>Prova 1</td><td>Prova 2</td><td>Prova 3</td><td>Média</td></tr>";
        for (var i = 1; i <= 10; i++) {
            txt = txt + "<tr><td>Aluno " + i + "</td><td>" + prova1[i] + "</td><td>" + prova2[i] + "</td><td>" + prova3[i] + "</td><td>" + ((prova1[i] + prova2[i] + prova3[i]) / 3) + "</td></tr>";
        }
        txt = txt + "</table><br>";
    }
    document.querySelector("#resultAl").innerHTML = txt;
    return false;
}

var btnNotProf = document.querySelector("#btnNotProf");
btnNotProf.onclick = function () {
    var i = document.querySelector('#opcoes').value;
    var prova1i = parseInt(document.querySelector("#prova1i").value);
    var prova2i = parseInt(document.querySelector("#prova2i").value);
    var prova3i = parseInt(document.querySelector("#prova3i").value);
    prova1[i] = prova1i;
    prova2[i] = prova2i;
    prova3[i] = prova3i;
    return false;
}