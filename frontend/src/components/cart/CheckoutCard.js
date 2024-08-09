
import { Col } from "react-bootstrap";
import { useState } from 'react';

const CheckoutCard = ({product, index, setCounter, removeFromCart}) => {
// <Col key={product.id} md={3} className="mb-4">


  const calcPrice = (price) => {
    return "$ " + price;
  }

  /* eslint-disable no-unused-vars */
  const [checkoutList, setCheckoutList] = useState(JSON.parse(localStorage.getItem('checkoutList')));
  /* eslint-enable no-unused-vars */

  const handleRemoveFromCart = (painting) => {
      const local_List = JSON.parse(localStorage.getItem('checkoutList'));
      localStorage.setItem('checkoutList', JSON.stringify(local_List?.filter(item=> item!==painting.Title)));
      setCheckoutList(JSON.parse(localStorage.getItem('checkoutList')));
      // console.log(checkoutList);
      setCounter((prev)=>prev+1);
      // window.location.reload();
  }

  return (
    
    <div className="Checkout-card">
      <Col lg={6} md={12} sm={12} >
        <div className="Checkout-card-image-box">
          <img
            className="Checkout-card-image"
            src={product.Images[0]}
            // style={{ width: '400px',maxWidth:'100%'}}//if orientation is portrait
            alt={`Product ${product.Title}`}
          />
        </div>
      </Col>
      <Col lg={6} md={12} sm={12} >
        <div className="Checkout-card-description">
          <h2 className="Title">{product.Title}</h2>
          {product.Forsale ? <p>Ready to be Shipped</p> : <p>Made on Demand</p>}
          <p className="red">{calcPrice(product.Price)}</p>
          <p>Medium: <span className="red">{product.Medium}</span></p>
          <p>Size: <span className="red">{product.Size} inches</span></p>
          <button disabled={!removeFromCart} className="remove-from-cart" onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>
        </div>
        </Col>
    </div>
    
  );
};

export default CheckoutCard;
