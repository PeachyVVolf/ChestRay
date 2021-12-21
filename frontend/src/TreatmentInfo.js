import React, { useState, useEffect } from 'react';
import { withStyles } from '@mui/styles';
import styles from './css/AddStyles';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';

const TreatmentInfo = (props) => {
    const { classes } = props;
    const navigate = useNavigate();
    const [treatment, setTreatment] = useState();
    const [dataT, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const ID = sessionStorage.getItem("ID");
    const token = sessionStorage.getItem("token");

    useEffect(() => {
        if(loading === false){
            const opts = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            fetch('http://localhost:3000/diseaseTreatment', opts)
            .then(resp => {
                if(resp.status === 200) return resp.json();
                else {
                    alert("Error: treatment Details");
                }
            })
            .then(data => {
                setTreatment(data);
                printData();
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

    const printData = () => {
        let element = [];
        let count = 0;
        for (let index = 1; index < treatment.length; index++) {
            if(treatment[index] !== '[' && treatment[index] !== ']' && treatment[index] !== '"')
                {element[count] = treatment[index];  
                count++;} 
        }
        let word = "";
        let newArray = [];
        count = 0;
        for (let index = 0; index < element.length; index++) {
            if(element[index] !== ',')
                {
                    if(newArray[count] !== undefined)
                        newArray[count] += element[index];
                    else
                        newArray[count] = element[index];
                }
            else
                {
                    count++;
                    dataT.push(newArray[count-1])
                } 
        }

        dataT.push(newArray[count])

        return true;
    }

    return(
        <div>
            <div className='row'>
                <div className={`col-2 ${classes.navBar}`}> 
                    <Sidebar logOut={handleClickLogOut}/>
                </div>
                <div className={`col-10 ${classes.bigArea}`}> 
                    <div className={classes.mainArea}>
                        <h2>Disease Treatment</h2>   
                        <div className={classes.addArea}>
                            <div>
                                {loading === false? <p>Loading</p>:
                                    <div>
                                        We advice you to adopt these four steps in order to not succumb to the effect of Pneumonia. (These steps
                                        are just suggestions but you should contact your doctor and not just follow these.)
                                        <ul >
                                            {dataT.map((item, index) => {
                                                return <li key={index}>{item}</li>;
                                            })}
                                        </ul>
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

export default withStyles(styles)(TreatmentInfo);