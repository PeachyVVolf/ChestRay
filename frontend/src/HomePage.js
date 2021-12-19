import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import XrayHistory from './XrayHistory';
import AddXray from './AddXray';
import Profile from './Profile';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from '@mui/styles';
import styles from './css/HomeStyles';
import dashImg from './Images/DashboardChest.jpg';
import userImg from './Images/user.png';

const HomePage = (props) => {
    const { classes } = props;
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [page, setPage] = useState( '' );
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const ID = sessionStorage.getItem("ID");
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const handleClickLogOut = () => {
        if (token && token!=="" && token!==undefined){
            sessionStorage.removeItem("token");
            navigate("/login")
        }
    }
    const handleClickHistory = () => {
        setPage('History');
        localStorage.setItem('openPage', JSON.stringify('History'))
    }
    const handleClickGenerateReport = () => {
        setPage('Generate Report');
        localStorage.setItem('openPage', JSON.stringify('Generate Report'))
    }
    const handleClickProfile = () => {
        setPage('Profile');
        localStorage.setItem('openPage', JSON.stringify('Profile'))
    }
    const handleClickDashboard = () => {
        setPage('Dashboard');
        localStorage.setItem('openPage', JSON.stringify('Dashboard'))
    }

    useEffect(() => {
        
        setPage(JSON.parse(localStorage.getItem('openPage')) || false);
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
       // <div>
       <div className={classes.root}>
            <div>
                <div className='row'>
                    <div className={`col-2 ${classes.navBar}`}>
                            <h1 className={classes.title}>ChestRay</h1>
                            <p onClick={handleClickDashboard} className={`${classes.navItem} ${page === 'Dashboard'? `${classes.active}`: 'hidden'}`}>Dashboard</p>
                            <p onClick={handleClickProfile} className={`${classes.navItem} ${page === 'Profile'? `${classes.active}`: 'hidden'}`}>My Profile</p>
                            <p onClick={handleClickGenerateReport} className={`${classes.navItem} ${page === 'Generate Report'? `${classes.active}`: 'hidden'}`}>Generate Report</p>
                            <p onClick={handleClickHistory} className={`${classes.navItem} ${page === 'History'? `${classes.active}`: 'hidden'}`}>History</p>
                            <br /><br /><br /><br />
                            <p onClick={handleClickLogOut} className={classes.navItem}>Log Out</p>
                            <br /><br /><br /><br />
                            <br /><br /><br /><br />
                            <br /><br /><br /><br />
                            <br /><br /><br /><br />
                            <br /><br /><br /><br />
                            <br /><br /><br /><br />
                    </div>
                    <div className='col-10'>
                        {page === 'Dashboard' ? 
                        <div className={classes.dashBoard}>
                            <div className='row'>
                                <div className='col-8'>
                                    <div className={classes.header}>
                                        <h1 className={classes.personTitle}>Good Morning {gender === 'M'? 'Mr.': 'Miss'} {name}!</h1>
                                        <h1 className={classes.personTitleSubline}>{current.getDate()} {monthNames[current.getMonth()]} {current.getFullYear()} <span className={classes.headerSpan}>_________</span> {days[current.getDay()]}</h1>
                                        
                                    </div>
                                    <img className={classes.dashImage} src={dashImg}/>
                                </div>
                                <div className='col-4'>
                                    <div className={classes.areaAroundUserDetails}>
                                        <div className={classes.userDetails}>
                                            <img className={classes.userImg} src={userImg}/>
                                            <br /><br />
                                            <p>{gender === 'M'? 'Mr.': 'Miss'} {name}</p>
                                            <p className={classes.userDetailsEmail}>{email}</p>
                                            <br /><br />
                                            <br /><br />
                                            <p className={classes.userDetailsAge}>Age: {age}</p>
                                            <br /><br />
                                            <br /><br />
                                            <br /><br />
                                            <br /><br />
                                            <br /><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            
                        </div>
                        }
                        {page === 'History' ? <div>
                            <XrayHistory />
                        </div>
                        :
                        <div>
                            
                        </div>
                        }
                        {page === 'Generate Report' ? <div>
                            <AddXray />
                        </div>
                        :
                        <div>
                            
                        </div>
                        }
                        {page === 'Profile' ? <div>
                            <Profile />
                        </div>
                        :
                        <div>
                            
                        </div>
                        }
                        
                    </div>
                </div>
            </div>
            
        </div>
     );
}

export default withStyles(styles)(HomePage);