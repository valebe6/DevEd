function validar() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "admin" && password == "12345") {
    window.location.href="/gestion/ges_usuarios/reg_usuarios.html"
  } else if (username == "user" && password == "12345") {
    window.location.href="/gestion/ges_usuarios/reg_usuarios.html"
  }
  else{
    alert("El usuario no se encuentra registrado")
  }
}

