import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function BasicExample(props) {
  console.log(props.value);

  const { image, title, paragraph } = props.value;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{paragraph}</Card.Text>
        <Link to={'/product'}>
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
