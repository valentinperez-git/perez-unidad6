import React, { useState } from 'react';
import './RegistroForm.css';

const RegistroForm = () => {
  // Almacena los valores
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

// Maneja el envío del formulario
const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validación
    if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || telefono.trim() === '' || password.trim() === '' || confirmarPassword.trim() === '') {
      alert('Todos los campos son obligatorios');
      return;
    }
  
    if (password !== confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    // Si todos los campos son válidos
    console.log('Datos enviados:', { nombre, apellido, email, telefono, password, confirmarPassword });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmarPassword">Confirmar Password:</label>
        <input
          type="password"
          id="confirmarPassword"
          value={confirmarPassword}
          onChange={(e) => setConfirmarPassword(e.target.value)}
        />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
};
export default RegistroForm;