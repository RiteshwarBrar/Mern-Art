import {useState} from 'react';
import { Button } from 'react-bootstrap';
// import { useInventoryContext } from "../../hooks/useInventoryContext";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from "../../firebase";
const PaintingCard = ({painting, fetchPaintings}) => {

    // const { dispatch } = useInventoryContext();
    const [error, setError] = useState(null)

    const handleDelete = async(e) => {
        e.preventDefault()
        try {
            const movieDoc = doc(db, 'inventory', painting.id)
            await deleteDoc(movieDoc);
            setError(null)
            console.log('Item deleted')
            fetchPaintings();

        }
        // const response = await fetch('/api/paintings/'+ painting.id, {
        //     method: 'DELETE'
        // })
        // const json = await response.json()

        catch (error) {
            setError(error)
        }
    }

    // console.log(error)
    return (
        <div className="inventory-card">
            {error && <p>{error}</p>}
            <h2>{painting.Title}</h2>
            <p>Date: {painting.Date}</p>
            <p>Medium: {painting.Medium}</p>
            <p>Size: {painting.Size}</p>
            <p>{painting.Description}</p>
            {painting.Forsale ? <p>${painting.Price}</p> : <p>Not for sale</p>}
            {   
                painting.Images.map((image, index) => (
                    <div 
                        key={index} 
                        className='inventory-card-image'
                        style={painting.Orientation==="Square"?
                        { width: '500px',height: '500px'}//if orientation is square then width and height are same
                        :painting.Orientation==="Landscape"?
                        { width: '500px',height: '400px'}//if orientation is landscape then width and height are same
                        :{ width: '400px',height: '500px'}//if orientation is portrait then width and height are same
                        }>
                    <img fill key={index} src={image} alt='uploaded'/>
                    </div>
                ))
            }
            <Button onClick={handleDelete} className='inventory-delete'>Delete item</Button>
            {/* //onClick={handleDelete} */}
        </div>
    );
};

export default PaintingCard;