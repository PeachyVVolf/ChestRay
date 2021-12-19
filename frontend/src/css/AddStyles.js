import sizes from './sizes'

export default {
    bigArea: {
        backgroundColor: "rgb(245,247,250)"
    },
    mainArea: {
        backgroundColor: "rgb(174,235,249)",
        padding: "3% 7% 2% 7%",
        margin: "2%",
        textAlign: "center",
        "& h2":{
            fontWeight: "600"
        }
    },
    addArea: {
        backgroundColor: "rgb(6,154,187)",
        padding: "3% 7% 2% 7%",
    },
    navBar: {
      backgroundColor: "rgb(245,247,250)",
      minHeight: "100%",
      maxHeight: "100%"
    },
    cloudImage: {
        maxHeight: "300px"
    },
    viewReportButton: {
        marginTop: "2%",
        backgroundColor: "rgb(245,247,250)",
        color: "black",
        border: "none",
        fontSize: "30px",
        fontWeight: "bold",
        borderRadius: "0px",
        padding: "5px 40px 5px 40px",
        "&:hover":{
            backgroundColor: "rgb(6,154,187)"
        }
    }
};