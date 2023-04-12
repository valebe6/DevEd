datos = [];
id = 1;
edit = false;
idEdit = 0;
mostrar();
function guardar() {
  let nombres = document.getElementById("nombres").value ?? null;
  let Nivel = document.getElementById("Nivel").value ?? null;
  let Requisitos = document.getElementById("Requisitos").value ?? null;
  let Docente = document.getElementById("Docente").value ?? null;
  let Valor = document.getElementById("Valor").value ?? null;
  let Horario = document.getElementById("Horario").value ?? null;
  let Plataforma = document.getElementById("Plataforma").value ?? null;

  if (!nombres || !Nivel || !Requisitos || !Docente || !Valor || !Horario || !Plataforma) {
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
    Nivel: Nivel,
    Requisitos: Requisitos,
    Docente: Docente,
    Valor: Valor,
    Horario: Horario,
    Plataforma: Plataforma
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
  document.getElementById("Nivel").value = "";
  document.getElementById("Requisitos").value = "";
  document.getElementById("Docente").value = "";
  document.getElementById("Valor").value = "";
  document.getElementById("Horario").value = "";
  document.getElementById("Plataforma").value = "";
  document.getElementById("modal").style.display = "none";
}


function mostrar() {
  const contenedor = document.getElementById("datosTabla");
  let resultados = "";
  this.datos.forEach((data) => {
    resultados += `<tr>
                            <td>${data.id}</td>
                            <td>${data.nombre}</td>
                            <td>${data.Nivel}</td>
                            <td>${data.Requisitos}</td>
                            <td>${data.Docente}</td>
                            <td>${data.Valor}</td>
                            <td>${data.Horario}</td>
                            <td>${data.Plataforma}</td>
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
  document.getElementById("Nivel").value = editar.Nivel;
  document.getElementById("Requisitos").value = editar.Requisitos;
  document.getElementById("Docente").value = editar.Docente;
  document.getElementById("Valor").value = editar.Valor;
  document.getElementById("Horario").value = editar.Horario;
  document.getElementById("Plataforma").value = editar.Plataforma;
  document.getElementById("button").innerHTML = "Editar";
}

function eliminar(){
  Swal.fire({
  title: 'Eliminar',
  text: "¿Está seguro que desea eliminar?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Sí, eliminar'
}).then((result) => {
  if (result.isConfirmed) {

    let indice = this.datos.findIndex((data) => data.id == id);
    this.datos.splice(indice, 1);
    mostrar();

    Swal.fire(
      'Eliminado',
      'El elemento ha sido eliminado correctamente.',
      'success'
    )
  }
})
}
function crear() {
  document.getElementById("button").innerHTML = "Guardar";
}
