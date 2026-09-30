/* =========================================
   TECHNOVA SOLUTIONS
   JAVASCRIPT GENERAL DEL PROYECTO
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  console.log("TechNova Solutions cargado correctamente.");
});

/* =========================================
   INICIO - INTEGRANTE 1
   Rama: feature/inicio
========================================= */

// =========================================
// NAVBAR GLOBAL - INTEGRANTE 1
// Rama: feature/navbar-footer
// =========================================

// =========================================
// NAVBAR GLOBAL - INTEGRANTE 1
// Rama: feature/navbar-footer
// =========================================

function cargarNavbar() {
  const header = document.querySelector("header");

  if (!header) {
    return;
  }

  header.classList.add("site-header");

  header.innerHTML = `
        <nav class="navbar navbar-expand-lg site-navbar">

            <div class="container">

                <!-- MARCA -->
                <a
                    class="navbar-brand site-brand"
                    href="index.html"
                    aria-label="Ir al inicio de TechNova Solutions"
                >

                    <span class="site-brand-logo">
                        TN
                    </span>

                    <span class="site-brand-text">

                        <strong>
                            TechNova
                        </strong>

                        <small>
                            Digital Solutions
                        </small>

                    </span>

                </a>


                <!-- BOTÓN MENÚ MÓVIL -->
                <button
                    class="navbar-toggler site-navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTechNova"
                    aria-controls="navbarTechNova"
                    aria-expanded="false"
                    aria-label="Abrir menú de navegación"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>


                <!-- NAVEGACIÓN -->
                <div
                    class="collapse navbar-collapse"
                    id="navbarTechNova"
                >

                    <ul class="navbar-nav ms-auto align-items-lg-center site-nav">

                        <li class="nav-item">
                            <a
                                class="nav-link site-nav-link"
                                href="index.html"
                            >
                                Inicio
                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                class="nav-link site-nav-link"
                                href="servicios.html"
                            >
                                Servicios
                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                class="nav-link site-nav-link"
                                href="soluciones.html"
                            >
                                Soluciones
                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                class="nav-link site-nav-link"
                                href="nosotros.html"
                            >
                                Nosotros
                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                class="nav-link site-nav-link"
                                href="faq.html"
                            >
                                FAQ
                            </a>
                        </li>

                        <li class="nav-item site-nav-contact">

                            <a
                                class="site-nav-button"
                                href="contacto.html"
                            >
                                <span class="site-nav-button-text">
                                    Hablemos
                                </span>

                                <span
                                    class="site-nav-button-arrow"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </a>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    `;
}

// =========================================
// PÁGINA ACTIVA
// =========================================

function marcarPaginaActiva() {
  const paginaActual =
    window.location.pathname.split("/").pop() || "index.html";

  const enlaces = document.querySelectorAll(".site-nav-link, .site-nav-button");

  enlaces.forEach(function (enlace) {
    const destino = enlace.getAttribute("href");

    if (destino === paginaActual) {
      enlace.classList.add("active");

      enlace.setAttribute("aria-current", "page");
    }
  });
}

// =========================================
// CERRAR MENÚ MÓVIL AL NAVEGAR
// =========================================

function configurarMenuMovil() {
  const menu = document.getElementById("navbarTechNova");

  if (!menu) {
    return;
  }

  const enlaces = menu.querySelectorAll("a");

  enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
      if (
        window.innerWidth < 992 &&
        menu.classList.contains("show") &&
        window.bootstrap
      ) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(menu);

        collapse.hide();
      }
    });
  });
}

// =========================================
// FOOTER GLOBAL - INTEGRANTE 1
// Rama: feature/navbar-footer
// =========================================

