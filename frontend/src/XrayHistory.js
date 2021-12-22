import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Report from './report';
import { withStyles } from '@mui/styles';
import styles from './css/XrayHistoryStyles';
import Sidebar from './SideBar';
import DeleteRep from './DeleteRep';

const XrayHistory = (props) => {
    const { classes } = props;
    const [xrays, setXrays] = useState("");
    const [openX, setOpenX] = useState(false);
    const [rep, setRep] = useState("");
    const [loading, setLoading] = useState(false);
    const [disease, setDisease] = useState([]);
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const ID = sessionStorage.getItem("ID");

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

    const getDisease = (x, index) => {
        
        const opts = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if(x.report !== "" && x.report!==undefined && (disease[index]==="" || disease[index]===undefined) && (disease[index+1]===undefined || disease[index+1]==="")){
            const url = "http://localhost:3000/getReport/"+x.report;
            fetch(url, opts)
            .then(resp => {
                if(resp.status === 200) {
                    return resp.json();
                }
            })
            .then(data =>{
                if(data.disease !== undefined && data.disease !== ""){
                    let a = disease.slice();
                    a[index] = data.disease;
                    setDisease(a);
                }
            })
            .catch(error => {
                
            })
        }
    }

    const renderTableData = () => {
        return xrays.map((x, index) => {
           const { id, image, date } = x //destructuring
        //    console.log(x)
           return (
              <div key={id}>
                  {getDisease(x, index)}
                  <div className='row'>
                        <div className={`col-3 ${classes.tableData} ${classes.tableImage}`}>
                            <img src={`http://127.0.0.1:5000/getImg/${x.image}`} style={{maxWidth: '100px', maxHeight: '100px'}}/>
                        </div>
                        <div className={`col-3 ${classes.tableData}`}>
                            {date}
                        </div>
                        <div className={`col-2 ${classes.tableData}`}>
                            {disease[index] !== "" && disease[index]!==undefined? disease[index] : 'none'}
                        </div>
                        <div className={`col-2 ${classes.tableData}`}>
                            <Button
                            variant="primary"
                            type="button"
                            className= {classes.tableDataButton}
                            onClick={() => handleClickOpen(x)}
                            >
                                View Report
                            </Button>
                        </div>
                        <div className={`col-2 ${classes.tableData}`}>
                            <DeleteRep repID={id}/>
                        </div>
                    </div> 
                    <br />
              </div>
           )
        })
    }

    const handleClickLogOut = () => {
        if (token && token!=="" && token!==undefined){
            sessionStorage.removeItem("token");
            navigate("/login")
        }
    }

    return ( 
        <div>
            <div className='row'>
                <div className={`col-2 ${classes.navBar}`}> 
                    <Sidebar logOut={handleClickLogOut}/>
                </div>
                <div className={`col-10`}> 
                    {openX === true ?
                        <div className={classes.reportMainArea}>
                            <h1 className={classes.reportHeader}>Report Details</h1>
                            <Report click={handleClickOpen} report={rep}/>
                        </div>
                    :
                        <div>
                            <h1 className={classes.title}>History</h1>
                            <div className={classes.historyBox}>
                                <br />
                                <div className={classes.dataBox}>
                                    {loading === true ?
                                        <div>
                                            <div className='row'>
                                                <div className={`col-3 ${classes.header}`}>
                                                    Image
                                                </div>
                                                <div className={`col-3 ${classes.header}`}>
                                                    Date
                                                </div>
                                                <div className={`col-3 ${classes.header}`}>
                                                    Disease
                                                </div>
                                                <div className={`col-3 ${classes.header}`}>
                                                    Report
                                                </div>
                                            </div>
                                            <br />
                                            <div id='data'>
                                                <div>
                                                    {renderTableData()}
                                                </div>
                                            </div>
                                        </div>
                                    :
                                        <h1>Loading...</h1>
                                    }
                                </div>
                                
                                <br />
                            </div>
                        </div>   
                    }
                </div>
            </div>
        </div>
     );
}

export default withStyles(styles)(XrayHistory);