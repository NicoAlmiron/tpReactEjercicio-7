import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioEmpleado from "./components/FormularioEmpleado";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <FormularioEmpleado></FormularioEmpleado>
      </Container>
      <footer className="text-center bg-dark text-light py-4">
        <p>Todos los derechos reservados &copy; 2023 </p>
      </footer>
    </>
  );
}

export default App;
