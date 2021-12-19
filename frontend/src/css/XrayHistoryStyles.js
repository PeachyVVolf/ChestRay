import sizes from './sizes'

export default {
    header: {
        fontWeight: "bold"
    },
    title:{
        textAlign: "center",
        marginBottom: "3%",
        paddingTop: "1%"
    },
    tableDataButton: {
        backgroundColor: "rgb(6,154,187)",
        border: "none",
        "&:hover":{
            backgroundColor: "rgb(4,98,119)",
            color: "white"
        },
        [sizes.down("mlg")]: {
        },
        [sizes.down("lg")]: {
        },
        [sizes.down("md")]: {
        },
        [sizes.down("sm")]: {
        },
        [sizes.down("xs")]: {
            margin: "5% 0% 5% 2%",
            padding: "2% 2% 2% 2%",
            fontSize: "12px"
        }
    },
    historyBox: {
        backgroundColor: "rgb(174,235,249)!important",
        minWidth: "100%",
        minHeight: "100%"
    },
    dataBox: {
        backgroundColor: "white",
        margin: "5% 11% 5% 11%",
        padding: "2% 7% 2% 7%",
        [sizes.down("mlg")]: {
            margin: "5% 11% 5% 11%",
            padding: "2% 7% 2% 7%"
        },
        [sizes.down("lg")]: {
            margin: "5% 11% 5% 11%",
            padding: "2% 7% 2% 7%"
        },
        [sizes.down("md")]: {
            margin: "5% 11% 5% 11%",
            padding: "2% 7% 2% 7%"
        },
        [sizes.down("sm")]: {
            margin: "5% 11% 5% 11%",
            padding: "2% 7% 2% 7%"
        },
        [sizes.down("xs")]: {
            margin: "5% 2% 5% 2%",
            padding: "2% 2% 2% 2%"
        }
    },
    tableData: {
        [sizes.down("mlg")]: {
        },
        [sizes.down("lg")]: {
        },
        [sizes.down("md")]: {
        },
        [sizes.down("sm")]: {
        },
        [sizes.down("xs")]: {
            margin: "5% 0% 5% 2%"
        }
    },
    reportMainArea:{
        backgroundColor: "rgb(174,235,249)",
        margin: "1%",
        padding: "2%"
    },
    reportHeader: {
        textAlign: "center",
        fontWeight: "bold"
    }
};