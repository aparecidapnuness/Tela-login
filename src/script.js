const usuario = "Usuario1";
const senha = "Senha1";

const campoUsuario = document.getElementById("username");

const campoSenha = document.getElementById("password");

function login() {
  if (campoUsuario.value == usuario && campoSenha.value == senha) {
    alert("Parabéns, você logou com sucesso!");
    return;
  }

  console.log("Credenciais incorretas");
}

function forgotPassword() {}