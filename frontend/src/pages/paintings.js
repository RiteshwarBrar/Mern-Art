import ProductCard from '../components/product/ProductCard';
import React from 'react';
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useInventoryContext } from "../hooks/useInventoryContext";
import ReactPaginate from 'react-paginate';
import { Row } from 'react-bootstrap';
const Paintings = () => {

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
    }, [dispatch]);

    //pagination
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 4;
    const offset = currentPage * productsPerPage;
    const currentPageProducts = inventory?.slice(offset, offset + productsPerPage);
    const pageCount = Math.ceil(inventory?.length / productsPerPage);

    const handlePageClick = ({ selected }) => {
      setCurrentPage(selected);
    };


    return (
    <div className="products-page">
      <h2 className="products-page-heading">The Current Collection</h2>
      <hr className="products-page-line"/>
      <div className='products-page-container'>
        
        
          {currentPageProducts?.map((product,index) => (
            <Row className="d-flex justify-content-center align-items-center">
              <ProductCard key={index} product={product} index={index}/>
            </Row>
          ))}
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
    );
  };
  
  export default Paintings;