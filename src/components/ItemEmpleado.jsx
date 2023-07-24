import React from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";

const ItemEmpleado = () => {
  return (
    <section className="d-flex row border border-dark border-2 rounded-3 p-2 m-3 bg-secondary ">
      <article className="col-4 pt-2">
        <EmpleadoAvatar></EmpleadoAvatar>
      </article>
      <article className="col-8">
        <div className="mb-4">
          <h4 className="display-6">Nombre Empleado</h4>
        </div>
        <div className="pt-3 d-flex">
          <h5 className="pe-5 fw-light">Cargo</h5>
          <p className="border p-1 border-warning text-warning bg-dark rounded-2">
            Area Operativa
          </p>
        </div>
      </article>
    </section>
  );
};

export default ItemEmpleado;
