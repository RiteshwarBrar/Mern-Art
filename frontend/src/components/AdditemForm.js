import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useInventoryContext } from "../hooks/useInventoryContext";

const AdditemForm = () => {
    const { dispatch } = useInventoryContext();//global context
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch('/api/paintings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, date, description})
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        else{
            setError(null)
            setTitle('')
            setDate('')
            setDescription('')
            console.log('Item added')
            dispatch({type: 'ADD_ITEM', payload: json})
        }
    }
    return (
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
                    <Form.Control type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                <Button type='submit'>Add Item</Button>
                {error && <p className='form-error'>{error}</p>}
                {console.log(error)}
            </Form>
    )
}

export default AdditemForm