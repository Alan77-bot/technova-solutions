<div align="center">

# 🤝 Guía de Contribución

## TechNova Solutions

**Normas de colaboración, control de versiones y flujo GitFlow**

`Git` · `GitHub` · `GitFlow` · `Pull Requests` · `Code Review`

</div>

---

## 📌 1. Propósito

Este documento establece las reglas y buenas prácticas que debe seguir todo el
equipo durante el desarrollo colaborativo de **TechNova Solutions**.

El objetivo es mantener un proceso de trabajo:

- Organizado.
- Trazable.
- Colaborativo.
- Fácil de revisar.
- Compatible con GitFlow.
- Basado en commits atómicos.
- Integrado mediante Pull Requests.

Todos los integrantes deben respetar estas reglas durante el desarrollo del
proyecto.

---

# 🌿 2. Modelo de ramas

El proyecto utiliza el modelo de trabajo **GitFlow**.

Las ramas principales utilizadas son:

| Rama | Propósito |
|---|---|
| `main` | Contiene únicamente las versiones estables del proyecto |
| `develop` | Integra las funcionalidades terminadas y revisadas |
| `feature/*` | Desarrollo de nuevas funcionalidades |
| `release/*` | Preparación de nuevas versiones |
| `hotfix/*` | Corrección de errores urgentes |

---

# 🚫 3. Regla principal

Ningún integrante debe desarrollar directamente sobre:

```text
main
develop
```

Estas ramas se utilizan principalmente para integración y versiones estables.

Todo desarrollo debe realizarse desde una rama específica.

Ejemplo:

```text
develop
   │
   └── feature/servicios
```

---

# 👥 4. Distribución del trabajo

El proyecto está desarrollado por un equipo de **6 integrantes**.

| Integrante | Primera funcionalidad | Segunda funcionalidad |
|---|---|---|
| Integrante 1 - Jefe | Inicio | Navbar / Footer |
| Integrante 2 | Servicios | Filtro de servicios |
| Integrante 3 | Soluciones | Detalle de solución |
| Integrante 4 | Nosotros | Equipo |
| Integrante 5 | Contacto | Validaciones |
| Integrante 6 | FAQ | Testimonios |

Cada integrante debe trabajar principalmente sobre las funcionalidades que
tiene asignadas.

No se debe modificar el código desarrollado por otro integrante sin
coordinación previa con el equipo.

---

# 🌱 5. Creación de ramas `feature/*`

Toda nueva funcionalidad debe comenzar desde una versión actualizada de
`develop`.

Primero se actualiza la rama:

```bash
git switch develop
git pull origin develop
```

Luego se crea una nueva rama:

```bash
git switch -c feature/nombre-funcionalidad
```

Ejemplo:

```bash
git switch -c feature/servicios
```

Las ramas utilizadas en el proyecto incluyen:

```text
feature/inicio
feature/navbar-footer

feature/servicios
feature/filtro-servicios

feature/soluciones
feature/detalle-solucion

feature/nosotros
feature/equipo

feature/contacto
feature/validacion-contacto

feature/faq
feature/testimonios
```

---

# 📝 6. Convención de commits

Todos los commits deben seguir la siguiente estructura:

```text
tipo(alcance): descripción
```

Ejemplo:

```bash
git commit -m "feat(inicio): agrega hero principal"
```

---

## Tipos de commits

| Tipo | Uso |
|---|---|
| `feat` | Agregar una nueva funcionalidad |
| `fix` | Corregir un error |
| `style` | Cambios visuales o de estilos |
| `docs` | Cambios en documentación |
| `test` | Agregar o modificar pruebas |
| `refactor` | Reorganizar código sin cambiar funcionalidad |
| `chore` | Configuración o mantenimiento |

Ejemplos:

```bash
git commit -m "feat(servicios): agrega tarjeta de desarrollo web"
```

```bash
git commit -m "style(servicios): aplica estilos a las tarjetas"
```

```bash
git commit -m "fix(contacto): corrige validacion de campos vacios"
```

```bash
git commit -m "docs(readme): mejora documentacion del proyecto"
```

```bash
git commit -m "feat(navbar): agrega navegacion global"
```

```bash
git commit -m "feat(footer): agrega pie de pagina global"
```

