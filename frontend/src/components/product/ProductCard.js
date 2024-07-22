
import { Col } from "react-bootstrap";
import { useState } from 'react';
const ProductCard = ({product,index}) => {
// <Col key={product.id} md={3} className="mb-4">


  const calcPrice = (price) => {
    return "$ " + (price*0.015).toFixed(2)+" /₹ "+price;
  }


  const [checkoutList, setCheckoutList] = useState(JSON.parse(localStorage.getItem('checkoutList')));
  
  const handleAddToCart = (painting) => {
      const local_List = JSON.parse(localStorage.getItem('checkoutList'));
      
      if (local_List === null || local_List.length === 0){
          localStorage.setItem('checkoutList', JSON.stringify([painting.Title]));
      }
      else{
          localStorage.setItem('checkoutList', JSON.stringify([...local_List, painting.Title]));
      }
      setCheckoutList(JSON.parse(localStorage.getItem('checkoutList')));
      console.log(checkoutList);
  }
  const handleRemoveFromCart = (painting) => {
      const local_List = JSON.parse(localStorage.getItem('checkoutList'));
      localStorage.setItem('checkoutList', JSON.stringify(local_List?.filter(item=> item!==painting.Title)));
      setCheckoutList(JSON.parse(localStorage.getItem('checkoutList')));
  }

  return (
    index%2!==0?
    <div className="product-card">
      <Col md={5} sm={12} className="d-flex justify-content-center align-items-center">
          <img
            className="product-card-image"
            src={product.Images[0]}
            style={product.Orientation==="Square"?
              { width: '500px',boxShadow: '-15px 10px 15px #f7b69d8e'}//if orientation is square then width and height are same
              :product.Orientation==="Landscape"?
              { width: '500px',boxShadow: '-15px 10px 15px #f7b69d8e'}//if orientation is landscape then width and height are same
              :{ width: '400px',boxShadow: '-15px 10px 15px #f7b69d8e'}}
            alt={`Product ${product.Title}`}
          />
      </Col>
      <Col md={7} sm={12} className="d-flex justify-content-center align-items-center">
        <div className="product-card-description">
          <h2 className="Title">{product.Title}</h2>
          {product.Forsale ? <p className="red">{calcPrice(product.Price)}</p> : <p className="red">Sold</p>}
          <p>Medium: <span className="red">{product.Medium}</span></p>
          <p>Size: <span className="red">{product.Size} inches</span></p>
          <p>{product.Description}</p>
          {
                JSON.parse(localStorage.getItem('checkoutList'))?.includes(product.Title)?
                <button className="remove-from-cart" onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>:
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            }
        </div>
      </Col>
    </div>
    : <div className="product-card">
      <Col md={7} sm={12} className="d-flex justify-content-center align-items-center">
        <div className="product-card-description">
          <h2 className="Title">{product.Title}</h2>
          {product.Forsale ? <p className="red">{calcPrice(product.Price)}</p> : <p className="red">Sold</p>}
          <p>Medium: <span className="red">{product.Medium}</span></p>
          <p>Size: <span className="red">{product.Size} inches</span></p>
          <p>{product.Description}</p>
          {
                JSON.parse(localStorage.getItem('checkoutList'))?.includes(product.Title)?
                <button className="remove-from-cart" onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>:
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            }
        </div>
      </Col>
      <Col md={5} sm={12} className="d-flex justify-content-center align-items-center">
        <div className="product-card-image-box">
          <img
            className="product-card-image"
            src={product.Images[0]}
            style={product.Orientation==="Square"?
              { width: '500px',boxShadow: '15px 10px 15px #f7b69d8e'}//if orientation is square then width and height are same
              :product.Orientation==="Landscape"?
              { width: '500px',boxShadow: '15px 10px 15px #f7b69d8e'}//if orientation is landscape then width and height are same
              :{ width: '400px',boxShadow: '15px 10px 15px #f7b69d8e'}}
            alt={`Product ${product.Title}`}
          />
        </div>
      </Col>
    </div>
  );
};

export default ProductCard;
