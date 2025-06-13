# venntur-frontend

Este es el repositorio del frontend para Venntur


Como levantar el servidor
---
## 0. Prerrequisitos

- Versión de nvm v.20.19.2
- Levantar el proyecto de backend. Puedes encontrarlo en el siguiente repositorio: [venntur-backend](https://github.com/Coquixo/venntur-backend)

---

## 1. Instalación de dependencias

- lanzar el siguiente comando para instalar las dependencias desde el root:
```bash
npm install
```
## 2. Configurar el archivo .env

El archivo /src/environment/environment.ts indica el dominio de la API, por defecto el backend está configurado para ser levantado en el siguiente puerto http://localhost:8080.
En caso de haber modificado el puerto del backend, deberás actualizar el puerto en el archivo `src/environment/environment.ts`:


## 3. Usuario de prueba

Puedes usar las siguientes credenciales para iniciar sesión en la aplicación:

- **Email:** contact@alexlopez.net
- **Contraseña:** admin
