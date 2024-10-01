async function updateTable() {
    const tableBody = document.getElementById('serviceTableBody');
    tableBody.innerHTML = ''; // Limpiar la tabla antes de llenarla

    try {
        const response = await fetch('/.netlify/functions/services');
        const services = await response.json();

        services.forEach(service => {
            const row = document.createElement('tr');
         
            row.innerHTML = `
                <td data-label="Servicio">${service.name}</td>
                <td data-label="Estado">${service.status}</td>
                <td data-label="SSL">${service.ssl}</td>
                <td data-label="Velocidad de carga">${service.loadTime}</td>
                <td data-label="Última Verificación">${service.lastChecked}</td>
            `;
            tableBody.appendChild(row);
        });

        document.getElementById('lastUpdate').textContent = `Última actualización: ${new Date().toLocaleString()}`;
    } catch (error) {
        console.error('Error al obtener los datos de los servicios:', error);
    }
}

// Modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 
        document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// Filtro de búsqueda
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    document.querySelectorAll('#serviceTableBody tr').forEach(row => {
        const serviceName = row.querySelector('td').textContent.toLowerCase();
        row.style.display = serviceName.includes(searchTerm) ? '' : 'none';
    });
});

// Actualizar la tabla cada 60 segundos
setInterval(updateTable, 60000);

// Inicializar la tabla al cargar la página
document.addEventListener('DOMContentLoaded', updateTable);
