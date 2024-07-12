import ProductCard from '../components/product/ProductCard';
import React from 'react';
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useInventoryContext } from "../hooks/useInventoryContext";
import { Container, Row, Col } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

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
    const productsPerPage = 16;
    const offset = currentPage * productsPerPage;
    const currentPageProducts = inventory?.slice(offset, offset + productsPerPage);
    const pageCount = Math.ceil(inventory?.length / productsPerPage);

    const handlePageClick = ({ selected }) => {
      setCurrentPage(selected);
    };


    return (
    <Container>
      <Row>
        {currentPageProducts?.map(product => (
          <Col key={product.id} md={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </Container>
    );
  };
  
  export default Paintings;