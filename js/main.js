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

document.addEventListener("DOMContentLoaded", function () {

    cargarNavbar();
    marcarPaginaActiva();

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