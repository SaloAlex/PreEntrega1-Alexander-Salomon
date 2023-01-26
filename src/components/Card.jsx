import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Counter} from './Counter';

function CardBasica() {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/08/31/16/39/ephemera-5532941_640.jpg" />
      <Card.Body>
        <Card.Title>Libros</Card.Title>
        <Card.Text>
         Elegi el libro que quieras
        </Card.Text>
        <Counter/>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBasica;