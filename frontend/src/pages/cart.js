import CheckoutCard from '../components/cart/CheckoutCard';
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useInventoryContext } from "../hooks/useInventoryContext";
import { Row, Col } from 'react-bootstrap';
import CheckoutForm from '../forms/CheckoutForm';
import { Link } from 'react-router-dom';
const Cart = () => {
    
   
  

    const collectionRef = collection(db, 'inventory');
    const {inventory, dispatch} = useInventoryContext();
    const [removeFromCart, setRemoveFromCart] = useState(true);
    /* eslint-disable no-unused-vars */
    const [counter, setCounter] = useState(0);
    /* eslint-ensable no-unused-vars */
    const fetchPaintings = async ()=>{
        try{
          const res = await getDocs(collectionRef);
          const data = res.docs.map((doc) => ({...doc.data(),id: doc.id}));//mapping over the data and adding id to it
        //   console.log(data);
          dispatch({type: 'SET_INVENTORY', payload: data});
        }
        catch(error){
          console.error('Error getting documents: ', error);
        }
        
    };
    useEffect(() => {
        fetchPaintings();
        // console.log(localStorage.getItem('checkoutList'));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const getTotal = () => {
      const local_List = JSON.parse(localStorage.getItem('checkoutList'));
      let total=0
      inventory
      ?.filter(item=> local_List?.includes(item.Title))
      .forEach(element => {
        total+=parseFloat(element.Price);
      });
      return total.toFixed(2);
    };
    
    return (
    <div className="Checkout-page">
      {
        (JSON.parse(localStorage.getItem('checkoutList'))===null || JSON.parse(localStorage.getItem('checkoutList')).length===0)?
        <div>       
          <h2 className="Checkout-page-heading">Your Cart is Empty</h2>
          <div className="Checkout-page-image">
            <img src="https://media1.tenor.com/m/fyf6FMrdkOIAAAAd/john-travolta-what.gif" alt="John Travolta Confused" style={{maxWidth:"280px"}}/>
          </div>
          <p className="Checkout-page-paragraph">You have no items in your cart. Start adding items to your cart by exploring our collection.</p>
          
          
          <Link className="shop-now" to="/paintings">Explore Now</Link>
        </div>:
        <div>
          <h2 className="Checkout-page-heading">Your Cart</h2>
              {/* <hr className="Checkout-page-line"/> */}
          <Row>
            <Col md={7} sm={12} className="Checkout-list">
              <CheckoutForm total={getTotal()} setCounter={setCounter} setRemoveFromCart={setRemoveFromCart}/>
            </Col>
            <Col md={5} sm={12} className="Checkout-summary">
              <div className='Checkout-page-container'>
                
                  {inventory?.filter(item=> JSON.parse(localStorage.getItem('checkoutList'))?.includes(item.Title)).map((product,index) => (
                    <Row key={product.id} >
                      <CheckoutCard key={product.id} product={product} index={index} setCounter={setCounter} removeFromCart={removeFromCart}/>
                    </Row>
                  ))}
                
              </div>
              <div className="checkout-total">
                <h4>Subtotal: $ {getTotal()}</h4>
              </div>
            </Col>
          </Row>
        </div>
      }
    </div>
    );
  };
  
  export default Cart;