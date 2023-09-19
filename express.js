const express = require('express');
const app = express();
const port = 3000;

// Ruta de ejemplo
app.get('/api/mensaje', (req, res) => {
  res.json({ mensaje: 'Hola desde la API' });
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
