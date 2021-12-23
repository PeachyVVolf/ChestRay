// view report func

import React, { useState, useEffect, Component, PropTypes}  from 'react';
import Button from 'react-bootstrap/esm/Button';
import { withStyles } from '@mui/styles';
import styles from './css/reportStyles';
import ProgressBar from "./ProgressBar";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const Report = (props) => {
    const { classes } = props;
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

    const printDocument = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }

    return ( 
        <div>
            <Button
                variant="primary"
                type="button"
                onClick={handleClick}
                className={classes.backButton}
                >
                    Back to Xrays
            </Button>
                
            {loading ===true && rep!==""? 
            <div>
                <div className='row'>
                    <div className={`col-4 ${classes.repImage}`}>
                        <img src={`http://localhost:3000/getImg/${rep.image}`} style={{maxWidth: '900px', maxHeight: '900px'}}/>
                    </div>
                    <div className={`col-8 ${classes.beforeReportArea}`}>
                        <div id="divToPrint" className={classes.reportArea}>
                            <h4>
                                {disease}:    <ProgressBar bgcolor={'#6a1b9a'} completed={prob} />
                            </h4>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="mb5">
                    <button className={classes.printButton} onClick={printDocument}>Download Report</button>
                </div>
            </div>
            :
            <h1>Loading...</h1>}
        </div>
     );
}

export default withStyles(styles)(Report);