---

# 🎯 7. Commits atómicos

Cada commit debe representar un único cambio concreto.

No se deben utilizar mensajes como:

```text
cambios
avance
actualizacion
prueba
varias cosas
```

Ejemplo incorrecto:

```bash
git commit -m "cambios"
```

Ejemplo correcto:

```bash
git commit -m "feat(contacto): agrega formulario de contacto"
```

Otro ejemplo correcto:

```bash
git commit -m "style(contacto): adapta formulario a dispositivos moviles"
```

La finalidad de los commits atómicos es permitir que cualquier integrante pueda
comprender qué se modificó simplemente observando el historial.

---

# 💾 8. Preparar un commit

Antes de agregar cambios se debe revisar el estado del repositorio:

```bash
git status
```

Se deben agregar únicamente los archivos relacionados con el cambio realizado.

Ejemplo:

```bash
git add servicios.html css/styles.css
```

Luego se realiza el commit:

```bash
git commit -m "feat(servicios): agrega catalogo de servicios"
```

Cuando existan cambios de diferentes funcionalidades, se debe evitar utilizar:

```bash
git add .
```

para no mezclar cambios innecesarios dentro del mismo commit.

---

# ☁️ 9. Publicar una rama

La primera vez que se sube una rama al repositorio remoto se utiliza:

```bash
git push -u origin feature/nombre-rama
```

Ejemplo:

```bash
git push -u origin feature/servicios
```

Después del primer push se puede utilizar simplemente:

```bash
git push
```

---

# 🔀 10. Pull Requests

Toda rama `feature/*` debe integrarse mediante un **Pull Request**.

No se debe realizar directamente:

```bash
git switch develop
git merge feature/nombre-rama
```

El flujo correcto es:

```text
feature/*
   │
   ▼
Push
   │
   ▼
Pull Request
   │
   ▼
Code Review
   │
   ▼
Aprobaciones
   │
   ▼
Merge
   │
   ▼
develop
```

---

# 🎯 11. Configuración del Pull Request

Al crear un Pull Request se debe comprobar que la configuración sea:

```text
base: develop
compare: feature/nombre-rama
```

Ejemplo:

```text
base: develop
compare: feature/inicio
```

No se debe utilizar `main` como destino directo de una rama `feature/*`.

---

# ✍️ 12. Título del Pull Request

El título debe describir claramente la funcionalidad desarrollada.

Ejemplo:

```text
feat(inicio): implementa pagina principal de TechNova Solutions
```

Otro ejemplo:

```text
feat(layout): agrega navbar y footer globales
```

---

# 📄 13. Descripción del Pull Request

Todo Pull Request debe incluir una descripción de los cambios realizados.

Plantilla recomendada:

```markdown
## Descripción

Breve explicación de la funcionalidad desarrollada.

## Cambios realizados

- Cambio 1.
- Cambio 2.
- Cambio 3.

## Validación

- Se verificó el funcionamiento.
- Se respetó el diseño del proyecto.
- Se comprobó el diseño responsive.
- Se utilizaron commits atómicos.
```

---

# 👀 14. Revisión de código

Antes de realizar un merge, los revisores deben ingresar a:

```text
Files changed
```

y revisar los archivos modificados.

Se debe comprobar:

- Correcto funcionamiento.
- Calidad del código.
- Archivos modificados.
- Consistencia visual.
- Diseño responsive.
- Navegación.
- Posibles errores.
- Cambios innecesarios.
- Conflictos.
- Uso correcto de estilos compartidos.

---

# ✅ 15. Aprobaciones

Cada Pull Request relevante debe recibir como mínimo:

```text
2 aprobaciones
```

antes de realizar el merge.

Las aprobaciones deben ser realizadas por integrantes distintos al autor del
Pull Request.

El autor no debe utilizar su propia aprobación como revisión válida.

---

# 💬 16. Comentarios y sugerencias

Los revisores pueden utilizar las herramientas disponibles en GitHub para:

- 💬 Comentar una línea.
- 💡 Realizar sugerencias.
- ✅ Aprobar los cambios.
- ❌ Solicitar modificaciones.

Cuando exista una corrección, el autor debe realizarla en la misma rama.

