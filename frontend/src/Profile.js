import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from '@mui/styles';
import Button from "react-bootstrap/Button";
import styles from './css/ProfileStyles';
import Sidebar from './SideBar';

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

    const handleClick = () => {
        navigate("./update");
    }

    const handleClickLogOut = () => {
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
            <div>
                <div className='row'>
                    <div className={`col-2 ${classes.navBar}`}> 
                        <Sidebar logOut={handleClickLogOut}/>
                    </div>
                    <div className={`col-10 ${classes.mainArea}`}> 
                        <h1 className={classes.profileHeader}>My Profile</h1>
                        <div className={classes.profileArea}>
                            <h3>Full Name:</h3>
                            <p>{name}</p>
                            <h3>Email:</h3>
                            <p>{email}</p>
                            <h3>Age:</h3>
                            <p>{age}</p>
                            <h3>Gender:</h3>
                            <p>{gender}</p>
                               
                            <Button
                                variant="primary"
                                type="button"
                                className={classes.editButton}
                                onClick={handleClick}
                                >
                                    Edit Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default withStyles(styles)(Profile);