# Guía de contribución — TechNova Solutions

Este documento establece las reglas de trabajo colaborativo utilizadas en el proyecto **TechNova Solutions**.

## 1. Modelo de trabajo

El proyecto utiliza GitFlow con las siguientes ramas:

- `main`: versiones estables del proyecto.
- `develop`: integración de las funcionalidades.
- `feature/*`: desarrollo de funcionalidades.
- `release/*`: preparación de versiones.
- `hotfix/*`: correcciones urgentes sobre una versión publicada.

## 2. Reglas generales

1. No realizar desarrollo directamente en `main`.
2. No desarrollar funcionalidades directamente en `develop`.
3. Toda rama `feature/*` debe crearse desde `develop` actualizado.
4. Toda rama `release/*` debe crearse desde `develop`.
5. Toda rama `hotfix/*` debe crearse desde `main`.
6. Cada integrante debe trabajar en las ramas correspondientes a sus tareas.
7. Los cambios deben integrarse mediante Pull Requests.
8. No se debe fusionar un Pull Request que tenga conflictos sin resolver.
9. No se debe modificar la paleta, tipografía o componentes visuales generales sin coordinación con el equipo.
10. Las ramas utilizadas en el proyecto deben conservarse para permitir la revisión de su historial por parte del docente.

## 3. Creación de una rama feature

Antes de iniciar una funcionalidad:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/nombre-funcionalidad
```

Ejemplo:

```bash
git checkout -b feature/faq
```

Cada rama debe contener únicamente los cambios relacionados con la funcionalidad que se está desarrollando.

## 4. Convención de commits

Los commits deben seguir el formato:

```text
tipo(area): descripción
```

Tipos utilizados:

- `feat`: nueva funcionalidad.
- `fix`: corrección de un error.
- `style`: cambios visuales sin modificar la lógica.
- `docs`: documentación.
- `test`: pruebas.
- `refactor`: reorganización del código sin cambiar su comportamiento.
- `chore`: mantenimiento o configuración.

Ejemplos:

```text
feat(servicios): agrega catalogo de servicios
style(inicio): aplica estilos comunes al hero
fix(contacto): corrige validacion de correo
docs(readme): agrega instrucciones de ejecucion
```

Los commits deben ser claros y estar relacionados con una misma tarea.

## 5. Publicación de una rama

Después de realizar los commits:

```bash
git push -u origin nombre-rama
```

Ejemplo:

```bash
git push -u origin feature/faq
```

La opción `-u` establece la relación entre la rama local y su correspondiente rama remota.

## 6. Pull Requests

Las funcionalidades normales deben integrarse mediante:

```text
feature/* → develop
```

Cada Pull Request debe incluir:

- Descripción de lo realizado.
- Archivos principales modificados.
- Forma de probar la funcionalidad.
- Revisor asignado.
- Cambios relacionados únicamente con la tarea correspondiente.

No se debe realizar el merge hasta completar la revisión.

## 7. Revisiones

La revisión principal del equipo sigue este orden:

| Autor del PR | Revisor principal |
|---|---|
| Integrante 1 | Integrante 2 |
| Integrante 2 | Integrante 3 |
| Integrante 3 | Integrante 4 |
| Integrante 4 | Integrante 5 |
| Integrante 5 | Integrante 6 |
| Integrante 6 | Integrante 1 |

El revisor debe comprobar los archivos modificados y verificar que:

- Los cambios correspondan a la funcionalidad indicada.
- No existan modificaciones innecesarias.
- La funcionalidad pueda probarse correctamente.
- No existan conflictos pendientes.

Si se solicitan cambios, estos deben realizarse en la misma rama del Pull Request.

## 8. Protección de la rama principal

La rama `main` representa la versión estable del proyecto.

Para las integraciones hacia `main` se debe utilizar Pull Request y respetar la protección configurada en GitHub.

De acuerdo con los requisitos del proyecto, se requieren al menos **2 aprobaciones antes de realizar un merge hacia la rama principal**.

## 9. Release

Una release debe crearse desde `develop` cuando las funcionalidades necesarias estén integradas y el proyecto se encuentre estable.

Ejemplo:

```bash
git checkout develop
git pull origin develop
git checkout -b release/1.0.0
```

En una rama `release` no deben agregarse nuevas funcionalidades. Se utiliza para correcciones finales, documentación y preparación de la versión.

La release debe integrarse posteriormente en:

```text
release/1.0.0 → main
release/1.0.0 → develop
```

## 10. Hotfix

Los hotfix se crean desde `main` para corregir errores detectados después de una publicación.

Ejemplo:

```bash
git checkout main
git pull origin main
git checkout -b hotfix/1.0.1
```

El hotfix debe integrarse tanto en:

```text
hotfix/1.0.1 → main
hotfix/1.0.1 → develop
```

## 11. Actualización del repositorio

Antes de crear una nueva rama desde `develop`:

```bash
git checkout develop
git pull origin develop
```

Antes de crear un hotfix:

```bash
git checkout main
git pull origin main
```

Esto permite trabajar desde la versión más reciente del proyecto.

## 12. Conservación de ramas

Las ramas utilizadas durante el proyecto **no deben eliminarse después del merge**, ya que el docente revisará su historial como evidencia del trabajo realizado.

Esto aplica a las ramas:

```text
feature/*
fix/*
docs/*
release/*
hotfix/*
```

## 13. Evidencias

Cada integrante debe conservar evidencias de su trabajo, entre ellas:

- Rama utilizada.
- Historial de commits.
- Rama publicada en GitHub.
- Pull Requests realizados.
- Revisiones recibidas.
- Revisiones realizadas a otros integrantes.
- Funcionalidad terminada.

Las evidencias serán utilizadas para el informe y la defensa del proyecto.