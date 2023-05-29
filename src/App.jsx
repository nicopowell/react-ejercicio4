import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <>
      <main className="container mt-5">
        <h1 className="display-4 text-center text-light">Lista de tareas</h1>
        <hr className="text-light" />
        <FormularioTarea/>
      </main>
      <footer className="bg-dark text-light p-4 text-center">
        <p className="m-0">&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
