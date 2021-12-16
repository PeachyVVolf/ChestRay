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
    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();
    
    const handlePush = () => {
        navigate('/login');
    }

    const handleChange = e =>{
        e.target.type === "email" ? setEmail(e.target.value) : setEmail(email); 
        e.target.type ==="password" ? setPassword(e.target.value): setPassword(password);
        e.target.type === "name" ? setName(e.target.value): setName(name);
        e.target.type === "age" ? setAge(e.target.value): setAge(age);
        e.target.type === "gender" ? setGender(e.target.value): setGender(gender);
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
        {(token && token!=="" && token!==undefined) ? "You are Logged In" : 
            
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    />
                </Form.Group>
        
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type="name"
                    placeholder="Name"
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                    type="age"
                    placeholder="Age"
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                    type="gender"
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
                
                <Form.Group controlId="formBasicGender">
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
        }
    </div>
    );
  }

  export default Register;