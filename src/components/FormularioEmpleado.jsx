import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import ListaEmpleados from "./ListaEmpleados";

const FormularioEmpleado = () => {
  // class empleado {
  //   constructor(id, fullName, title, department, pic) {
  //     this.id = id;
  //     this.fullName = fullName;
  //     this.title = title;
  //     this.department = department;
  //     this.pic = pic;
  //   }
  // }
  return (
    <>
      <section className="border border-dark border-2 rounded-3 my-5 p-3 bg-secondary">
        <article>
          <h3 className="display-3 pt-3 pb-2 ps-2 text-info text-center">
            Registro de Empleados
          </h3>
          <Form className="d-flex justify-content-end flex-column">
            <Form.Group
              className="d-flex row py-2 align-items-center border border-warning rounded-3 bg-dark"
              controlId=""
            >
              <div className="col-5 d-flex justify-content-center aling-items-center my-3">
                <Card style={{ width: "8rem", height: "8rem" }}></Card>
              </div>
              <div className="col-7">
                <Form.Control
                  type="text"
                  placeholder="Nombre completo"
                  autoFocus
                ></Form.Control>
              </div>
              <div className="col-6 mb-3">
                <Form.Control
                  type="text"
                  placeholder="Link del avatar"
                  autoFocus
                ></Form.Control>
              </div>
              <div className="col-6 mb-3">
                <Form.Control
                  type="text"
                  placeholder="Area operativa del empleado"
                  autoFocus
                ></Form.Control>
              </div>
              <div className="col-6 mb-3">
                <Form.Control
                  type="text"
                  placeholder="Cargo del empleado"
                  autoFocus
                ></Form.Control>
              </div>
              <div className="col-6 mb-3">
                <h3 className="display-5">ID: 0</h3>
              </div>
            </Form.Group>
            <div className="text-end pb-2 pt-2">
              <Button variant="primary">Guardar</Button>
            </div>
          </Form>
        </article>
      </section>
      <ListaEmpleados></ListaEmpleados>
    </>
  );
};

export default FormularioEmpleado;
