import React from 'react';
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useInventoryContext } from "../../hooks/useInventoryContext";
import PreviewCard from './previewCard';
import { Container, Row, Col } from 'react-bootstrap';

const FeaturedProducts = () => {

  const collectionRef = collection(db, 'inventory');
  const {inventory, dispatch} = useInventoryContext();


  const fetchPaintings = async ()=>{
    try{
      const res = await getDocs(collectionRef);
      const data = res.docs.map((doc) => ({...doc.data(),id: doc.id}));//mapping over the data and adding id to it
      console.log(data);
      dispatch({type: 'SET_INVENTORY', payload: data});
    }
    catch(error){
      console.error('Error getting documents: ', error);
    }
    
  };

  useEffect(() => {
    fetchPaintings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);//


  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <Container >
        <Row>
            {inventory && inventory.map(product => (
              <Col key={product.id} lg="auto">
                <PreviewCard painting={product}/>
              </Col>
            ))}
            <Col className="d-flex align-items-center" lg="auto">
              <button className="see-more">See More {'>'}</button>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