Ejemplo:

```text
feature/contacto
```

Se realiza la corrección:

```bash
git add contacto.html
git commit -m "fix(contacto): corrige validacion solicitada en revision"
git push
```

El Pull Request se actualizará automáticamente.

---

# ⚔️ 17. Resolución de conflictos

Si un Pull Request presenta conflictos con `develop`, estos deben resolverse
antes de realizar el merge.

Primero se actualizan las referencias:

```bash
git fetch origin
```

Luego se cambia a la rama correspondiente:

```bash
git switch feature/nombre-rama
```

Después se integra la versión actual de `develop`:

```bash
git merge origin/develop
```

Se deben revisar manualmente los archivos que presentan conflictos.

Uno de los archivos compartidos que puede generar conflictos es:

```text
css/styles.css
```

Después de resolver el conflicto:

```bash
git add css/styles.css
```

Si Git requiere confirmar la resolución:

```bash
git commit -m "fix(servicios): resuelve conflicto con develop"
```

Finalmente:

```bash
git push
```

---

# ⚠️ 18. Regla para resolver conflictos

No se debe resolver un conflicto eliminando automáticamente el trabajo de otro
integrante.

Se debe analizar qué cambios pertenecen a cada funcionalidad y conservar todos
los cambios válidos.

Ejemplo:

```text
SERVICIOS - INTEGRANTE 2

CONTACTO - INTEGRANTE 5

FAQ - INTEGRANTE 6
```

Si los tres bloques son correctos, los tres deben permanecer después de
resolver el conflicto.

---

# 🎨 19. Archivo `styles.css`

El archivo:

```text
css/styles.css
```

es compartido por todo el equipo.

Cada integrante debe colocar sus estilos dentro del bloque correspondiente a su
funcionalidad.

Ejemplo:

```css
/* =========================================
   SERVICIOS - INTEGRANTE 2
========================================= */
```

No se deben modificar sin coordinación los estilos pertenecientes a otros
integrantes.

---

# 🎨 20. Identidad visual

Todas las páginas deben respetar la misma identidad visual.

La paleta definida para el proyecto es:

| Elemento | Color |
|---|---|
| Principal | `#971A2D` |
| Secundario | `#244779` |
| Verde | `#278C57` |
| Dorado | `#D98A00` |
| Texto | `#22252B` |
| Fondo | `#F7F8FA` |
| Blanco | `#FFFFFF` |

La tipografía utilizada es:

```css
font-family: Arial, Helvetica, sans-serif;
```

---

# 🧱 21. Componentes compartidos

Los integrantes deben reutilizar los estilos y componentes comunes cuando sea
posible.

Ejemplos:

```text
.btn-team
.card-team
.section-title
.container-team
```

No se deben reemplazar estos estilos globales sin coordinación con el equipo.

---

# 📱 22. Diseño responsive

Cada funcionalidad debe comprobarse en diferentes tamaños de pantalla.

Como mínimo:

```text
Escritorio
Tablet
Móvil
```

El proyecto puede utilizar:

- Bootstrap Grid.
- Flexbox.
- CSS Grid.
- Media Queries.

Ejemplo:

```css
@media (max-width: 991px) {
    /* Tablet */
}

@media (max-width: 576px) {
    /* Móvil */
}
```

---

# 🧪 23. Verificación antes del Pull Request

Antes de publicar una funcionalidad se debe ejecutar:

```bash
git status
```

El resultado esperado es:

```text
nothing to commit, working tree clean
```

También se recomienda revisar el historial:

```bash
git log --oneline
```

La funcionalidad debe probarse en el navegador utilizando Live Server o una
herramienta equivalente.

---

# 🔄 24. Actualización de `develop`

Después de que una funcionalidad sea integrada mediante Pull Request:

```bash
git switch develop
git pull origin develop
```

Esto permite obtener todos los cambios más recientes realizados por el equipo.

Antes de iniciar una nueva funcionalidad se debe crear la nueva rama desde
este `develop` actualizado.

---

# 🔐 25. Protección de ramas

Las ramas principales deben protegerse:

```text
main
develop
```

La configuración del repositorio debe impedir, cuando sea posible:

