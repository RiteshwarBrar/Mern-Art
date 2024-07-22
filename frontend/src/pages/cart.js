import ProductCard from '../components/product/ProductCard';
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useInventoryContext } from "../hooks/useInventoryContext";
import { Row } from 'react-bootstrap';
const Paintings = () => {

    const collectionRef = collection(db, 'inventory');
    const {inventory, dispatch} = useInventoryContext();
    
    
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
        console.log(localStorage.getItem('checkoutList'));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    //pagination
    



    return (
    <div className="products-page">
      <h2 className="products-page-heading">The Current Collection</h2>
      <hr className="products-page-line"/>
      <div className='products-page-container'>
        
        
          {inventory?.filter(item=> localStorage.getItem('checkoutList')?.includes(item.Title)).map((product,index) => (
            <Row key={product.id} className="d-flex justify-content-center align-items-center">
              <ProductCard key={product.id} product={product} index={index}/>
            </Row>
          ))}
        
      </div>
    </div>
    );
  };
  
  export default Paintings;