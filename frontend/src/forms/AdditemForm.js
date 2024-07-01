import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useInventoryContext } from "../hooks/useInventoryContext";
import { addDoc } from 'firebase/firestore';

const AdditemForm = ({collectionRef, fetchPaintings}) => {
    const { dispatch } = useInventoryContext();//global context
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    

    

    const handleSubmit = async(e) => {
        e.preventDefault()

        
        try{
            await addDoc(collectionRef, {
            Title:title, Date:date, Description:description
            });
            
            setError(null)
            setTitle('')
            setDate('')
            setDescription('')
            console.log('Item added')
            // await dispatch({type: 'ADD_ITEM', payload: {Title:title, Date:date, Description:description}})
            fetchPaintings();
        }
        

        catch(err) {
            setError(err)
        }
        
        
    }
    return (<div>
            {/* <img src={`data:image/png;base64,${encoded}`} alt='uploaded' /> //testing Base64 encoding*/}
            <Form onSubmit={handleSubmit} className='add-item-form'>
                <Form.Group controlId='formTitle'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group controlId='formDate'>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type='text' value={date} onChange={(e) => setDate(e.target.value)} />
                </Form.Group>
                <Form.Group controlId='formDescription'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='text' value={description} onChange={(e) => {
                        setDescription(e.target.value)
                        }} />
                </Form.Group>
                
                {/* <Form.Group controlId='formUploadImg'>
                    <Form.Label>Upload Images</Form.Label>
                    <Form.Control type='file' multiple onChange={(e) => setImgs(e.target.files)} />
                </Form.Group> */}
                <Button type='submit'>Add Item</Button>
                {error && <p className='form-error'>{error}</p>}
            </Form>

            </div>
    )
}

export default AdditemForm