- Push directo.
- Merge sin Pull Request.
- Merge sin revisiones requeridas.
- Integración de cambios sin aprobación.

Los cambios deben pasar por Pull Request y revisión.

---

# 🧬 26. Método de merge

Cuando un Pull Request ha sido revisado y aprobado se utilizará:

```text
Create a merge commit
```

Esto permite conservar los commits atómicos realizados durante el desarrollo.

No se utilizará:

```text
Squash and merge
```

cuando sea necesario mantener el historial individual de los commits.

---

# 🌳 27. Conservación de ramas

Durante este proyecto las ramas se conservarán después de realizar el merge.

Ejemplos:

```text
feature/inicio
feature/navbar-footer
feature/servicios
feature/contacto
feature/faq
```

Esto permite mantener evidencia del flujo de trabajo utilizado durante la
evaluación.

Por esta razón:

```text
NO eliminar las ramas después del merge
```

---

# 📦 28. Rama `release/*`

Cuando las funcionalidades necesarias estén integradas y verificadas en
`develop`, se debe crear una rama de release.

Ejemplo:

```bash
git switch develop
git pull origin develop
git switch -c release/1.0.0
```

La rama `release/*` se utiliza para:

- Revisión final.
- Correcciones menores.
- Preparación de versión.
- Validación antes de publicar una versión estable.

Al finalizar debe integrarse en:

```text
main
develop
```

---

# 🏷️ 29. Versionamiento

Después de integrar una versión estable en `main`, se puede crear un tag.

Ejemplo:

```bash
git switch main
git pull origin main

git tag v1.0.0

git push origin v1.0.0
```

El proyecto utilizará versionamiento semántico:

```text
MAJOR.MINOR.PATCH
```

Ejemplo:

```text
v1.0.0
```

---

# 🚑 30. Rama `hotfix/*`

Si se encuentra un error urgente en una versión estable, se debe crear una rama
desde `main`.

Ejemplo:

```bash
git switch main
git pull origin main
git switch -c hotfix/1.0.1
```

Después de solucionar el problema:

```bash
git add archivo
git commit -m "fix(proyecto): corrige error detectado en produccion"
```

La rama debe integrarse posteriormente en:

```text
main
develop
```

Después se puede crear un nuevo tag:

```text
v1.0.1
```

---

# 🧹 31. Archivo `.gitignore`

Todos los integrantes deben respetar el archivo:

```text
.gitignore
```

No se deben subir al repositorio:

- Dependencias locales.
- Archivos temporales.
- Archivos generados automáticamente.
- Configuraciones personales.
- Credenciales.
- Archivos innecesarios.

---

# 📂 32. Estructura del proyecto

La estructura general utilizada es:

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

---

# 📋 33. Checklist antes del merge

Antes de confirmar un merge se debe verificar:

- [ ] La funcionalidad funciona correctamente.
- [ ] La rama está actualizada.
- [ ] No existen conflictos pendientes.
- [ ] Se realizaron commits atómicos.
- [ ] Los mensajes de commit siguen la convención.
- [ ] Se revisaron los archivos en `Files changed`.
- [ ] Se realizaron las revisiones necesarias.
- [ ] Existen las aprobaciones requeridas.
- [ ] El diseño respeta la identidad visual.
- [ ] La funcionalidad es responsive.
- [ ] No se modificaron archivos innecesarios.

---

# 🔄 34. Flujo general del equipo

```text
main
 │
 └── develop
       │
       ├── feature/*
       │      │
       │      ├── Desarrollo
       │      ├── Commits atómicos
       │      ├── Push
       │      │
       │      ▼
       │   Pull Request
       │      │
       │      ├── Files changed
       │      ├── Code Review
       │      ├── 2 aprobaciones
       │      │
       │      ▼
       │     Merge
       │      │
       │      ▼
       │   develop
       │
       ├── release/*
       │      │
       │      ├── main
       │      └── develop
       │
       └── hotfix/*
              │
              ├── main
              └── develop
```

---

<div align="center">

# ✅ Regla de oro

### Una funcionalidad → Una rama → Commits atómicos → Push → Pull Request → Revisión → Aprobación → Merge

**TechNova Solutions**

`Orden` · `Colaboración` · `Trazabilidad`

</div>
