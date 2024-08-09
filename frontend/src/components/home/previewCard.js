// import { useState } from 'react';
// import { useCheckoutListContext } from "../../hooks/useCheckoutListContext";
const PreviewCard = ({painting}) => {

    const calcPrice = (price) => {
        return "$ " + price;
    }

    return (
        <div className="preview-product-card" >
            <div 
                style={painting.Orientation==="Square"?
                    { width: '400px'}//if orientation is square then width and height are same
                    :painting.Orientation==="Landscape"?
                    { width: '450px'}//if orientation is landscape then width and height are same
                    :{ width: '320px'}//if orientation is portrait then width and height are same
                }
                className="preview-product-image-card"
            >
                {/* {localStorage.clear()} */}
                {/* <p>{painting.Description}</p> */}
                
                {   
                    <img 
                            className="painting-card-images"
                            src={painting.Images[0]} alt='uploaded'
                            style={painting.Orientation==="Square"?
                                { width: '400px'}//if orientation is square then width and height are same
                                :painting.Orientation==="Landscape"?
                                { width: '450px'}//if orientation is landscape then width and height are same
                                :{ width: '320px'}//if orientation is portrait then width and height are same
                    }/>
                        
                }
            </div>
            <h4 className="Title">{painting.Title}</h4>
            {painting.Forsale ? <p>Ready to be Shipped</p> : <p>Made on Demand</p>}
            <p>{calcPrice(painting.Price)}</p>
            {/* <button className="see-more">See More</button> */}
            {/* {
                JSON.parse(localStorage.getItem('checkoutList'))?.includes(painting.Title)?
                <button className="remove-from-cart" onClick={() => handleRemoveFromCart(painting)}>Remove from Cart</button>:
                <button className="add-to-cart" onClick={() => handleAddToCart(painting)}>Add to Cart</button>
            } */}
        </div>
    );
};

export default PreviewCard;