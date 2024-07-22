import { useState } from 'react';
// import { useCheckoutListContext } from "../../hooks/useCheckoutListContext";
const PreviewCard = ({painting}) => {

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
            {painting.Forsale ? <p>{calcPrice(painting.Price)}</p> : <p>Not Available</p>}
            {/* <button className="see-more">See More</button> */}
            {
                JSON.parse(localStorage.getItem('checkoutList'))?.includes(painting.Title)?
                <button className="remove-from-cart" onClick={() => handleRemoveFromCart(painting)}>Remove from Cart</button>:
                <button className="add-to-cart" onClick={() => handleAddToCart(painting)}>Add to Cart</button>
            }
        </div>
    );
};

export default PreviewCard;