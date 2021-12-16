import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function LandingPage() {
    
    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();
    const handleClick = () => {
        if (token && token!=="" && token!==undefined){
            sessionStorage.removeItem("token");
            navigate("/")
        }
        else
            navigate("/login");
    }

    return ( 
        <div>
            <h1>Landing Page</h1>
            {(token && token!=="" && token!==undefined) ? 
                <Button
                    variant="primary"
                    type="button"
                    onClick={handleClick}
                    >
                        Log Out
                </Button> : 
                
                <Button
                    variant="primary"
                    type="button"
                    onClick={handleClick}
                    >
                        Log In
                </Button>
            }
        </div>
    );
}

export default LandingPage;