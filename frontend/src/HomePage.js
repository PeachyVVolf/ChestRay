import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from "react-bootstrap";
import XrayHistory from './XrayHistory';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from '@mui/styles';
import styles from './css/LoginStyles';

const HomePage = (props) => {
    const { classes } = props;
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const ID = sessionStorage.getItem("ID");

    const handleClick = () => {
        if (token && token!=="" && token!==undefined){
            sessionStorage.removeItem("token");
            navigate("/login")
        }
    }

    useEffect(() => {
        
        if (token && token!=="" && token!==undefined){
            const opts = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": ID
                })
            }
            fetch('http://localhost:3000/homedata', opts)
            .then(resp => {
                if(resp.status === 200) return resp.json();
                else alert("Incorrect Email or Password");
            })
            .then(data =>{
                setName(data.name);
                setAge(data.age);
                setEmail(data.email);
                setGender(data.gender);
            })
            .catch(error => {
                console.error("Error:", error);
            })
        }
        else{
            alert("You need to Log In")
            navigate('/login')
        }
    });

    return ( 
       // <div>
       <div className={classes.root}>
            <h1 className={classes.title}>ChestRay</h1>
            <div>
                <div className='row'>
                    <div className='col-3'>
                        <p>Dashboard</p>
                        <p>My Profile</p>
                        <p>Generate Report</p>
                        <p>History</p>
                        <a onClick={handleClick}>Log Out</a>
                    </div>
                    <div className='col-9'>sssssssssssssssssssssssssssssssss</div>
                </div>
            </div>
        </div>
        //    <h1>Welcome {name}</h1>
        //    <p>Age: {age}</p>
        //    <p>Gender: {gender}</p>
        //    <p>Email: {email}</p>
        //    <Button
        //                variant="primary"
        //                type="button"
        //                onClick={handleClick}
        //                >
        //                    Log Out
        //    </Button>
        //    <XrayHistory />
        //</div>
     );
}

export default withStyles(styles)(HomePage);