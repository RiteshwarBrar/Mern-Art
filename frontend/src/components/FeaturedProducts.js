import React from 'react';
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useInventoryContext } from "../hooks/useInventoryContext";
import PaintingCard from './paintingCard';
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
  }, [dispatch]);//


  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {inventory && inventory.map(product => (
          <PaintingCard painting={product}/>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
