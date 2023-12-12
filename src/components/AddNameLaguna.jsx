import React, { useState } from "react";
import "./AddName.css";

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
      <h3 className="IngresaNombre my-5">Ingresa el nombre de la laguna</h3>
      <form onSubmit={agregarNombre}>
        <div className="row container">
          <div className="col-1"></div>
          <div className="col-2 nombre">
            <label htmlFor="nombre">Nombre:</label>
          </div>
          <div className="col-8">
            <input
              className="input form-control"
              type="text"
              id="nombre"
              name="nombre"
              value={nuevoNombre}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="send border-0 bg-secondary rounded-3 ps-2 pe-3 fs-4 text-white my-4"
            type="submit"
            onClick={() => onModify(nuevoNombre)}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};