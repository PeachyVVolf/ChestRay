import sizes from "./sizes";

export default {
    logoText: {
        color: "rgb(174,235,249)",
        marginLeft: "4%",
        fontSize: "2em",
        marginTop: "5%",
        fontWeight: "bold"
    },
    logoButton1: {
        backgroundColor: "rgb(174,235,249)",
        color: "rgb(6,154,187)",
        fontSize: "1.7em",
        padding: "5px 15px 5px 15px",
        marginLeft: "2%",
        textDecoration: "none",
        marginLeft: "60%",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgb(6,154,187)",
            color: "white"
        },
        [sizes.down("mlg")]: {
            marginLeft: "60%"
        },
        [sizes.down("lg")]: {
            marginLeft: "50%"
        },
        [sizes.down("md")]: {
            marginLeft: "40%"
        },
        [sizes.down("sm")]: {
            marginLeft: "30%",
            fontSize: "1.5em"
        },
        [sizes.down("xs")]: {
            marginLeft: "20%",
            fontSize: "1.2em"
        }
    },
    logoButton: {
        backgroundColor: "rgb(174,235,249)",
        color: "rgb(6,154,187)",
        fontSize: "1.7em",
        padding: "5px 15px 5px 15px",
        marginLeft: "2%",
        textDecoration: "none",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgb(6,154,187)",
            color: "white"
        },
        [sizes.down("mlg")]: {
        },
        [sizes.down("lg")]: {
        },
        [sizes.down("md")]: {
        },
        [sizes.down("sm")]: {
            fontSize: "1.5em"
        },
        [sizes.down("xs")]: {
            fontSize: "1.2em"
        }
    },
    mainBody: {
        backgroundColor: "rgb(174,235,249)",
        minHeight: "740px",
        minWidth: "1900px",
        [sizes.down("mlg")]: {
            minHeight: "740px",
            minWidth: "1200px"
        },
        [sizes.down("lg")]: {
            minHeight: "740px",
            minWidth: "1000px"
        },
        [sizes.down("md")]: {
            minHeight: "740px",
            minWidth: "800px"
        },
        [sizes.down("sm")]: {
            minHeight: "740px",
            minWidth: "600px"
        },
        [sizes.down("xs")]: {
            minHeight: "740px",
            minWidth: "400px"
        }
    },
    welcomeMsg: {
        color: "rgb(6,154,187)",
        fontSize: "55px",
        paddingLeft: "35%",
        paddingTop: "10%",
        [sizes.down("mlg")]: {
            fontSize: "55px",
            paddingLeft: "30%",
            paddingTop: "10%",
        },
        [sizes.down("lg")]: {
            fontSize: "45px",
            paddingLeft: "30%",
            paddingTop: "10%",
        },
        [sizes.down("md")]: {
            fontSize: "35px",
            paddingLeft: "35%",
            paddingTop: "10%",
        },
        [sizes.down("sm")]: {
            fontSize: "35px",
            paddingLeft: "25%",
            paddingTop: "10%",
        },
        [sizes.down("xs")]: {
            fontSize: "35px",
            paddingLeft: "15%",
            paddingTop: "10%",
        }
    },
    welcomeText: {
        color: "black",
        fontSize: "25px",
        paddingLeft: "32%",
        fontWeight: "bold",
        [sizes.down("mlg")]: {
            fontSize: "25px",
            paddingLeft: "25%",
            paddingTop: "10%",
        },
        [sizes.down("lg")]: {
            fontSize: "25px",
            paddingLeft: "25%",
            paddingTop: "10%",
        },
        [sizes.down("md")]: {
            fontSize: "20px",
            paddingLeft: "25%",
            paddingTop: "10%",
        },
        [sizes.down("sm")]: {
            fontSize: "20px",
            paddingLeft: "10%",
            paddingTop: "10%",
        },
        [sizes.down("xs")]: {
            fontSize: "20px",
            paddingLeft: "15%",
            paddingTop: "10%",
        }
    }
};