function cargarFooter() {
  const footer = document.querySelector("footer");

  if (!footer) {
    return;
  }

  const anioActual = new Date().getFullYear();

  footer.classList.add("site-footer");

  footer.innerHTML = `

        <!-- DECORACIONES -->
        <div class="footer-decoration footer-decoration-one"></div>
        <div class="footer-decoration footer-decoration-two"></div>

        <div class="container">

            <!-- =====================================
                 PARTE SUPERIOR
            ====================================== -->
            <div class="site-footer-main">


                <!-- MARCA -->
                <div class="footer-brand-column">

                    <a
                        href="index.html"
                        class="footer-brand"
                    >

                        <span class="footer-brand-logo">
                            TN
                        </span>

                        <span class="footer-brand-text">

                            <strong>
                                TechNova
                            </strong>

                            <small>
                                Digital Solutions
                            </small>

                        </span>

                    </a>


                    <p class="footer-description">
                        Transformamos ideas en soluciones digitales
                        modernas, confiables y preparadas para
                        acompañar el crecimiento de cada proyecto.
                    </p>


                    <div class="footer-brand-message">

                        <span class="footer-brand-dot"></span>

                        <span>
                            Tecnología con propósito
                        </span>

                    </div>

                </div>


                <!-- NAVEGACIÓN -->
                <div class="footer-column">

                    <span class="footer-column-label">
                        EXPLORAR
                    </span>

                    <h3>
                        Navegación
                    </h3>

                    <a href="index.html">
                        <span>→</span>
                        Inicio
                    </a>

                    <a href="servicios.html">
                        <span>→</span>
                        Servicios
                    </a>

                    <a href="soluciones.html">
                        <span>→</span>
                        Soluciones
                    </a>

                    <a href="nosotros.html">
                        <span>→</span>
                        Nosotros
                    </a>

                </div>


                <!-- RECURSOS -->
                <div class="footer-column">

                    <span class="footer-column-label">
                        INFORMACIÓN
                    </span>

                    <h3>
                        Recursos
                    </h3>

                    <a href="faq.html">
                        <span>→</span>
                        Preguntas frecuentes
                    </a>

                    <a href="contacto.html">
                        <span>→</span>
                        Contacto
                    </a>

                    <a href="servicios.html">
                        <span>→</span>
                        Desarrollo Web
                    </a>

                    <a href="soluciones.html">
                        <span>→</span>
                        Soluciones digitales
                    </a>

                </div>


                <!-- CTA -->
                <div class="footer-contact-column">

                    <span class="footer-small-title">
                        ¿TIENES UNA IDEA?
                    </span>

                    <h3>
                        Construyamos algo
                        que genere valor.
                    </h3>

                    <p>
                        Conoce cómo TechNova puede ayudarte
                        a convertir una necesidad en una
                        solución tecnológica.
                    </p>

                    <a
                        href="contacto.html"
                        class="footer-contact-button"
                    >
                        Iniciar conversación

                        <span aria-hidden="true">
                            →
                        </span>
                    </a>

                </div>

            </div>


            <!-- =====================================
                 BARRA INFERIOR
            ====================================== -->
            <div class="site-footer-bottom">

                <div class="footer-copyright">

                    <span class="footer-mini-logo">
                        TN
                    </span>

                    <p>
                        © ${anioActual} TechNova Solutions.
                        Todos los derechos reservados.
                    </p>

                </div>


                <div class="footer-bottom-values">

                    <span>
                        Innovación
                    </span>

                    <span class="footer-separator">
                        •
                    </span>

                    <span>
                        Tecnología
                    </span>

                    <span class="footer-separator">
                        •
                    </span>

                    <span>
                        Confianza
                    </span>

                </div>

            </div>

        </div>
    `;
}

// =========================================
// INICIALIZACIÓN
// =========================================

document.addEventListener("DOMContentLoaded", function () {
  cargarNavbar();
  cargarFooter();

  marcarPaginaActiva();
  configurarMenuMovil();
});

/* =========================================
   SERVICIOS - INTEGRANTE 2
   Rama: feature/servicios
========================================= */

