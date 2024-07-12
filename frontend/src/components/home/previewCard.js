
const PreviewCard = ({painting}) => {

    
    // console.log(error)
    return (
        <div className="preview-product-card">
            <h3 className="Title">{painting.Title}</h3>
            {/* <p>Date: {painting.Date}</p> */}
            {/* <p>{painting.Description}</p> */}
            
            {   
                painting.Images.map((image, index) => (
                    
                    <img className="painting-card-images" src={image} alt='uploaded'/>
                    
                ))
            }
            {painting.Forsale ? <p>Price: ${painting.Price}</p> : <p>Sold</p>}
            {/* <button className="see-more">See More</button> */}
        </div>
    );
};

export default PreviewCard;