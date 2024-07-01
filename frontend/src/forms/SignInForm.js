import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignInForm = ({collectionRef, fetchPaintings, setUser}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            await signInWithEmailAndPassword(auth, email, password); 
            console.log('Signed in');
            setUser(auth.currentUser.email);
        }
        catch(err) {
            setError(err)
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} className='sign-in-form'>
                <Form.Group controlId='formEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId='formDate'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button type='submit'>SignIn</Button>
                {error && <p className='form-error'>{error}</p>}
            </Form>

        </div>
    )
}

export default SignInForm