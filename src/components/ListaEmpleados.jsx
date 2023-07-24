import React from "react";
import ItemEmpleado from "./ItemEmpleado";
import { ListGroup } from "react-bootstrap";

const ListaEmpleados = (listaEmpleados) => {
  return (
    <ListGroup>
      <section>
        {listaEmpleados.listaEmpleados
          .map((itemEmpleado) => itemEmpleado)
          .map((item) =>
            item.map((empleados, i) => (
              <ItemEmpleado key={i} empleados={empleados}></ItemEmpleado>
            ))
          )}
      </section>
    </ListGroup>
  );
};

export default ListaEmpleados;
