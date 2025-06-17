document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos.");
    } else {
      alert(`¡Gracias por tu mensaje, ${nombre}!`);
      form.reset(); 
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu__item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Solo animar una vez
      }
    });
  }, {
    threshold: 0.2 // Ajusta esto según el efecto deseado
  });

  menuItems.forEach(item => observer.observe(item));
});