/* =========================================
   FILTRO DE SERVICIOS - INTEGRANTE 2
   Rama: feature/filtro-servicios
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  const buscador = document.getElementById("buscador-servicios");
  const botones = document.querySelectorAll(".filtro-btn");
  const servicios = document.querySelectorAll(".servicio-item");
  const mensajeVacio = document.getElementById("sin-resultados");
  let categoriaActiva = "todos";

  // Si la página no tiene filtro, no hace nada
  if (!buscador) {
    return;
  }

  function aplicarFiltros() {
    const texto = buscador.value.toLowerCase().trim();
    let visibles = 0;

    servicios.forEach(function (servicio) {
      const contenido = (
        servicio.querySelector("h3").textContent +
        " " +
        servicio.querySelector("p").textContent
      ).toLowerCase();

      const coincideTexto = contenido.includes(texto);
      const coincideCategoria =
        categoriaActiva === "todos" ||
        servicio.dataset.categoria === categoriaActiva;
      const mostrar = coincideTexto && coincideCategoria;

      servicio.classList.toggle("d-none", !mostrar);

      if (mostrar) {
        visibles++;
      }
    });

    mensajeVacio.classList.toggle("d-none", visibles > 0);
  }

  buscador.addEventListener("input", aplicarFiltros);

  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      categoriaActiva = boton.dataset.filtro;

      botones.forEach(function (b) {
        b.classList.remove("activo");
      });
      boton.classList.add("activo");

      aplicarFiltros();
    });
  });
});

/* =========================================
   DETALLE DE SERVICIO - INTEGRANTE 2
   Rama: feature/rediseno-servicios
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("detalle-servicio");

  // Si la página no tiene este contenedor, no hace nada
  if (!contenedor) {
    return;
  }

  const servicios = {
    desarrollo: {
      titulo: "Desarrollo Web",
      icono: "bi-code-slash",
      imagen: "assets/img/servicio-desarrollo.jpg",
      descripcion:
        "Creamos sitios y aplicaciones web modernas, rápidas y adaptadas a cualquier dispositivo, usando las mejores prácticas de desarrollo front-end y back-end.",
    },
    soporte: {
      titulo: "Soporte Técnico",
      icono: "bi-headset",
      imagen: "assets/img/servicio-soporte.jpg",
      descripcion:
        "Brindamos asistencia técnica rápida y confiable para mantener tus equipos y sistemas funcionando, con tiempos de respuesta ágiles.",
    },
    nube: {
      titulo: "Nube",
      icono: "bi-cloud",
      imagen: "assets/img/servicio-nube.jpg",
      descripcion:
        "Migramos y gestionamos tu infraestructura en la nube con soluciones seguras, escalables y adaptadas al crecimiento de tu empresa.",
    },
    consultoria: {
      titulo: "Consultoría",
      icono: "bi-lightbulb",
      imagen: "assets/img/servicio-consultoria.jpg",
      descripcion:
        "Asesoramos a tu empresa en la adopción de tecnología para mejorar sus procesos, reducir costos y potenciar sus resultados.",
    },
  };

  const parametros = new URLSearchParams(window.location.search);
  const id = parametros.get("id");
  const servicio = servicios[id];

  if (!servicio) {
    contenedor.innerHTML = `
      <h1 class="section-title">Servicio no encontrado</h1>
      <p>El servicio que buscas no existe o el enlace es incorrecto.</p>
      <a href="servicios.html" class="btn-team">Volver a Servicios</a>
    `;
    return;
  }

  contenedor.innerHTML = `
    <div class="detalle-servicio-header">
      <i class="bi ${servicio.icono} card-icon"></i>
      <h1 class="section-title">${servicio.titulo}</h1>
    </div>

    <img
      src="${servicio.imagen}"
      alt="${servicio.titulo}"
      class="detalle-servicio-img"
    >

    <p class="detalle-servicio-texto">${servicio.descripcion}</p>

    <a href="servicios.html" class="btn-team">Volver a Servicios</a>
  `;
});

/* =========================================
   SOLUCIONES - INTEGRANTE 3
   Rama: feature/soluciones
========================================= */

/* =========================================
   DETALLE DE SOLUCIÓN - INTEGRANTE 3
   Rama: feature/detalle-solucion
========================================= */

/* =========================================
   NOSOTROS - INTEGRANTE 4
   Rama: feature/nosotros
========================================= */

/* =========================================
   EQUIPO - INTEGRANTE 4
   Rama: feature/equipo
========================================= */

/* =========================================
   CONTACTO - INTEGRANTE 5
   Rama: feature/contacto
========================================= */

/* =========================================
   VALIDACIÓN DE CONTACTO - INTEGRANTE 5
   Rama: feature/validacion-contacto
========================================= */

/* =========================================
   FAQ - INTEGRANTE 6
   Rama: feature/faq
========================================= */

/* =========================================
   TESTIMONIOS - INTEGRANTE 6
   Rama: feature/testimonios
========================================= */
