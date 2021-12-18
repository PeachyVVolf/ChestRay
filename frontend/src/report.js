import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';

function Report(props) {
    const [rep, setReport] = useState("");
    const [disease, setDisease] = useState("");
    const [prob, setProb] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(loading === false){
            handleLoad();
            setLoading(true);
        }
        const opts = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if(rep.report !== "" && rep.report!==undefined){
            const url = "http://localhost:3000/getReport/"+rep.report;
            fetch(url, opts)
            .then(resp => {
                if(resp.status === 200) {
                    return resp.json();
                }
                else alert("Error..no rep");
            })
            .then(data =>{
                setDisease(data.disease);
                setProb(data.prob);
            })
            .catch(error => {
                console.error("Error:", error);
            })
        }
        
    }) 
    
    const handleLoad = () => {
        setReport(JSON.parse(localStorage.getItem('report')) || "");
    }

    const handleClick = () => {
        props.click();
    }

    return ( 
        <div>
            <Button
                variant="primary"
                type="button"
                onClick={handleClick}
                >
                    Back to Xrays
            </Button>
                
            {loading ===true && rep!==""? 
            <div>
                <br></br>
                <img src={`http://localhost:3000/getImg/${rep.image}`} style={{maxWidth: '900px', maxHeight: '900px'}}/>
                <p>
                    Disease: {disease}
                </p>
                <p>
                    Probability: {prob}
                </p>
            </div>
            :
            <h1>Loading...</h1>}
        </div>
     );
}

export default Report;