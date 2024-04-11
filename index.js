import express from 'express';
import router from './routes/routes.js';
import path from "path";
process.loadEnvFile();

const app = express()
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

//middlewares
app.use(express.static(path.join(__dirname, 'assets'))); //además de este?
app.use(express.json());//cómo enviar data
app.use(express.urlencoded({ extended: false }));//envía datos por formularios


//rutas
app.use('/', router);

// app.get('/', (req, res) => res.send('¡Hola Mundo 😀!'))

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))