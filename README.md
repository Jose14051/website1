# Implementación del Servidor y Página de Inicio de Sesión

---

### Descripción del Proyecto

Este proyecto consiste en la implementación de un servidor utilizando Node.js y Express, junto con una página de inicio de sesión (login.html) para autenticar a los usuarios. El servidor proporciona endpoints para manejar la autenticación y autorización de los usuarios, mientras que la página de inicio de sesión permite a los usuarios ingresar sus credenciales para acceder a un área protegida.

### Herramientas Utilizadas

1. **Node.js**: Plataforma de ejecución de JavaScript del lado del servidor.
2. **Express**: Framework de Node.js para construir aplicaciones web y APIs.
3. **HTML/CSS**: Lenguajes de marcado y estilos para el diseño de la página de inicio de sesión.
4. **Visual Studio Code**: Editor de código utilizado para escribir y editar el código del servidor y la página de inicio de sesión.
5. **Navegadores Web**: Se probaron en navegadores web modernos como Google Chrome, Mozilla Firefox y Microsoft Edge.

### Implementación del Servidor (server.js)

El archivo `server.js` contiene el código del servidor Node.js implementado con Express. Aquí se definen las rutas y controladores para manejar la autenticación de los usuarios. Algunas medidas de seguridad implementadas en el servidor incluyen:

- **Encriptación de Contraseñas**: Las contraseñas de los usuarios se almacenan en la base de datos después de ser encriptadas, lo que garantiza que incluso si la base de datos es comprometida, las contraseñas no puedan ser fácilmente descifradas por los atacantes.
- **Validación de Entrada**: Se realiza una validación de los campos de entrada para prevenir ataques de inyección de código y asegurar que los datos ingresados por los usuarios sean seguros.
- **Verificación de Token JWT**: Antes de permitir el acceso a las rutas protegidas, se verifica la validez del token JWT enviado por el cliente, garantizando que solo los usuarios autenticados puedan acceder a recursos protegidos.
- **Manejo de Errores Detallado**: Se han implementado manejadores de errores detallados para varios escenarios, proporcionando mensajes de error claros y evitando la exposición de información sensible en caso de fallos.

### Implementación de la Página de Inicio de Sesión (login.html)

El archivo `login.html` contiene el código de la página de inicio de sesión, donde los usuarios pueden ingresar sus credenciales. Esta página utiliza HTML y CSS para el diseño y la presentación. Algunas medidas de seguridad implementadas en la página de inicio de sesión incluyen:

- **Validación de Entrada**: Los campos de entrada como el nombre de usuario y la contraseña son validados para prevenir ataques de inyección de código y asegurar que los datos ingresados por los usuarios sean seguros.
- **Uso de HTTPS**: Se recomienda que la página de inicio de sesión se sirva a través de HTTPS para cifrar la comunicación entre el cliente y el servidor, garantizando la confidencialidad de los datos de inicio de sesión.

### Ejecución del Proyecto

1. Clonar el repositorio o descargar los archivos del servidor y la página de inicio de sesión.
2. Instalar las dependencias del proyecto utilizando `npm install`.
3. Iniciar el servidor ejecutando `node server.js`.
4. Acceder a la página de inicio de sesión en un navegador web visitando la URL proporcionada por el servidor.

### Implementación de Autenticación y Autorización con JWT y OAuth 2.0

Este proyecto también incluye la implementación de autenticación y autorización utilizando JSON Web Tokens (JWT) y OAuth 2.0. Se han utilizado tecnologías como Passport.js para integrar estas funcionalidades, brindando un nivel adicional de seguridad y permitiendo a los usuarios autenticarse utilizando terceros proveedores de identidad como Google, Facebook o GitHub.

### Conclusiones

La implementación del servidor y la página de inicio de sesión se llevó a cabo utilizando herramientas y prácticas de seguridad recomendadas para garantizar la protección de los datos de los usuarios. La combinación de encriptación de contraseñas, validación de entrada y verificación de tokens JWT proporciona un nivel sólido de seguridad para la autenticación de los usuarios. Además, se recomienda el uso de HTTPS para mejorar aún más la seguridad de la comunicación entre el cliente y el servidor.
