import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const Resister = () => {
    const{createUserByResister} =useContext(AuthContext)
    const navigate = useNavigate()
    const handelResisterSubmit=(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const photoURL = form.link.value

        createUserByResister(email,password)
        .then(result=>{
            const user = result.user
            console.log(user);
            navigate('../login')
        })
        .catch(e=>console.error(e))
    }
    return (
        <div>
             <Form onSubmit={handelResisterSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="name" name="name" placeholder="Enter name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type='link' name="link" placeholder="Enter Photo Url" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>

                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
<br />
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    );
};

export default Resister;