function validar() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "admin" && password == "12345") {
    window.location.href="/gestion/ges_usuarios/reg_usuarios.html"

  } else if (username == "user" && password == "12345") {
    window.location.href="/vista_usuario/vista_usuario.html"
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El usuario no se encuentra registrado.',
    })
  }
}

