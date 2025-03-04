document.addEventListener("DOMContentLoaded", () => {
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Obtener el contenedor padre del botón actual
      const dropdown = button.closest(".dropdown");

      // Verificar si ya está activo
      const isActive = dropdown.classList.contains("active-dropdown");

      // Cerrar todos los dropdowns
      document.querySelectorAll(".dropdown").forEach((item) => {
        item.classList.remove("active-dropdown");
      });

      // Si no estaba activo, abrirlo
      if (!isActive) {
        dropdown.classList.add("active-dropdown");
      }
    });
  });
});

const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});