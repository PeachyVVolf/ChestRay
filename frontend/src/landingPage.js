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
    const handleClickReg = () => {
            navigate("/register");
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
                <div>
                    <Button
                        variant="primary"
                        type="button"
                        onClick={handleClick}
                        >
                            Log In
                    </Button>
                    <Button
                    variant="primary"
                    type="button"
                    onClick={handleClickReg}
                    >
                        Register
                    </Button>
            </div>
            }
        </div>
    );
}

export default LandingPage;