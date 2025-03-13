import React, { useEffect, useState } from 'react';
import { getTrabajadores, createTrabajador } from '../services/trabajadorService';

const TrabajadoresComponent = () => {
  const [trabajadores, setTrabajadores] = useState([]);
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [edad, setEdad] = useState('');

  useEffect(() => {
    const fetchTrabajadores = async () => {
      const data = await getTrabajadores();
      setTrabajadores(data);
    };
    fetchTrabajadores();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoTrabajador = { nombre, genero, edad: parseInt(edad) }; // Asegúrate de que edad sea un número
    console.log('Datos enviados:', nuevoTrabajador); // Registro de los datos enviados
    try {
      const trabajadorCreado = await createTrabajador(nuevoTrabajador);
      setTrabajadores([...trabajadores, trabajadorCreado]);
    } catch (error) {
      console.error('Error al crear trabajador:', error);
    }
  };

  return (
    <div>
      <h1>Trabajadores</h1>
      <ul>
        {trabajadores.map((trabajador) => (
          <li key={trabajador._id}>{trabajador.nombre}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <select value={genero} onChange={(e) => setGenero(e.target.value)} required>
          <option value="">Selecciona Género</option>
          <option value="M">Hombre</option>
          <option value="F">Mujer</option>
        </select>
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default TrabajadoresComponent;