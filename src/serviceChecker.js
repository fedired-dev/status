const axios = require('axios');

const services = [
  { name: 'Fedired', url: 'https://fedired.com' },
  { name: 'Documentación Fedired', url: 'https://docs.fedired.com' },
  { name: 'Estado de los Servidores', url: 'https://status.fedired.com' },
  { name: 'Licencia FPL (Fedired)', url: 'https://licence.fedired.com' },
];

async function checkServices() {
  const results = await Promise.all(services.map(async (service) => {
    try {
      const startTime = Date.now();
      const response = await axios.head(service.url, { timeout: 5000 });
      const loadTime = Date.now() - startTime;

      return {
        name: service.name,
        status: 'ACTIVO',
        ssl: service.url.startsWith('https') ? 'Seguro' : 'No seguro',
        loadTime: `${loadTime} ms`,
        lastChecked: new Date().toLocaleTimeString()
      };
    } catch (error) {
      return {
        name: service.name,
        status: 'INACTIVO',
        ssl: 'Desconocido',
        loadTime: 'N/A',
        lastChecked: new Date().toLocaleTimeString()
      };
    }
  }));

  return results;
}

exports.handler = async function(event, context) {
  try {
    const services = await checkServices();
    return {
      statusCode: 200,
      body: JSON.stringify(services)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al verificar los servicios' })
    };
  }
};
