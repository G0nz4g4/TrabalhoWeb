function esqueceu() {
    alert("Sua senha é" + "\n" + "Login: Admin" + "\n" + "Senha: adm123" );
}

function validar() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "adm123") {
        alert("Login realizado com sucesso!")

        this.home();
    } else {
        alert("Login ou Senha estão incorretos!")
    }
}

function contato(){
    window.location.href = "https://wa.me/55081997164112";
}

function home(){
    window.location.href = "../Projeto/home.html";
}
