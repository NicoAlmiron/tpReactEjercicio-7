import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import ListaEmpleados from "./ListaEmpleados";
import EmpleadoAvatar from "./EmpleadoAvatar";

const useEmpleados = () => {
  const empleados = JSON.parse(localStorage.getItem("empleados")) || [];
  let sumaId = 0;

  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const [pic, setPic] = useState("");
  const [id, setId] = useState(sumaId);
  const [department, setDepartment] = useState("");

  const arregloEmpleado = [
    {
      fullName: fullName,
      title: title,
      pic: pic,
      department: department,
      id: id,
    },
  ];
  const [listaEmpleados, setListaEmpleados] = useState(empleados);

  const handleChange = (event) => {
    (event) => {
      event.preventDefault(event);
    };

    setListaEmpleados([...listaEmpleados, arregloEmpleado]);

    setFullName("");
    setDepartment("");
    setTitle("");
    setPic("");
    setId([id + 1]);

    empleados.push(arregloEmpleado);
    localStorage.setItem("empleados", JSON.stringify(empleados));
    event.reset();
  };
  return {
    arregloEmpleado,
    handleChange,
    fullName,
    title,
    pic,
    id,
    department,
    setFullName,
    setId,
    setPic,
    setDepartment,
    setTitle,
    listaEmpleados,
  };
};

const FormularioEmpleado = () => {
  const arregloEmpleados = useEmpleados();
  return (
    <>
      <section className="border border-dark border-2 rounded-3 my-5 p-3 bg-secondary">
        <article>
          <h3 className="display-3 pt-3 pb-2 ps-2 text-info text-center">
            Registro de Empleados
          </h3>
          <Form
            className="d-flex justify-content-end flex-column"
            onSubmit={arregloEmpleados.handleChange}
          >
            <Form.Group
              className="d-flex row py-2 align-items-center border border-warning rounded-3 bg-dark"
              controlId="empleado"
            >
              <div className="col-5 d-flex justify-content-center aling-items-center my-3">
                <EmpleadoAvatar pic={arregloEmpleados.pic}></EmpleadoAvatar>
              </div>
              <div className="col-7">
                <Form.Control
                  type="text"
                  placeholder="Nombre completo"
                  autoFocus
                  defaultValue={arregloEmpleados.fullName}
                  onChange={(e) => arregloEmpleados.setFullName(e.target.value)}
                  required
                ></Form.Control>
              </div>
              <div className="col-6 mb-3">
                <Form.Control
                  type="text"
                  placeholder="Link del avatar"
                  defaultValue={arregloEmpleados.pic}
                  onChange={(e) => arregloEmpleados.setPic(e.target.value)}
                  required
                ></Form.Control>
              </div>
              <div className="col-6 mb-3">
                <Form.Control
                  type="text"
                  placeholder="Area operativa del empleado"
                  defaultValue={arregloEmpleados.department}
                  onChange={(e) =>
                    arregloEmpleados.setDepartment(e.target.value)
                  }
                  required
                ></Form.Control>
              </div>
              <div className="col-6 mb-3 d-flex">
                <Form.Control
                  type="text"
                  placeholder="Cargo del empleado"
                  defaultValue={arregloEmpleados.title}
                  onChange={(e) => arregloEmpleados.setTitle(e.target.value)}
                ></Form.Control>
              </div>
            </Form.Group>
            <div className="text-end pb-2 pt-2">
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </article>
      </section>
      <ListaEmpleados
        listaEmpleados={arregloEmpleados.listaEmpleados}
      ></ListaEmpleados>
    </>
  );
};

export default FormularioEmpleado;
