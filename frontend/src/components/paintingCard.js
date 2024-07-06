

const PaintingCard = ({painting}) => {

    
    // console.log(error)
    return (
        <div className="product-card">
            <h3>{painting.Title}</h3>
            {/* <p>Date: {painting.Date}</p> */}
            {/* <p>{painting.Description}</p> */}
            {painting.Forsale ? <p>${painting.Price}</p> : <p>Sold</p>}
            {/* {   
                painting.Images.map((image, index) => (
                    <div key={index} className='painting-card-image-stack'>
                    <img className="painting-card-images" key={index} src={image} alt='uploaded'/>
                    </div>
                ))
            } */}
            <button>See More</button>
        </div>
    );
};

export default PaintingCard;