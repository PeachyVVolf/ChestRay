import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import XrayHistory from './XrayHistory';
import AddXray from './AddXray';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from '@mui/styles';
import styles from './css/HomeStyles';

const Profile = (props) => {
    const { classes } = props;
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [page, setPage] = useState( '' );
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const ID = sessionStorage.getItem("ID");


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
            <div>
                <h1>Welcome {name}</h1>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>Email: {email}</p>
            </div>
     );
}

export default withStyles(styles)(Profile);