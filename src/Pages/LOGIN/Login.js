import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';



const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/'
    const{signInWithEmailPass} =useContext(AuthContext)
    const handelSubmitLogin =(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value 
        console.log(form,email);
        signInWithEmailPass(email,password)
        .then(result=>{
            const user = result.user
            console.log(user);
            navigate(from, {replace:true})
        })
        .catch(e=>console.error(e))
    }
    return (

        <div>
            <Form onSubmit={handelSubmitLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>

                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                <br />
                <Button  variant="primary" type="submit">
                    Log In
                </Button>
            </Form>


        </div>
    );
};

export default Login;