import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas }) => {
  return (
    <ListGroup>
      {tareas.map((tarea) => (
        <ItemTarea tarea={tarea}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
