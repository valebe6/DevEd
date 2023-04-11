datos = [];
id = 1;
edit = false;
idEdit = 0;
mostrar();
function guardar() {
  let nombres = document.getElementById("nombres").value ?? null;
  let docente = document.getElementById("docente").value ?? null;
  let horario = document.getElementById("horario").value ?? null;
  let plataforma = document.getElementById("plataforma").value ?? null;

  if (!nombres || !docente || !horario || !plataforma) {
    Swal.fire({
      icon: 'error',
      title: 'Los datos no fueron guardados',
      text: 'Faltan campos por completar',
    })
    return;
  }
  else{
    Swal.fire(
      'Guardado!',
      'Los datos ingresados fueron guardados exitosamente',
      'success'
    )
  }

  datosIngresados = {
    id: this.id,
    nombre: nombres,
    docente: docente,
    celular: horario,
    plataforma: plataforma,
  };
  if (!this.edit) {
    id++
    datosIngresados.id;
    this.datos.push(datosIngresados);
  } else {
    let editar = this.datos.findIndex((data) => (data.id = this.idEdit));
    datosIngresados.id = this.idEdit;
    this.datos[editar] = datosIngresados;
  }
  mostrar();
  document.getElementById("nombres").value = "";
  document.getElementById("docente").value = "";
  document.getElementById("horario").value = "";
  document.getElementById("user").value = "";
  document.getElementById("modal").style.display = "none";
}

function mostrar() {
  const contenedor = document.getElementById("datosTabla");
  let resultados = "";
  this.datos.forEach((data) => {
    resultados += `<tr>
                            <td>${data.id}</td>
                            <td>${data.nombre}</td>
                            <td>${data.docente}</td>
                            <td>${data.celular}</td>
                            <td>${data.plataforma}</td>
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
  let editar = this.datos.find((data) => (data.id = id));
  console.log(editar);
  this.idEdit = id;
  this.edit = true;
  document.getElementById("nombres").value = editar.nombre;
  document.getElementById("docente").value = editar.docente;
  document.getElementById("horario").value = editar.celular;
  document.getElementById("user").value = editar.plataforma;
  document.getElementById("button").innerHTML = "Editar";
}

function eliminar(id) {
  let indice = this.datos.findIndex((data) => data.id == id);
  this.datos.splice(indice, 1);
  mostrar();
}

function crear() {
  document.getElementById("button").innerHTML = "Guardar";
}
