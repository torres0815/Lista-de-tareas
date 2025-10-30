const lista = document.getElementById("lista");

function agregarTarea() {
  const texto = document.getElementById("tarea").value.trim();
  if (texto === "") return alert("Escribe una tarea");


  const li = document.createElement("li");

  // Estructura interna de la tarea (texto, botones y área de detalles)
  li.innerHTML = `
    <div>
      <span onclick="this.parentElement.parentElement.classList.toggle('completed')">${texto}</span>
      <button class='info-btn' onclick="toggleDetalles(this)">Abrir</button>
      <button class='delete-btn' onclick="this.parentElement.parentElement.remove()">Eliminar</button>
    </div>
    <div class='detalles'>
      <p><b>Información adicional:</b></p>
      <textarea placeholder='Escribe más detalles...'></textarea>
    </div>
  `;

  lista.appendChild(li);
  document.getElementById("tarea").value = "";
}

// Función para abrir o cerrar la sección de detalles
function toggleDetalles(boton) {
  const detalles = boton.parentElement.nextElementSibling;
  detalles.style.display = detalles.style.display === "block" ? "none" : "block";
}
