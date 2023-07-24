import React from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";

const ItemEmpleado = (empleados) => {
  return (
    <section className="d-flex row border border-dark border-2 rounded-3 p-2 m-3 bg-secondary ">
      <article className="col-4 pt-2">
        <EmpleadoAvatar pic={empleados.empleados.pic}></EmpleadoAvatar>
      </article>
      <article className="col-8">
        <div className="mb-4 mt-2 text-start">
          <h3 className="fw-light">{empleados.empleados.fullName}</h3>
        </div>
        <div className="pt-3 d-flex justify-content-between aling-items-center">
          <h5 className="">{empleados.empleados.title}</h5>
          <p className="border p-1 border-warning text-warning bg-dark rounded-2">
            {empleados.empleados.department}
          </p>
        </div>
      </article>
    </section>
  );
};

export default ItemEmpleado;
