const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Endpoint principal para mostrar la página de venta de verduras
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint para procesar el formulario de compra de verduras
app.post('/comprar', (req, res) => {
  //  devolvemos un mensaje de confirmación
  res.send('¡Gracias por tu compra!');
});
//error de pagina
app.use((req,res)=>{
  res.status(404).send("Página no encontrada - 404")
})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});