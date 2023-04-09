datos = [];
id = 0;
edit = false;
idEdit = 0;
mostrar();
function guardar() {
  let nombres = document.getElementById("nombres").value;
  let correo = document.getElementById("correo").value;
  let telefono = document.getElementById("telefono").value;
  let usuario = document.getElementById("user").value;

  if (!nombres || !correo || !telefono || !usuario) {
    alert("Faltan campos por llenar");
    return;
  }

  datosIngresados = {
    id: this.id,
    nombre: nombres,
    correo: correo,
    celular: telefono,
    usuario: usuario,
  };
  if (!this.edit) {
    datosIngresados.id++;
    this.datos.push(datosIngresados);
  } else {
    let editar = this.datos.findIndex((data) => (data.id = this.idEdit));
    datosIngresados.id = this.idEdit;
    this.datos[editar] = datosIngresados;
  }
  mostrar();
  document.getElementById("nombres").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("telefono").value = "";
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
  let editar = this.datos.find((data) => (data.id = id));
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
  let indice = this.datos.findIndex((data) => data.id == id);
  this.datos.splice(indice, 1);
  mostrar();
}

function crear() {
  document.getElementById("button").innerHTML = "Guardar";
}
