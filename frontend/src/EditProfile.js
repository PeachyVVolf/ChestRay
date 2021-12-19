import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from '@mui/styles';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from './css/EditProfileStyles';
import Sidebar from './SideBar';

const EditProfile = (props) => {
    const { classes } = props;
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const ID = sessionStorage.getItem("ID");

    const handleClick = () => {
        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "newEmail": email,
                "newName": name,
                'newAge': age,
                "newGender": gender
            })
        }
        fetch('http://localhost:3000/changeProfile', opts)
        .then(resp => {
            if(resp.status === 200) return resp.json();
            else {
                
            }
        }).then(()=>{
            alert("Profile updated");
            navigate('../user');
        }
        )
        .catch(error => {
            console.error("Error:", error);
        })
    }
    const handleChangeName = e =>{
        setName(e.target.value);
    }    
    const handleChangeEmail = e =>{
        setEmail(e.target.value);
    }
    const handleChangeAge = e =>{
        setAge(e.target.value);
    }
    const handleChangeGender = e =>{
        if(e.target.id === "inline-radio-1")
            setGender("M"); 
        else if(e.target.id === "inline-radio-2")
            setGender("F"); 
    }

    return ( 
            <div>
                <div className='row'>
                    <div className={`col-2 ${classes.navBar}`}> 
                        <Sidebar />
                    </div>
                    <div className={`col-10 ${classes.mainArea}`}> 
                        <h1 className={classes.profileHeader}>My Profile</h1>
                        <div className={classes.profileArea}>
                            <Form>
                                <Form.Group className={classes.loginTextBox} controlId="formBasicName">
                                    <Form.Label className={classes.loginText}>Name<span style={{color:"#ff0000"}}>*</span></Form.Label><br />
                                    <Form.Control
                                        className={classes.loginTextInput}
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        onChange={handleChangeName}
                                    />
                                </Form.Group>
                                <Form.Group className={classes.loginTextBox} controlId="formBasicEmail">
                                    <Form.Label className={classes.loginText}>Email address<span style={{color:"#ff0000"}}>*</span></Form.Label><br />
                                    <Form.Control
                                        className={classes.loginTextInput}
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        onChange={handleChangeEmail}
                                    />
                                </Form.Group>
                                <Form.Group className={classes.loginTextBox} controlId="formBasicAge">
                                    <Form.Label className={classes.loginText}>Age<span style={{color:"#ff0000"}}>*</span></Form.Label><br />
                                    <Form.Control
                                        className={classes.loginTextInput}
                                        type="text"
                                        name="age"
                                        placeholder="Age"
                                        onChange={handleChangeAge}
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
                                <Button
                                    className={classes.editButton}
                                    variant="primary"
                                    type="button"
                                    onClick={handleClick}
                                    >
                                        Update
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default withStyles(styles)(EditProfile);