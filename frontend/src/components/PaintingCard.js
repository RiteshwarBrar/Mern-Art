import {useState} from 'react';
import { Button } from 'react-bootstrap';

const PaintingCard = ({painting}) => {

    
    // const [error, setError] = useState(null)

    // const handleDelete = async(e) => {
    //     e.preventDefault()
    //     const response = await fetch('/api/paintings/'+{painting._id}, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({id: painting._id})
    //     })
    //     const json = await response.json()

    //     if (!response.ok) {
    //         setError(json.error)
    //     }
    //     else{
    //         setError(null)
    //         console.log('Item deleted')
    //     }
    // }

    // console.log(error)
    return (
        <div className="painting-card">
            <h2>{painting.title}</h2>
            <p>Date: {painting.date}</p>
            <p>{painting.description}</p>
            <Button className='inventory-delete'>Delete item</Button>
            {/* //onClick={handleDelete} */}
        </div>
    );
};

export default PaintingCard;