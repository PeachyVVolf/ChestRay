// React component which renders the disease info page and calls the api to get info

import React, { useState, useEffect } from 'react';
import { withStyles } from '@mui/styles';
import styles from './css/AddStyles';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';

const DiseaseInfo = (props) => {
    const { classes } = props;
    const navigate = useNavigate();
    const [treatment, setTreatment] = useState();
    const [loading, setLoading] = useState(false);
    const token = sessionStorage.getItem("token");

    useEffect(() => {
        if(loading === false){
            const opts = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            fetch('http://localhost:3000/diseaseInfo', opts)
            .then(resp => {
                if(resp.status === 200) return resp.json();
                else {
                    alert("Error: treatment Details");
                }
            })
            .then(data => {
                console.log(data)
                setTreatment(data);
                setLoading(true);
            })
            .catch(error => {
                console.error("Error:", error);
            })
        }
    })

    const handleClickLogOut = () => {
        if (token && token!=="" && token!==undefined){
            sessionStorage.removeItem("token");
            navigate("/login")
        }
    }

    return(
        <div>
            <div className='row'>
                <div className={`col-2 ${classes.navBar}`}> 
                    <Sidebar logOut={handleClickLogOut}/>
                </div>
                <div className={`col-10 ${classes.bigArea}`}> 
                    <div className={classes.mainArea}>
                        <h2>Disease Information</h2>   
                        <div className={classes.addArea}>
                            <div>
                                {loading === false? <p>Loading</p>:
                                    <div>{treatment}
                                    </div>
                                }
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </div>
    );

}

export default withStyles(styles)(DiseaseInfo);