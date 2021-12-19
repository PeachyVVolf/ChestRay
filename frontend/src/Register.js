import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withStyles } from '@mui/styles';
import styles from './css/LoginStyles';

const Register = (props) => {
    const { classes } = props;
    const [email, setEmail]= useState( '' );
    const [password, setPassword]= useState( '' );
    const [name, setName]= useState( '' );
    const [age, setAge]= useState( '' );
    const [gender, setGender]= useState( '' );
    const [err, setErr] = useState( '' );
    const navigate = useNavigate();
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var hasNumber = /\d/; 
    
    const check = () =>{
        if(name === ""){
            setErr("all * field are requierd")
        }else if(age === ""){
            setErr("all * field are requierd")
        }else if(email === ""){
            setErr("all * field are requierd")
        }else if(password === ""){
            setErr("all * field are requierd")
        }else if(gender === ""){
            setErr("all * field are requierd")
        }else if(password.length < 8){
            setErr("Password less than 8 characters")
        }else if(!email.includes('@')){
            setErr("Email address seems to be incorrect")
        }else if(format.test(name)){
            setErr("Special Characters not Allowed")
        }else if(parseInt(age) < 18){
            setErr("User must be 18 or above")
        }else if(hasNumber.test(name)){
            setErr("Digits not allowed")
        }
    }

    useEffect(() => {
        check()
    })

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
    }

    const handleChangeGender = e =>{
        if(e.target.id === "inline-radio-1")
            setGender("M"); 
        else if(e.target.id === "inline-radio-2")
            setGender("F"); 
    }

    const handleClick = () => {
        if(err === ""){
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
    }

  
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>ChestRay</h1>
            <div>
                <h2 className={classes.loginTitle}>Create Account</h2>
                <div className={classes.loginBox}>     
                    <Form>
                        <Form.Group className={classes.loginTextBox} controlId="formBasicEmail">
                            <Form.Label className={classes.loginText}>Email address<span style={{color:"#ff0000"}}>*</span></Form.Label><br />
                            <Form.Control
                            className={classes.loginTextInput}
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            onChange={handleChange}
                            />
                        </Form.Group>
                
                        <Form.Group className={classes.loginTextBox} controlId="formBasicPassword">
                            <Form.Label className={classes.loginText}>Password<span style={{color:"#ff0000"}}>*</span></Form.Label><br />
                            <Form.Control
                            className={classes.loginTextInput}
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className={classes.loginTextBox} controlId="formBasicName">
                            <Form.Label className={classes.loginText}>Name<span style={{color:"#ff0000"}}>*</span></Form.Label><br />
                            <Form.Control
                            className={classes.loginTextInput}
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            />
                        </Form.Group>
                        
                        <Form.Group className={classes.loginTextBox} controlId="formBasicAge">
                            <Form.Label className={classes.loginText}>Age<span style={{color:"#ff0000"}}>*</span></Form.Label><br />
                            <Form.Control
                            className={classes.loginTextInputAge}
                            type="text"
                            name="age"
                            placeholder="Age"
                            onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className={classes.loginTextBox} controlId="formBasicAge">
                            <Form.Label className={classes.loginText}>Gender<span style={{color:"#ff0000"}}>*</span></Form.Label>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`}>
                                <Form.Check
                                    inline
                                    label="Male"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    onClick={handleChangeGender}
                                />
                                <Form.Check
                                    inline
                                    label="Female"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    onClick={handleChangeGender}
                                />
                                </div>
                            ))}  
                        </Form.Group>
                        {err !== "" && err !== undefined ?
                            <p className={classes.error}>{err}</p>
                            :
                            <div className={classes.noError}></div>
                        }
                        <Button
                            className={classes.loginTextSubmitRegister}
                            variant="primary"
                            type="button"
                            onClick={handleClick}
                            >
                                Create Account
                        </Button>
                        
                        <Form.Group className={classes.loginTextBox} controlId="formBasicAcc">
                            <Form.Label className={classes.loginText}>Already have an account?</Form.Label>
                        <Button
                            className={classes.loginTextRegister}
                            variant="primary"
                            type="button"
                            onClick={handlePush}
                            >
                                Log in
                        </Button>
                        </Form.Group>
                    </Form>    
                </div>
            </div>
        </div>
    );
  }

  export default withStyles(styles)(Register);