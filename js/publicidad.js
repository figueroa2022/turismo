  // Obtener elementos del DOM
  const popup = document.getElementById('popup');
  const video = document.getElementById('popupVideo');

  // Función para cerrar el popup
  function closePopup() {
   
      popup.style.display = 'none'; // Ocultar el popup
      video.pause(); // Pausar el video
      video.currentTime = 0; // Reiniciar el video
      document.body.classList.remove('content-hidden');

  }

  // Mostrar el popup al cargar la página
  window.onload = function() {
      popup.style.display = 'flex'; // Mostrar el popup
      document.body.classList.add('content-hidden'); // Desactivar scroll del body
  };
