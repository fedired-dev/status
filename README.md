# Monitor de Estado de Servicios Fedired

Este proyecto es un monitor de estado en tiempo real para los servicios de Fedired. Proporciona una interfaz web simple y efectiva para visualizar el estado actual de varios servicios, incluyendo información sobre su disponibilidad, seguridad SSL y tiempo de respuesta.

## Características

- Monitoreo en tiempo real de múltiples servicios
- Verificación de estado (activo/inactivo)
- Comprobación de seguridad SSL
- Medición de tiempo de respuesta
- Interfaz de usuario responsive
- Modo oscuro
- Función de búsqueda de servicios
- Actualización automática cada 60 segundos

## Tecnologías Utilizadas

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js con funciones serverless de Netlify
- Despliegue: Netlify

## Configuración Local

Para configurar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/fedired-status.git
   cd fedired-status
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Instala Netlify CLI globalmente:
   ```
   npm install -g netlify-cli
   ```

4. Ejecuta el proyecto localmente:
   ```
   netlify dev
   ```

5. Abre tu navegador y visita `http://localhost:8888`

## Despliegue

Este proyecto está configurado para ser desplegado en Netlify. Para desplegar:

1. Asegúrate de tener una cuenta en Netlify y haber instalado Netlify CLI.

2. Desde la raíz del proyecto, ejecuta:
   ```
   netlify deploy --prod
   ```

3. Sigue las instrucciones en la terminal para completar el despliegue.

## Estructura del Proyecto
 ```
proyecto/
├── functions/
│ └── services.js # Función serverless para verificar servicios
├── public/
│ ├── css/
│ │ └── styles.css # Estilos de la aplicación
│ ├── js/
│ │ └── main.js # Lógica del frontend
│ └── index.html # Página principal
├── netlify.toml # Configuración de Netlify
└── package.json # Dependencias y scripts
 ```
## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir qué te gustaría cambiar.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)

## Contacto

Tu Nombre - [@fedired](https://fedired.com/@srnovus) - t

Enlace del Proyecto: [https://github.com/fedired-dev/status](https://github.com/fedired-dev/status)
