
const PaintingCard = ({painting}) => {

    
    // console.log(error)
    return (
        <div className="product-card">
            <h3>{painting.Title}</h3>
            {/* <p>Date: {painting.Date}</p> */}
            {/* <p>{painting.Description}</p> */}
            
            {   
                painting.Images.map((image, index) => (
                    
                    <img className="painting-card-images" width="200"  height="200" src={image} alt='uploaded'/>
                    
                ))
            }
            {painting.Forsale ? <p>${painting.Price}</p> : <p>Sold</p>}
            {/* <button className="see-more">See More</button> */}
        </div>
    );
};

export default PaintingCard;