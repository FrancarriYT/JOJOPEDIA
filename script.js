function ShowAlert(){
    alert("hola lolero promedio");
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

// JavaScript externo (script.js)

// Función para detectar si un elemento está en la vista del usuario
function isElementInView(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Función para manejar el evento de desplazamiento
  function handleScroll() {
    var photoElement = document.querySelector('.secciones');
    if (isElementInView(photoElement)) {
      photoElement.classList.add('animate');
    }
  }
  
  // Manejar el evento de desplazamiento
  window.addEventListener('scroll', handleScroll);
  