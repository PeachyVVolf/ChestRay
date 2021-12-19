import sizes from './sizes'

export default {
    repImage: {
        "& img":{
            maxWidth: "500px!important",
            marginTop: "40%",
            marginBottom: "40%",
            [sizes.down("mlg")]: {
                maxWidth: "350px!important"
            },
            [sizes.down("lg")]: {
                maxWidth: "290px!important"
            },
            [sizes.down("md")]: {
                maxWidth: "220px!important"
            },
            [sizes.down("sm")]: {
                maxWidth: "180px!important"
            },
            [sizes.down("xs")]: {
                maxWidth: "130px!important"
            }
        }
    },
    reportArea: {
        backgroundColor: "black",
        margin: "2%",
        maxWidth: "90%",
        paddingBottom: "40%",
        padding: "2%",
        "& h4":{
            color: "white",
            "& span":{
                marginLeft: "8%"
            }
        }
    },
    backButton: {
        color: "white!important",
        backgroundColor: "rgb(6,154,187)!important",
        padding: "10px 25px 10px 25px!important",
        maxWidth: "40%!important",
        textAlign: "center!important",
        fontSize: "35px!important",
        fontWeight: "100!important",
        border: "none!important",
        "&:hover": {
        backgroundColor: "rgb(3,84,102)!important",
        cursor: "pointer!important"
        },
        [sizes.down("mlg")]: {
        fontSize: "30px!important",
        },
        [sizes.down("lg")]: {
        fontSize: "27px!important",
        },
        [sizes.down("md")]: {
        fontSize: "22px!important",
        },
        [sizes.down("sm")]: {
        fontSize: "15px!important",
        },
        [sizes.down("xs")]: {
        fontSize: "12px!important",
        padding: "10px 25px 10px 15px!important"
        }
    },
    printButton: {
        color: "black!important",
        marginLeft: "40%",
        backgroundColor: "white!important",
        padding: "10px 25px 10px 25px!important",
        maxWidth: "40%!important",
        textAlign: "center!important",
        fontSize: "35px!important",
        fontWeight: "100!important",
        border: "none!important",
        fontWeight: "bold",
        "&:hover": {
        backgroundColor: "rgb(3,84,102)!important",
        color: "white!important",
        cursor: "pointer!important"
        },
        [sizes.down("mlg")]: {
        fontSize: "30px!important",
        },
        [sizes.down("lg")]: {
        fontSize: "27px!important",
        },
        [sizes.down("md")]: {
        fontSize: "22px!important",
        },
        [sizes.down("sm")]: {
        fontSize: "15px!important",
        },
        [sizes.down("xs")]: {
        fontSize: "12px!important",
        padding: "10px 25px 10px 15px!important"
        }
    }
};