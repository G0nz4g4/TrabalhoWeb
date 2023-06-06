function esqueceu() {
    alert("Sua senha é" + "\n" + "Login: Admin" + "\n" + "Senha: adm123" );
}

function validar() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "adm123") {
        alert("Login realizado com sucesso!")

        window.location.href = "home.html";
    } else {
        alert("Login ou Senha estão invalidos!")
    }
}

function contato(){
    window.location.href = "https://www.linkedin.com/in/ediclei-gonzaga/";
}
