import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Report from './report';

function XrayHistory() {
    const [xrays, setXrays] = useState("");
    const [openX, setOpenX] = useState(false);
    const [rep, setRep] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const ID = sessionStorage.getItem("ID");

    const handleClick = () => {
        navigate('/addXray')
    }

    const handleClickOpen = (x) => {
        if(openX === false){
            setRep(x);
            localStorage.setItem('report', JSON.stringify(x))
            setOpenX(true);
            localStorage.setItem('openx', JSON.stringify(true))
        }
        else if(openX === true){
            setOpenX(false);
            localStorage.setItem('openx', JSON.stringify(false))
        }
    }

    useEffect(() => {
        
        setOpenX(JSON.parse(localStorage.getItem('openx')) || false);
        if(rep === "" || rep === undefined){
            setRep(JSON.parse(localStorage.getItem('report')) || "");
        }
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

    return ( 
        <div>
            <Button
                        variant="primary"
                        type="button"
                        onClick={handleClick}
                        >
                            Add Xray
            </Button>
            {openX === true ?
                <div>
                    <h1>Report</h1>
                    <Report click={handleClickOpen} report={rep}/>
                </div>
            :
                <div>
                <h1>Xrays</h1>
                {loading === true ?
                    <ul>
                        {xrays.map(x => <li key={x.id}>
                            <p> <b>Image:</b> <img src={`http://127.0.0.1:5000/getImg/${x.image}`} style={{maxWidth: '100px', maxHeight: '100px'}}/> <b>Date:</b> {x.date}
                                    <Button
                                        variant="primary"
                                        type="button"
                                        onClick={() => handleClickOpen(x)}
                                        >
                                            Open Report
                                    </Button>
                                </p>
                            </li>)}
                    </ul>
                :
                    <h1>Loading...</h1>
                }
                </div>   
            }
        </div>
     );
}

export default XrayHistory;