// React Component for generate report page. getData func gets the current image uploaded. handle click generates the report
// for it. ID is user id and token is the access token

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from './css/AddStyles';
import { withStyles } from '@mui/styles';
import Sidebar from './SideBar';
import cloudImg from './Images/cloud.png';

const AddXray = (props) => {
    const { classes } = props;
    const [image, setImage]= useState( "" );
    const [report, setReport]= useState( '' );
    const [uploaded, setUploaded] = useState('');
    const ID = sessionStorage.getItem("ID");
    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();

    const getData=()=>{
        fetch('temp.json'
        ,{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
        )
            .then(function(response){
            return response.json();
            })
            .then(function(myJson) {
                setImage(myJson.imgID[0].id)
            });
    }

    const handleClickLogOut = () => {
        if (token && token!=="" && token!==undefined){
            sessionStorage.removeItem("token");
            navigate("/login")
        }
    }

    useEffect(()=>{
        getData()
        },[])

    const handleClick = () => {
        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": ID,
                "image": image,
                "report": report
            })
        }
        fetch('http://localhost:3000/addxray', opts)
        .then(resp => {
            if(resp.status === 200) 
            {
                alert("XRay Added");
                navigate('/home');
            }
        })
        .catch(error => {
            console.error("Error:", error);
        })
    } 
    const url = "http://localhost:3000/upload/"+ID;
    return (
    <div>
        <div className='row'>
            <div className={`col-2 ${classes.navBar}`}> 
                <Sidebar logOut={handleClickLogOut}/>
            </div>
            <div className={`col-10 ${classes.bigArea}`}> 
                <div className={classes.mainArea}>
                    <h2>Generate Report</h2>   
                    <div className={classes.addArea}>
                        <h2>PNG,JPEG,JPG files are allowed</h2>
                        <img src={cloudImg} className={classes.cloudImage}/>
                        <h3>Browse to choose an image</h3>
                        <form action={url} enctype="multipart/form-data" method="POST">
                            <input type="file" name="image"/>
                            <input type="submit" value="Upload Image"/>
                        </form>  
                    </div>
                    <Form>    
                        <Button
                            variant="primary"
                            type="button"
                            className={classes.viewReportButton}
                            onClick={handleClick}
                            >
                                Submit
                        </Button>
                    </Form>
                </div> 
            </div>
        </div> 
    </div>
    );
  }

  export default withStyles(styles)(AddXray);