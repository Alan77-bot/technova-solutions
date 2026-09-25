# Guía de Contribución - TechNova Solutions

Este documento define las reglas de trabajo colaborativo para el proyecto
**TechNova Solutions**.

Todos los integrantes deben respetar estas reglas para mantener un flujo de
trabajo ordenado utilizando Git, GitHub y GitFlow.

---

## 1. Ramas principales

El proyecto utilizará las siguientes ramas:

- `main`: contiene únicamente versiones estables.
- `develop`: integra las funcionalidades desarrolladas por el equipo.
- `feature/*`: nuevas funcionalidades.
- `release/*`: preparación de nuevas versiones.
- `hotfix/*`: correcciones urgentes realizadas desde `main`.

---

## 2. Regla principal

Ningún integrante debe desarrollar directamente en:

```text
main
develop