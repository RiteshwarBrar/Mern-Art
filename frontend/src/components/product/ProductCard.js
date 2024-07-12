
import { Carousel, Card } from 'react-bootstrap';

const ProductCard = ({product}) => {

  return (
    <Card className="product-card">
      <Carousel>
        {product.Images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Product ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{product.Title}</Card.Title>
        <Card.Text>{product.Forsale ? <p>Price: ${product.Price}</p> : <p>Sold</p>}</Card.Text>
        {/* <Card.Text>Size: {product.size}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
