import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddXray = () => {
    const [image, setImage]= useState( "" );
    const [report, setReport]= useState( '' );
    const ID = sessionStorage.getItem("ID");
    const navigate = useNavigate();
    
    const handleChange = e =>{
        if(e.target.name === "image")
            setImage(e.target.value); 
        else if(e.target.name ==="report")
            setReport(e.target.value);
        else if(e.target.name === "image")
            setImage(e.target.value);
        }

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
            console.log(response)
            return response.json();
            })
            .then(function(myJson) {
                setImage(myJson.imgID[0].id)
            });
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
        <h2>Add XRay</h2>
        <hr />     
        <form action={url} enctype="multipart/form-data" method="POST">
            <input type="file" name="image"/>
            <input type="submit" value="Upload Image"/>
        </form>
        <Form>    
            
            <Form.Group controlId="formBasicReportID">
                <Form.Label>Report</Form.Label>
                <Form.Control
                type="text"
                name="report"
                placeholder="reportID"
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
        </Form>    
    </div>
    );
  }

  export default AddXray;