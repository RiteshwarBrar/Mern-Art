import React from 'react';
import { Link } from 'react-router-dom';
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect,useState } from "react";
import { useInventoryContext } from "../../hooks/useInventoryContext";

import PreviewCard from './previewCard';
import { Container, Row, Col } from 'react-bootstrap';


const FeaturedProducts = () => {

  const collectionRef = collection(db, 'inventory');
  const {inventory, dispatch} = useInventoryContext();
  const [localList, setLocalList] = useState([]);

  const fetchPaintings = async ()=>{
    try{
      const res = await getDocs(collectionRef);
      const data = res.docs.map((doc) => ({...doc.data(),id: doc.id}));//mapping over the data and adding id to it
      // console.log(data);
      dispatch({type: 'SET_INVENTORY', payload: data});
    }
    catch(error){
      console.error('Error getting documents: ', error);
    }
    
  };

  useEffect(() => {
    fetchPaintings();
    setLocalList(localStorage.getItem('checkoutList'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);//


  return (
    <section className="featured-products">
      <h2 className="featured-products-heading">OUR TOP PICKS</h2>
      <hr className="featured-products-line"/>
      <Container className='featured-products-container'>
        <Row>
            {inventory && inventory
                .filter(product => product.Featured && product.Orientation === "Portrait")
                .map(product => (
                  <Col key={product.id} >
                    <PreviewCard key={product.id} painting={product} localList={localList} setLocalList={setLocalList}/>
                  </Col>
            ))}
            {inventory && inventory
                .filter(product => product.Featured && product.Orientation === "Landscape")
                .map(product => (
                  <Col key={product.id} >
                    <PreviewCard key={product.id} painting={product} localList={localList} setLocalList={setLocalList}/>
                  </Col>
            ))}
        </Row>
      </Container>
      <Link to="/paintings" className="see-more">Browse The Collection</Link>
    </section>
  );
};

export default FeaturedProducts;
