import {useState} from 'react';
import { Button } from 'react-bootstrap';
import { useInventoryContext } from "../hooks/useInventoryContext";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from "../firebase";
const PaintingCard = ({painting, fetchPaintings}) => {

    const { dispatch } = useInventoryContext();
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
        <div className="painting-card">
            <h2>{painting.Title}</h2>
            <p>Date: {painting.Date}</p>
            <p>{painting.Description}</p>
            {/* <img src={`data:image/png;base64,${painting.image}`} alt='uploaded' /> */}
            <Button onClick={handleDelete} className='inventory-delete'>Delete item</Button>
            {/* //onClick={handleDelete} */}
        </div>
    );
};

export default PaintingCard;