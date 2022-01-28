function MostrarModal() {
  const btnclick = document.getElementById("enviar");
  btnclick.addEventListener("click", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const comentario = document.getElementById("comentario").value;
    const valinombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    // si los campos estan vacios
    let camposvacios = true;
    let datosvalidos = false;
    if (nombre !== "" && email !== "" && comentario !== "") {
      camposvacios = false;
    }
    // si nombre y mail son validos
    if (valinombre.test(nombre) && emailRegex.test(email)) {
      datosvalidos = true;
    }
    if (camposvacios === false && datosvalidos === true) {
      document.getElementById("myModal").style.display = "block";
      document.getElementById(
        "saludos"
      ).innerHTML = `<img class='fotomodal' src="./img/perfil.jpg" alt="" />
            <strong class='graciasmodal'>Gracias por su inscripcion, le saluda Jose Saltos  </strong><p>${nombre} revise su correo => ${email} para confirmar su registro, gracias por su comentario => ${comentario}</p> <span id="closex" class="close" onClick="document.location.reload(true)">Aceptar</span>`;
      document.getElementById("closex").addEventListener("click", () => {
        document.getElementById("myModal").style.display = "none";
      });
    } else {
      alert("Datos vacios o no validos");
    }
  });
}

MostrarModal();
