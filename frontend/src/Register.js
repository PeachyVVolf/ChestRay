import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register = () => {
    const [email, setEmail]= useState( '' );
    const [password, setPassword]= useState( '' );
    const [name, setName]= useState( '' );
    const [age, setAge]= useState( '' );
    const [gender, setGender]= useState( '' );
    const navigate = useNavigate();
    
    const handlePush = () => {
        navigate('/login');
    }

    const handleChange = e =>{
        if(e.target.name === "email")
            setEmail(e.target.value); 
        else if(e.target.name ==="password")
            setPassword(e.target.value);
        else if(e.target.name === "name")
            setName(e.target.value);
        else if(e.target.name === "age")
            setAge(e.target.value);
        else if(e.target.name === "gender")
            setGender(e.target.value);
        }
    const handleClick = () => {

        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "name": name,
                "age":age,
                "gender":gender
            })
        }
        fetch('http://localhost:3000/reg', opts)
        .then(resp => {
            if(resp.status !== 200) 
            {
                alert("Email Already Exists");
                navigate('/register');
            }
            else
            {
                alert("You have registered");
                navigate('/login');
            }
        })
        .catch(error => {
            console.error("Error:", error);
        })
    } 
  
    return (
    <div>
        <h2>Register</h2>
        <hr />       
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                />
            </Form.Group>
    
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                type="text"
                name="age"
                placeholder="Age"
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formBasicGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                type="text"
                name="gender"
                placeholder="Gender"
                onChange={handleChange}
                />
            </Form.Group>
            <Button
                variant="primary"
                type="button"
                onClick={handleClick}
                >
                    Submit
            </Button>
            
            <Form.Group controlId="formBasicAcc">
                <Form.Label>Already have an account?</Form.Label>
            <Button
                variant="primary"
                type="button"
                onClick={handlePush}
                >
                    Login
            </Button>
            </Form.Group>
        </Form>    
    </div>
    );
  }

  export default Register;