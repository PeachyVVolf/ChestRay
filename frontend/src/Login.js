import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
    const [email, setEmail]= useState( '' );
    const [password, setPassword]= useState( '' );
    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();
    
    const handlePush = () => {
        navigate('/home');
    }
    const handlePushReg = () => {
        navigate('/register');
    }
    const handleChange = e => e.target.type === "email" ? setEmail(e.target.value): setPassword(e.target.value);
    const handleClick = () => {

        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        }
        fetch('http://localhost:3000/token', opts)
        .then(resp => {
            if(resp.status === 200) return resp.json();
            else alert("Incorrect Email or Password");
        })
        .then(data => {
            sessionStorage.setItem("token", data.access_token);
            sessionStorage.setItem("ID", data.id);
            handlePush();
        })
        .catch(error => {
            console.error("Error:", error);
        })
    } 
  
    return (
    <div>
        <h2>Login</h2>
        <hr />
        {(token && token!=="" && token!==undefined) ? "You are Logged In" : 
            
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
        
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button
                    variant="primary"
                    type="button"
                    onClick={handleClick}
                    >
                        Submit
                </Button>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Don't have an account?</Form.Label>
                    <Button
                        variant="primary"
                        type="button"
                        onClick={handlePushReg}
                        >
                            Register
                    </Button>
                </Form.Group>
            </Form>
        }
    </div>
    );
  }

  export default Login;