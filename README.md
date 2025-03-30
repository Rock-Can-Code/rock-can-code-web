# Rock and Code

Bienvenidos a **Rock and Code (RCC)**, el repositorio open source que contiene el código de la web oficial de RCC. Este proyecto está desarrollado en **Next.js**, utilizando una plantilla base optimizada para rendimiento y escalabilidad. Nuestra comunidad de desarrolladores colabora activamente para mejorar y expandir la plataforma, siguiendo buenas prácticas de desarrollo y una estrategia clara de gestión de código.

---

## 🚀 Instalación y configuración del proyecto

Para poner en marcha el proyecto en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/rockandcode/rock-can-code-web.git
   cd rock-can-code-web
   ```
2. **Instalar dependencias:**
   Asegúrate de tener instalado **Node.js** (versión recomendada 18.x o superior) y **npm** o **yarn**.
   
   - [Descargar Node.js](https://nodejs.org/)
   - Instalar dependencias del proyecto:
     ```bash
     npm install
     ```

3. **Configurar variables de entorno:**
   - Copia el archivo `.env.example` a `.env.local` y completa los valores necesarios.
   
4. **Levantar el entorno de desarrollo:**
   ```bash
   npm run dev
   ```
   El proyecto se ejecutará en `http://localhost:3000`.

5. **Verifica que todo funciona correctamente antes de empezar a desarrollar.**

---
## 📌 Estrategia de ramas

El proyecto sigue una estrategia basada en **Git Flow** con adaptaciones para rama "pre". Las principales ramas son:

- **`main`** → Contiene el código de producción estable.
- **`develop`** → Rama principal de desarrollo con código en integración.
- **`pre`** → (Opcional) Para pruebas antes de llegar a `main`, si es solicitada por el equipo de pre.
- **`feature/*`** → Para el desarrollo de nuevas funcionalidades.
- **`bugfix/*`** → Para correcciones de errores en `develop`.
- **`hotfix/*`** → Para correcciones urgentes en `main`.

**Flujo recomendado:**
1. Abre una **issue** en el repositorio para discutir la tarea con el equipo.
2. Si la tarea es aprobada, se te asignará y podrás crear una rama `feature/nombre-de-la-feature`, `bugfix/nombre-del-bug` o `hotfix/nombre-del-hotfix` basada en `develop` o `main`, según corresponda.
3. Desarrolla y asegúrate de cumplir con las convenciones de código.
4. Abre un Pull Request (PR) hacia `develop` cuando esté listo.
5. El código será revisado y probado antes de ser fusionado.

---

## 🎨 Convención de estilos

Para mantener un código limpio y consistente, seguimos estas normas:

- **Formato de código:** Utilizamos `Prettier` para formateo automático.
- **Commits:** Se sigue la convención de [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat: nueva funcionalidad`
  - `fix: corrección de bug`
  - `chore: cambios menores sin impacto funcional`
- **Naming:** Nombres de variables y funciones en inglés con camelCase.
- **Guía de estilo:** Nos basamos en la [Google Style Guide](https://google.github.io/styleguide/) para definir las reglas de codificación y buenas prácticas.

---

## 🤝 Cómo contribuir

Si quieres colaborar en el proyecto, sigue estos pasos:

1. **Abre una issue en el repositorio para proponer tu contribución.**
2. **Si la tarea es aprobada, se te asignará y se creará una rama para tu cambio.** Accede a esta rama para implementar tu aportación.
   ```bash
   git checkout [feature - bugfix]/[name]]
   ```
3. **Haz tus cambios y asegúrate de cumplir con las normas de código.**
4. **Realiza un commit siguiendo la convención mencionada.**
5. **Haz push de tu rama y abre un Pull Request en GitHub.**
6. **Un revisor del equipo revisará tu código y te dará feedback.**
**

---

## 🔒 Seguridad y reglas de contribución

- Los PRs deben ser revisados y aprobados antes de ser fusionados.
- No se permite hacer `push` directo a `main` o `develop`.
- Se ejecutan pruebas automáticas en cada PR.
- En caso de vulnerabilidades, reportarlas directamente al equipo de mantenimiento.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**, lo que significa que puedes usarlo, modificarlo y compartirlo libremente, siempre dando crédito a los autores.

---

¡Gracias por ser parte de **Rock and Code**! 🎸💻
