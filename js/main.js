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

function cargarNavbar() {

   

    const header = document.querySelector("header");

    if (!header) {
        return;
    }

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
                        <strong>TechNova</strong>
                        <small>Solutions</small>
                    </span>

                </a>


                <!-- BOTÓN MÓVIL -->
                <button
                    class="navbar-toggler site-navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTechNova"
                    aria-controls="navbarTechNova"
                    aria-expanded="false"
                    aria-label="Abrir navegación"
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
                                Contáctanos
                                <span>→</span>
                            </a>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    `;
}

// =========================================
// PÁGINA ACTIVA DEL NAVBAR
// =========================================

function marcarPaginaActiva() {

    const paginaActual =
        window.location.pathname.split("/").pop()
        || "index.html";

    const enlaces =
        document.querySelectorAll(".site-nav-link");

    enlaces.forEach(function (enlace) {

        const destino = enlace.getAttribute("href");

        if (destino === paginaActual) {

            enlace.classList.add("active");

        }

    });
}


function cargarFooter() {

    const footer = document.querySelector("footer");

    if (!footer) {
        return;
    }


    const anioActual =
        new Date().getFullYear();


    footer.classList.add("site-footer");


    footer.innerHTML = `
        <div class="container">

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

                        <span>
                            <strong>TechNova</strong>
                            <small>Solutions</small>
                        </span>

                    </a>


                    <p class="footer-description">
                        Creamos soluciones digitales modernas,
                        confiables y preparadas para acompañar
                        el crecimiento de cada proyecto.
                    </p>


                    <span class="footer-badge">
                        Tecnología con propósito
                    </span>

                </div>


                <!-- NAVEGACIÓN -->
                <div class="footer-column">

                    <h3>
                        Navegación
                    </h3>

                    <a href="index.html">
                        Inicio
                    </a>

                    <a href="servicios.html">
                        Servicios
                    </a>

                    <a href="soluciones.html">
                        Soluciones
                    </a>

                    <a href="nosotros.html">
                        Nosotros
                    </a>

                </div>


                <!-- INFORMACIÓN -->
                <div class="footer-column">

                    <h3>
                        Explorar
                    </h3>

                    <a href="faq.html">
                        Preguntas frecuentes
                    </a>

                    <a href="contacto.html">
                        Contacto
                    </a>

                    <a href="servicios.html">
                        Desarrollo Web
                    </a>

                    <a href="soluciones.html">
                        Soluciones digitales
                    </a>

                </div>


                <!-- CTA -->
                <div class="footer-contact-column">

                    <span class="footer-small-title">
                        ¿TIENES UN PROYECTO?
                    </span>

                    <h3>
                        Hagamos algo
                        extraordinario.
                    </h3>

                    <p>
                        Descubre cómo TechNova puede ayudarte
                        a transformar una idea en una solución.
                    </p>

                    <a
                        href="contacto.html"
                        class="footer-contact-button"
                    >
                        Contáctanos
                        <span>→</span>
                    </a>

                </div>

            </div>


            <!-- PARTE INFERIOR -->
            <div class="site-footer-bottom">

                <p>
                    © ${anioActual} TechNova Solutions.
                </p>

                <p>
                    Innovación · Tecnología · Confianza
                </p>

            </div>

        </div>
    `;
}

document.addEventListener("DOMContentLoaded", function () {

    cargarNavbar();
    marcarPaginaActiva();
    cargarFooter();

});



/* =========================================
   SERVICIOS - INTEGRANTE 2
   Rama: feature/servicios
========================================= */



/* =========================================
   FILTRO DE SERVICIOS - INTEGRANTE 2
   Rama: feature/filtro-servicios
========================================= */



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