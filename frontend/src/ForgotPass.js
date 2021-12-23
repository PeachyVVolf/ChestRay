//forgot pw functionality. if user email exists, it will change user pw

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withStyles } from '@mui/styles';
import styles from './css/LoginStyles';

const ForgotPass = (props) => {
    const { classes } = props;
    const [email, setEmail]= useState( '' );
    const [err, setErr] = useState('');
    const [password, setPassword]= useState( '' );
    const ID = sessionStorage.getItem("ID");
    const navigate = useNavigate();

    const handleChange = e => e.target.type === "email" ? setEmail(e.target.value): setPassword(e.target.value);
   
    const handleClick = () => {

        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "newEmail": email,
                "newPass": password
            })
        }
        fetch('http://localhost:3000/changePass', opts)
        .then(resp => {
            if(resp.status === 200) return resp.json();
            else {
                setErr("Email doesn't exist");
            }
        }).then(()=>{
            alert("Password updated");
            navigate('/login');
        }
        )
        .catch(error => {
            console.error("Error:", error);
        })
    } 

    return ( 
        <div className={classes.root}>
            <h1 className={classes.title}>ChestRay</h1>
            <div>
                <h2 className={classes.loginTitle}>LOGIN</h2>
                <div className={classes.loginBox}>
                    <Form.Group className={classes.loginTextBox} controlId="formBasicEmail">
                            <Form.Label className={classes.loginText}>Email Address</Form.Label><br />
                            <Form.Control
                            className={classes.loginTextInput}
                            type="email"
                            onChange={handleChange}
                            />
                    </Form.Group>
                    <Form.Group className={classes.loginTextBox} controlId="formBasicPassword">
                        <Form.Label className={classes.loginText}>Password</Form.Label><br />
                        <Form.Control
                        className={classes.loginTextInput}
                        type="password"
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Button
                        className={classes.loginTextSubmit}
                        variant="primary"
                        type="button"
                        onClick={handleClick}
                        >
                            Change Password
                    </Button>
                </div>
            </div>
        </div>
     );
}

export default withStyles(styles)(ForgotPass);