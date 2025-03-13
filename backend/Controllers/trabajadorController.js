import { Trabajador } from '../Models/EmpleadosModels.js';

// Obtener todos los trabajadores
export const getTrabajadores = async (req, res) => {
  try {
    const trabajadores = await Trabajador.find();
    res.status(200).json(trabajadores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo trabajador
export const createTrabajador = async (req, res) => {
  const { nombre, genero, edad } = req.body;
  console.log('Datos recibidos:', req.body); // Registro de los datos recibidos
  const nuevoTrabajador = new Trabajador({ nombre, genero, edad });

  try {
    const trabajadorGuardado = await nuevoTrabajador.save();
    res.status(201).json(trabajadorGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};