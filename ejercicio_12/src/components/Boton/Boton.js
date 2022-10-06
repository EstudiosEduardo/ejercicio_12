import Button from 'react-bootstrap/Button';

function Boton(props) {
  return (
    <div className="d-grid gap-2 p-3">
      <Button onClick={props.onClick} 
             variant="primary"
              size="lg">
        {props.title}
      </Button>
      </div>
     );
}

export default Boton;