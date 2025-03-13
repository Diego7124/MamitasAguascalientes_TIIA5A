import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { getTrabajadores, createTrabajador } from './Controllers/trabajadorController.js';
import { getBebidas, createBebida } from './Controllers/bebidaController.js';

mongoose.connect("mongodb://localhost:27017/ClubNocturno") 
.then(() => {
    console.log("Conexión a la base de datos establecida");
}).catch(err => {
    console.log("Error al conectar a la base de datos", err);
});

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.get('/api/trabajadores', getTrabajadores);
app.post('/api/trabajadores', createTrabajador);

app.get('/api/bebidas', getBebidas);
app.post('/api/bebidas', createBebida);

app.listen(4000, () => {
    console.log("Servidor en puerto 4000");
});
