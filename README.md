# TechNova Solutions

Sitio web informativo desarrollado de forma colaborativa para la asignatura
**Manejo y Configuración del Software** de la carrera de Software de la
Universidad Técnica de Ambato.

## Descripción

TechNova Solutions es una empresa ficticia dedicada a ofrecer soluciones
tecnológicas como desarrollo web, soporte técnico, servicios en la nube y
consultoría.

El propósito del proyecto es simular un entorno real de desarrollo colaborativo
utilizando Git, GitHub y el flujo de trabajo GitFlow.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap
- Git
- GitHub

## Metodología de trabajo

El proyecto utiliza el modelo GitFlow con las siguientes ramas:

- `main`: contiene las versiones estables del proyecto.
- `develop`: integra las funcionalidades desarrolladas por el equipo.
- `feature/*`: se utiliza para desarrollar nuevas funcionalidades.
- `release/*`: se utiliza para preparar una nueva versión.
- `hotfix/*`: se utiliza para corregir errores urgentes de producción.

Las funcionalidades se desarrollan en ramas independientes y posteriormente
se integran mediante Pull Requests y revisión de código.

## Integrantes

El proyecto está desarrollado por un equipo de 6 integrantes.

| Integrante | Responsabilidad |
|---|---|
| Integrante 1 - Jefe de grupo | Inicio y Navbar/Footer |
| Integrante 2 | Servicios y filtro de servicios |
| Integrante 3 | Soluciones y detalle de solución |
| Integrante 4 | Nosotros y equipo |
| Integrante 5 | Contacto y validaciones |
| Integrante 6 | FAQ y testimonios |

## Estructura del proyecto

```text
technova-solutions/
│
├── index.html
├── servicios.html
├── soluciones.html
├── nosotros.html
├── contacto.html
├── faq.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── main.js
│
├── assets/
│   └── img/
│
├── README.md
├── CONTRIBUTING.md
├── LICENSE
└── .gitignore
```

## Ejecución del proyecto

El proyecto no necesita instalación de dependencias ni base de datos.

### Opción 1: abrir directamente

1. Clonar el repositorio:

```bash
git clone https://github.com/Alan77-bot/technova-solutions.git
```

2. Ingresar a la carpeta:

```bash
cd technova-solutions
```

3. Abrir el archivo:

```text
index.html
```

en un navegador web.

### Opción 2: utilizar Live Server

Si se utiliza Visual Studio Code:

1. Abrir la carpeta del proyecto.
2. Instalar la extensión **Live Server** si no está instalada.
3. Hacer clic derecho sobre `index.html`.
4. Seleccionar **Open with Live Server**.

## Flujo de contribución

Para desarrollar una funcionalidad se utiliza el siguiente flujo:

```text
develop
   ↓
feature/nombre
   ↓
commits
   ↓
push
   ↓
Pull Request
   ↓
revisión
   ↓
develop
```

No se desarrollan funcionalidades directamente en `main` ni en `develop`.

## Convención de commits

Los commits utilizan el formato:

```text
tipo(area): descripción
```

Ejemplos:

```text
feat(faq): agrega preguntas frecuentes
style(testimonios): unifica tarjetas con diseño general
fix(testimonios): restaura y adapta seccion al diseño actual
docs(repo): completa documentacion del proyecto
```

Los tipos utilizados incluyen:

- `feat`: nueva funcionalidad.
- `fix`: corrección.
- `style`: cambios visuales.
- `docs`: documentación.
- `refactor`: reorganización sin cambiar el comportamiento.
- `chore`: tareas de mantenimiento o configuración.

## Pull Requests y revisiones

Las funcionalidades se integran mediante Pull Requests.

El flujo de revisión establecido para el equipo es:

| Autor | Revisor principal |
|---|---|
| Integrante 1 | Integrante 2 |
| Integrante 2 | Integrante 3 |
| Integrante 3 | Integrante 4 |
| Integrante 4 | Integrante 5 |
| Integrante 5 | Integrante 6 |
| Integrante 6 | Integrante 1 |

Antes de realizar un merge se revisan los archivos modificados y se comprueba
que los cambios correspondan únicamente a la tarea desarrollada.

## Ventajas del flujo utilizado

- Permite que varios integrantes trabajen de manera paralela.
- Evita desarrollar directamente sobre la versión estable.
- Mantiene un historial de cambios mediante commits.
- Permite revisar los cambios antes de integrarlos.
- Facilita identificar qué integrante desarrolló cada funcionalidad.

## Dificultades encontradas

Durante el desarrollo colaborativo se presentaron situaciones como:

- Integración de cambios realizados por diferentes integrantes.
- Necesidad de mantener un diseño visual uniforme.
- Corrección de funcionalidades que dejaron de aparecer después de una integración.
- Coordinación de ramas y Pull Requests.
- Revisión del historial de ramas y commits.

Estos problemas se resolvieron utilizando ramas independientes, Pull Requests,
revisiones de código y actualización constante de la rama `develop`.

## Licencia

El proyecto incluye un archivo `LICENSE` con la licencia seleccionada por el equipo.