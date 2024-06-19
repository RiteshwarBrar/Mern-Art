import {useState} from 'react';
import { Button } from 'react-bootstrap';
import { useInventoryContext } from "../hooks/useInventoryContext";

const PaintingCard = ({painting}) => {

    const { dispatch } = useInventoryContext();
    const [error, setError] = useState(null)

    const handleDelete = async(e) => {
        e.preventDefault()
        const response = await fetch('/api/paintings/'+ painting._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        else{
            setError(null)
            console.log('Item deleted')
            dispatch({type: 'DELETE_ITEM', payload: painting._id})
        }
    }

    console.log(error)
    return (
        <div className="painting-card">
            <h2>{painting.title}</h2>
            <p>Date: {painting.date}</p>
            <p>{painting.description}</p>
            <Button onClick={handleDelete} className='inventory-delete'>Delete item</Button>
            {/* //onClick={handleDelete} */}
        </div>
    );
};

export default PaintingCard;