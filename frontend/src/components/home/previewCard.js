
const PreviewCard = ({painting}) => {

    const calcPrice = (price) => {
        return "$ " + (price*0.015).toFixed(2)+" /₹ "+price;
    }
    // console.log(error)
    return (
        <div className="preview-product-card">
            <div className="preview-product-image-card">
            {/* <p>Date: {painting.Date}</p> */}
            {/* <p>{painting.Description}</p> */}
            
            {   
                painting.Images.map((image, index) => (
                    
                    <img className="painting-card-images" src={image} alt='uploaded'/>
                    
                ))
            }
            </div>
            <h4 className="Title">{painting.Title}</h4>
            {painting.Forsale ? <p>{calcPrice(painting.Price)}</p> : <p>Sold</p>}
            {/* <button className="see-more">See More</button> */}
        </div>
    );
};

export default PreviewCard;