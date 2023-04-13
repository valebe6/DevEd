datos = [];
id = 1;
edit = false;
idEdit = 0;
mostrar();

function guardar() {
  let nombres = document.getElementById("nombres").value ?? null;
  let correo = document.getElementById("correo").value ?? null;
  let telefono = document.getElementById("telefono").value ?? null;
  let usuario = document.getElementById("user").value ?? null;

  if (!nombres || !correo || !telefono || !usuario) {
    Swal.fire({
      icon: "error",
      title: "Los datos no fueron guardados",
      text: "Faltan campos por completar",
    });
    return;
  } else {
    Swal.fire(
      "Guardado!",
      "Los datos ingresados fueron guardados exitosamente",
      "success"
    );
  }

  datosIngresados = {
    id: this.id,
    nombre: nombres,
    correo: correo,
    celular: telefono,
    usuario: usuario,
  };
  if (!this.edit) {
    id++;
    datosIngresados.id;
    this.datos.push(datosIngresados);
  } else {
    console.log(this.idEdit);
    let editar = this.datos.findIndex((data) => (data.id == this.idEdit));
    datosIngresados.id = this.idEdit;
    this.datos[editar] = datosIngresados;
  }
  mostrar();
  document.getElementById("nombres").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("user").value = "";
}

function mostrar() {
  const contenedor = document.getElementById("datosTabla");
  let resultados = "";
  this.datos.forEach((data) => {
    resultados += `<tr>
                            <td>${data.id}</td>
                            <td>${data.nombre}</td>
                            <td>${data.correo}</td>
                            <td>${data.celular}</td>
                            <td>${data.usuario}</td>
                            <th class="text-center">
                                <button class="boted" data-bs-toggle="modal"
                                data-bs-target="#modalArticulo" onclick="editar('${data.id}')">Editar <span class="material-symbols-outlined">edit</span></button>
                                <button class="botel mt-2" onclick="eliminar('${data.id}')">Borrar<span class="material-symbols-outlined">delete_forever</span></button>
                            </th>
                        </tr>
                        `;
  });
  contenedor.innerHTML = resultados;
}

function editar(id) {
  let editar = this.datos.find((data) => (data.id == id));
  console.log(editar);
  this.idEdit = id;
  this.edit = true;
  document.getElementById("nombres").value = editar.nombre;
  document.getElementById("correo").value = editar.correo;
  document.getElementById("telefono").value = editar.celular;
  document.getElementById("user").value = editar.usuario;
  document.getElementById("button").innerHTML = "Editar";
}

function eliminar(id) {
  Swal.fire({
    title: "Eliminar",
    text: "¿Está seguro que desea eliminar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      let indice = this.datos.findIndex((data) => data.id == id);
      this.datos.splice(indice, 1);
      mostrar();

      Swal.fire(
        "Eliminado",
        "El elemento ha sido eliminado correctamente.",
        "success"
      );
    }
  });
}

function crear() {
  document.getElementById("button").innerHTML = "Guardar";
}
