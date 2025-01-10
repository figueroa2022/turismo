 // Obtener el nombre de la página actual
 const currentPath = window.location.pathname.split('/').pop(); // Obtiene el último segmento del path
 const navLinks = document.querySelectorAll('.rd-navbar-nav .rd-nav-item a');

 // Recorrer los enlaces del menú y marcar como activo el correspondiente
 navLinks.forEach(link => {
     if (link.getAttribute('href') === currentPath) {
         link.parentElement.classList.add('active'); // Agrega la clase al <li>
           console.log("entro");
           console.log(link.getAttribute('href'));
           console.log(currentPath);
     } else {
         link.parentElement.classList.remove('active'); // Asegura que otros elementos no tengan la clase
     }
 });