require('dotenv').config();
const express = require('express');
const path = require('path');
const serviceChecker = require('./serviceChecker');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/services', async (req, res) => {
  try {
    const services = await serviceChecker.checkServices();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: 'Error al verificar los servicios' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});