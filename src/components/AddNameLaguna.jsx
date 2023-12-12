import React, { useState } from "react";

export const AddNameLaguna = ({ onCloseForm, onModify }) => {
  const [nuevoNombre, setNuevoNombre] = useState("");

  const handleInputChange = (event) => {
    setNuevoNombre(event.target.value);
  };

  const agregarNombre = (e) => {
    e.preventDefault();
    if (nuevoNombre.trim()) {
      setNuevoNombre("");
    }
    if (onCloseForm) {
      onCloseForm(false);
    }
  };

  return (
    <div>
      <h2>Ingresa el nombre de la laguna</h2>
      <form onSubmit={agregarNombre}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nuevoNombre}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit" onClick={() => onModify(nuevoNombre)}>
          Enviar
        </button>
      </form>
    </div>
  );
};
