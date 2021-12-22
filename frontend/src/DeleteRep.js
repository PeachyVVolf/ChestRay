import react from 'react';
import Button from 'react-bootstrap/esm/Button';
import { withStyles } from '@mui/styles';
import styles from './css/XrayHistoryStyles';
import { useNavigate } from 'react-router';

const DeleteRep = (props) => {
    const { classes, repID } = props;
    const navigate = useNavigate();

    const handleClickDelete = (repID) => {
        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "repID": repID
            })
        }
        fetch('http://localhost:3000/deleteRep', opts)
        .then(resp => {
            if(resp.status === 200) return resp.json();
        }).then(() => {
            alert("Report Deleted")
            navigate('/')
            navigate('/history')
        })
        .catch(error => {
            console.error("Error:", error);
        })
    }

    return(
        <div>
            <Button
                variant="primary"
                type="button"
                className={classes.tableDataButton}
                onClick={() => handleClickDelete(repID)}
                >
                    Delete Report
                </Button>
        </div>
    );
}

export default withStyles(styles)(DeleteRep);