import React, { useState } from 'react';

const Formulario = ({ nombre, apellido, setNombre, setApellido }) => {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.length < 3 || nombre.trim().startsWith(' ')) {
      setError(true);
      return;
    }
    if (apellido.length < 6) {
      setError(true);
      return;
    }
    setError(false);
    console.log('Formulario enviado correctamente');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="nombre"
        name="nombre"
        placeholder="Ingresa Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <br />
      <input
        type="text"
        id="apellido"
        name="apellido"
        placeholder="Ingresa Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <br />
      <button type="submit">Enviar</button>
      {error && <p>Por favor chequea que la información sea correcta</p>}
    </form>
  );
};

export default Formulario;
