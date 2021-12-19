import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withStyles } from '@mui/styles';
import styles from './css/LoginStyles';

const Login = (props) => {
    const { classes } = props;
    const [email, setEmail]= useState( '' );
    const [err, setErr] = useState('');
    const [password, setPassword]= useState( '' );
    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();

    const check = () =>{
        if(email === "" || password === ""){
            setErr("all * field are requierd")
        }else{
            setErr("")
        }
    }

    
    const handlePush = () => {
        navigate('/home');
    }
    const handlePushReg = () => {
        navigate('/register');
    }
    const handleChange = e => e.target.type === "email" ? setEmail(e.target.value): setPassword(e.target.value);
    const handleClick = () => {
        check()
        if(err === ""){
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
                else {
                    setErr("Incorrect Email or Password");
                }
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
    } 
    const handleForgot = () => {
        navigate('/forgotPass')
    }
  
    return (
        
    <div className={classes.root}>
        <h1 className={classes.title}>ChestRay</h1>
        <div>
            <h2 className={classes.loginTitle}>LOGIN</h2>
            <div className={classes.loginBox}>
                {(token && token!=="" && token!==undefined) ? "You are Logged In" : 
                    
                    <Form>
                        <Form.Group className={classes.loginTextBox} controlId="formBasicEmail">
                            <Form.Label className={classes.loginText}>Email Address<span style={{color:"#ff0000"}}>*</span></Form.Label><br />
                            <Form.Control
                            className={classes.loginTextInput}
                            type="email"
                            onChange={handleChange}
                            />
                        </Form.Group>
                
                        <Form.Group className={classes.loginTextBox} controlId="formBasicPassword">
                            <Form.Label className={classes.loginText}>Password<span style={{color:"#ff0000"}}>*</span></Form.Label>
                            <Form.Label className={classes.loginTextForgot} onClick={handleForgot}>Forgot Password?</Form.Label><br />
                            <Form.Control
                            className={classes.loginTextInput}
                            type="password"
                            onChange={handleChange}
                            />
                        </Form.Group>
                        {err !== "" && err !== undefined ?
                            <p className={classes.error}>{err}</p>
                            :
                            <div className={classes.noError}></div>
                        }
                        <Button
                            className={classes.loginTextSubmit}
                            variant="primary"
                            type="button"
                            onClick={handleClick}
                            >
                                Login
                        </Button>
                        <Form.Group className={classes.loginTextBox} controlId="formBasicPassword">
                            <Form.Label className={classes.loginText} >Don't have an account?</Form.Label>
                            <Button
                                className={classes.loginTextRegister}
                                variant="primary"
                                type="button"
                                onClick={handlePushReg}
                                >
                                    Create Account
                            </Button>
                        </Form.Group>
                    </Form>
                }
            </div>
        </div>
    </div>
    );
  }

  export default withStyles(styles)(Login);