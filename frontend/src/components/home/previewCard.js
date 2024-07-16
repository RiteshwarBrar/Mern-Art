
import React from 'react';

const PreviewCard = ({painting}) => {

    const calcPrice = (price) => {
        return "$ " + (price*0.015).toFixed(2)+" /₹ "+price;
    }
   
    // console.log(error)
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
                {/* <p>Date: {painting.Date}</p> */}
                {/* <p>{painting.Description}</p> */}
                
                {   
                    painting.Images.map((image, index) => (
                        
                        <img 
                            className="painting-card-images"
                            src={image} alt='uploaded'
                            style={painting.Orientation==="Square"?
                                { width: '400px'}//if orientation is square then width and height are same
                                :painting.Orientation==="Landscape"?
                                { width: '450px'}//if orientation is landscape then width and height are same
                                :{ width: '320px'}//if orientation is portrait then width and height are same
                            }/>
                        
                    ))
                }
            </div>
            <h4 className="Title">{painting.Title}</h4>
            {painting.Forsale ? <p>{calcPrice(painting.Price)}</p> : <p>Not Available</p>}
            {/* <button className="see-more">See More</button> */}
        </div>
    );
};

export default PreviewCard;