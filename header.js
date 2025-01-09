document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  if (header) {
    header.innerHTML = `
      <div class="rd-navbar-wrap">
        <nav class="rd-navbar rd-navbar-corporate">
          <div class="rd-navbar-aside-outer">
            <div class="rd-navbar-aside">
              <div class="rd-navbar-panel">
                <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
                <div class="rd-navbar-brand">
                  <a class="brand" href="index.html">
                    <img src="images/logo-default-450x37.png" alt="" width="225" height="10"/>
                  </a>
                </div>
              </div>
              <div class="rd-navbar-aside-right rd-navbar-collapse">
                <ul class="rd-navbar-corporate-contacts">
                  <li>
                    <div class="unit unit-spacing-xs">
                      <div class="unit-left"><span class="icon fa fa-phone"></span></div>
                      <div class="unit-body"><a class="link-phone" href="tel:#">+57 319-398-1055</a></div>
                    </div>
                  </li>
                  <li>
                    <div class="unit unit-spacing-xs">
                      <div class="unit-left"><span class="icon fa fa-whatsapp"></span></div>
                      <div class="unit-body"><a class="link-phone" href="tel:#">+57 322-476-3453</a></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="rd-navbar-main-outer">
            <div class="rd-navbar-main">
              <div class="rd-navbar-nav-wrap">
                <ul class="list-inline list-inline-md rd-navbar-corporate-list-social">
                  <li><a class="icon fa fa-facebook" href="https://www.facebook.com/chairatravel"></a></li>
                  <li><a class="icon fab fa-tiktok" href="https://www.tiktok.com/@chairatravel"></a></li>
                  <li><a class="icon fa fa-instagram" href="https://www.instagram.com/chairatravel/"></a></li>
                </ul>
                <ul class="rd-navbar-nav">
                  <li class="rd-nav-item active"><a class="rd-nav-link" href="index.html">Inicio</a></li>
                  <li class="rd-nav-item"><a class="rd-nav-link" href="about.html">Acerca de nosotros</a></li>
                  <li class="rd-nav-item"><a class="rd-nav-link" href="typography.html">Mapa Ruta</a></li>
                  <li class="rd-nav-item"><a class="rd-nav-link" href="contact-us.html">Contáctenos</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    `;
    console.log("Encabezado cargado correctamente.");
  } else {
    console.error("No se encontró el elemento <header>.");
  }
});
