const axios = require('axios');

const services = [
  { name: 'Fedired', url: 'https://fedired.com' },
  { name: 'Documentación Fedired', url: 'https://docs.fedired.com' },
  { name: 'Estado Fedired', url: 'https://status.fedired.com' },
  { name: 'API de Mastodon', url: 'https://mastodon.example/api/v1/instance' },
  { name: 'API del Fediverso', url: 'https://fediverso.example/api/v1/instance' }
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
  // ... tu código aquí ...
};

module.exports = { checkServices };