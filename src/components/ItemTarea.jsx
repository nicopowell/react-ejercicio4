import { Button, ListGroup } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const ItemTarea = ({ tarea }) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        {tarea}
        <Button variant="outline-danger"><i className="bi bi-x-circle fs-5"></i></Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;