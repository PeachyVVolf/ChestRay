import sizes from './sizes'

export default {
  root: {
    backgroundColor: "white" 
  },
  title: {
    color: "rgb(174,235,249)",
    marginLeft: "2%"
  },
  loginTitle: {
    color: "white",
    backgroundColor: "rgb(6,154,187)",
    padding: "20px 20px 2px 20px",
    maxWidth: "40%",
    textAlign: "center",
    fontSize: "35px",
    fontWeight: "100",
    marginLeft: "26%",
    marginBottom: "-0.1%",
    [sizes.down("mlg")]: {
      fontSize: "35px",
    },
    [sizes.down("lg")]: {
      fontSize: "35px",
    },
    [sizes.down("md")]: {
      fontSize: "35px",
    },
    [sizes.down("sm")]: {
      fontSize: "25px",
    },
    [sizes.down("xs")]: {
      fontSize: "20px",
    }
  },
  loginBox: {
    backgroundColor: "rgb(174,235,249)",
    padding: "40px 40px 40px 10%",
    marginLeft: "23%",
    maxWidth: "45%",
    alignItems: "center",
    [sizes.down("mlg")]: {
      maxWidth: "45%",
      marginLeft: "23%"
    },
    [sizes.down("lg")]: {
      maxWidth: "75%",
      marginLeft: "13%"
    },
    [sizes.down("md")]: {
      maxWidth: "75%",
      marginLeft: "13%"
    },
    [sizes.down("sm")]: {
      maxWidth: "75%",
      marginLeft: "13%"
    },
    [sizes.down("xs")]: {
      maxWidth: "75%",
      marginLeft: "13%"
    }
  },
  loginTextBox: {
    marginTop: "1.5%"
  },
  loginText: {
    color: "rgb(6,129,156)",
    fontSize: "35px",
    [sizes.down("mlg")]: {
        fontSize: "30px"
    },
    [sizes.down("lg")]: {
        fontSize: "30px"
    },
    [sizes.down("md")]: {
        fontSize: "22px"
    },
    [sizes.down("sm")]: {
        fontSize: "15px"
    },
    [sizes.down("xs")]: {
        fontSize: "15px"
    }
  },
  loginTextForgot: {
    color: "rgb(6,129,156)",
    fontSize: "35px",
    marginLeft: "20%",
    "&:hover": {
      color: "rgb(3,84,102)",
      cursor: "pointer"
    },
    [sizes.down("mlg")]: {
        marginLeft: "20%",
        fontSize: "30px"
    },
    [sizes.down("lg")]: {
        marginLeft: "20%",
        fontSize: "30px"
    },
    [sizes.down("md")]: {
        marginLeft: "16%",
        fontSize: "22px"
    },
    [sizes.down("sm")]: {
        marginLeft: "20%",
        fontSize: "15px"
    },
    [sizes.down("xs")]: {
        marginLeft: "10%",
        fontSize: "15px"
    }
  },
  loginTextInput: {
    marginLeft: "2%",
    minWidth: "80%!important",
    maxWidth: "80%!important",
    paddingTop: "20px!important",
    paddingBottom: "15px!important",
    fontSize: "35px",
    borderColor: "transparent",
    [sizes.down("mlg")]: {
      paddingTop: "20px!important",
      paddingBottom: "15px!important",
      fontSize: "30px!important",
    },
    [sizes.down("lg")]: {
      paddingTop: "20px!important",
      paddingBottom: "15px!important",
      fontSize: "30px!important",
    },
    [sizes.down("md")]: {
      paddingTop: "15px!important",
      paddingBottom: "12px!important",
      fontSize: "22px!important",
    },
    [sizes.down("sm")]: {
      paddingTop: "10px!important",
      paddingBottom: "8px!important",
      fontSize: "15px!important",
    },
    [sizes.down("xs")]: {
      paddingTop: "10px!important",
      paddingBottom: "8px!important",
      fontSize: "15px!important",
    }
  },
  loginTextSubmit: {
    color: "white!important",
    backgroundColor: "rgb(6,154,187)!important",
    padding: "10px 25px 10px 25px!important",
    maxWidth: "40%!important",
    textAlign: "center!important",
    fontSize: "35px!important",
    fontWeight: "100!important",
    marginLeft: "30%!important",
    border: "none!important",
    marginTop: "5%!important",
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
  loginTextRegister: {
    color: "rgb(6,154,187)!important",
    padding: "0px 0px 17px 0px!important",
    backgroundColor: "transparent!important",
    border: "none!important",
    fontSize: "30px!important",
    "&:hover": {
      color: "rgb(3,84,102)!important",
      cursor: "pointer!important"
    },
    [sizes.down("mlg")]: {
      fontSize: "30px!important",
      padding: "0px 0px 17px 0px!important"
    },
    [sizes.down("lg")]: {
      fontSize: "27px!important",
      padding: "0px 0px 17px 0px!important"
    },
    [sizes.down("md")]: {
      fontSize: "22px!important",
      padding: "0px 0px 7px 0px!important"
    },
    [sizes.down("sm")]: {
      fontSize: "15px!important",
      padding: "0px 0px 7px 0px!important"
    },
    [sizes.down("xs")]: {
      fontSize: "12px!important",
      padding: "0px 0px 7px 0px!important"
    }
  },
  error: {
    backgroundColor: "rgb(250,175,175)!important",
    color: "rgb(250,17,17)!important",
    maxWidth: "70%!important",
    fontSize: "35px!important",
    marginLeft: "2%!important",
    padding: "10px 5px 10px 45px!important",
    [sizes.down("mlg")]: {
      fontSize: "30px!important",
      padding: "10px 5px 10px 65px!important"
    },
    [sizes.down("lg")]: {
      fontSize: "27px!important",
      padding: "10px 5px 10px 55px!important"
    },
    [sizes.down("md")]: {
      fontSize: "22px!important",
      padding: "10px 5px 10px 30px!important"
    },
    [sizes.down("sm")]: {
      fontSize: "15px!important",
      padding: "10px 5px 10px 35px!important"
    },
    [sizes.down("xs")]: {
      fontSize: "12px!important",
      padding: "10px 5px 10px 25px!important"
    }
  },
  noError: {
    backgroundColor: "rgb(174,235,249)!important"
  },
  loginTextInputAge: {
    marginLeft: "2%",
    minWidth: "20%",
    maxWidth: "20%",
    paddingTop: "20px",
    paddingBottom: "15px",
    fontSize: "35px",
    borderColor: "transparent",
    [sizes.down("mlg")]: {
      paddingTop: "20px",
      paddingBottom: "15px",
      fontSize: "30px",
    },
    [sizes.down("lg")]: {
      paddingTop: "20px",
      paddingBottom: "15px",
      fontSize: "30px",
    },
    [sizes.down("md")]: {
      paddingTop: "15px",
      paddingBottom: "12px",
      fontSize: "22px",
    },
    [sizes.down("sm")]: {
      paddingTop: "10px",
      paddingBottom: "8px",
      fontSize: "15px",
    },
    [sizes.down("xs")]: {
      paddingTop: "10px",
      paddingBottom: "8px",
      fontSize: "15px",
    }
  },
  loginTextSubmitRegister: {
    color: "white!important",
    backgroundColor: "rgb(6,154,187)!important",
    padding: "10px 25px 10px 25px!important",
    maxWidth: "40%!important",
    textAlign: "center!important",
    fontSize: "30px!important",
    fontWeight: "100!important",
    marginLeft: "24%!important",
    border: "none!important",
    marginTop: "0%!important",
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
      padding: "10px 25px 10px 10px!important"
    }
  }
};