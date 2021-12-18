import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

function XrayHistory() {
    const [xrays, setXrays] = useState("");
    const [images, setImages] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const ID = sessionStorage.getItem("ID");

    const handleClick = () => {
        navigate('/addXray')
    }

    useEffect(() => {
        if(loading === false){
        if (ID && ID!=="" && ID!==undefined){
            // handleImageLoad();

            const opts = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": ID
                })
            }
            fetch('http://localhost:3000/xrays', opts)
            .then(resp => {
                if(resp.status === 200) return resp.json();
                else alert("Error..not 200");
            })
            .then(data =>{
                setXrays(data.xray);
                setLoading(true);
            })
            .catch(error => {
                console.error("Error:", error);
            })
        }
        else{
            alert("You need to Log In")
            navigate('/login')
        }}
    });

    const handleImageLoad = () => {
        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
            })
        }
        const url = "http://localhost:3000/getImg/"+ID;
        fetch(url, opts)
        .then(resp => {
            if(resp.status === 200) return resp.json();
            else alert("Error..not 200");
        })
        .then(data =>{
            console.log(data)
        })
        .catch(error => {
            console.error("Error:", error);
        })
    };

    return ( 
        <div>
            <Button
                        variant="primary"
                        type="button"
                        onClick={handleClick}
                        >
                            Add Xray
            </Button>
            <h1>Xrays</h1>
            {loading === true ?
            <ul>
                {xrays.map(x => <li key={x.id}>
                    <p> <b>Image:</b> <img src={`http://127.0.0.1:5000/getImg/${x.image}`} style={{maxWidth: '100px', maxHeight: '100px'}}/> <b>Date:</b> {x.date} <b>Report:</b> {x.report}</p>
                    </li>)}
            </ul>:
            <h1>Loading...</h1>}
        </div>
     );
}

export default XrayHistory;