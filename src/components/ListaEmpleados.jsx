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
              //   console.log(empleados);
              <ItemEmpleado key={i} empleados={empleados}></ItemEmpleado>
            ))
          )}
        {/* {listaEmpleados.listaEmpleados.map((itemEmpleado) =>
          itemEmpleado.map((item, i) => <ItemEmpleado key={i}></ItemEmpleado>)
        )} */}
      </section>
    </ListGroup>
  );
};

export default ListaEmpleados;
