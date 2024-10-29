const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cursoProgramacionRoute = require('./routes/CursoProgramacion'); // Agrega esta línea
const cursoMatematicasRoute = require('./routes/CursoMatematicas');

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use('/api/cursos', cursoProgramacionRoute); // Agrega esta línea
app.use('/api/matematicas', cursoMatematicasRoute); 
// routes
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

// mongodb connection
const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MongoDB URI is not defined in the .env file');
} else {
  console.log('MongoDB URI:', uri);

  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));
}

// server listening
app.listen(port, () => console.log(`Server listening on port ${port}`));
