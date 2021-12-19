import sizes from './sizes'

export default {
  root: {
    backgroundColor: "rgb(245,247,250)"
  },
  navBar: {
    backgroundColor: "rgb(245,247,250)",
    minHeight: "100%",
    maxHeight: "100%"
  },
  navItem: {
    paddingLeft: "20%",
    color: "grey",
    fontWeight: "bold",
    marginTop: "5%"
  },
  dashBoard: {
    backgroundColor: "rgb(245,247,250)",
    padding: "60px",
    [sizes.down("mlg")]: {
      fontSize: "30px!important",
    },
    [sizes.down("lg")]: {
      fontSize: "28px!important",
    },
    [sizes.down("md")]: {
      fontSize: "20px!important",
      padding: "10px 0px 10px 10px"
    },
    [sizes.down("sm")]: {
      fontSize: "18px!important",
      padding: "10px 0px 10px 10px"
    },
    [sizes.down("xs")]: {
      fontSize: "18px!important",
      padding: "10px 0px 10px 10px"
    }
  },
  title: {
    color: "rgb(174,235,249)",
    marginLeft: "21%",
    marginTop: "13%"
  },
  header: {
    backgroundColor: "rgb(6,154,187)",
    color: "white",
    borderRadius: "7px",
    textAlign: "center",
    padding: "20px 40px 20px 40px",
    [sizes.down("mlg")]: {
      fontSize: "30px!important",
    },
    [sizes.down("lg")]: {
      fontSize: "28px!important",
    },
    [sizes.down("md")]: {
      fontSize: "20px!important",
    },
    [sizes.down("sm")]: {
      fontSize: "18px!important",
    },
    [sizes.down("xs")]: {
      fontSize: "18px!important",
      padding: "20px 10px 20px 10px"
    }
  },
  personTitle: {
    fontWeight: "bold",
    [sizes.down("mlg")]: {
      fontSize: "30px!important",
    },
    [sizes.down("lg")]: {
      fontSize: "28px!important",
    },
    [sizes.down("md")]: {
      fontSize: "20px!important",
    },
    [sizes.down("sm")]: {
      fontSize: "18px!important",
    },
    [sizes.down("xs")]: {
      fontSize: "18px!important"
    }
  },
  personTitleSubline: {
    fontWeight: "100",
    [sizes.down("mlg")]: {
      fontSize: "30px!important",
    },
    [sizes.down("lg")]: {
      fontSize: "25px!important",
    },
    [sizes.down("md")]: {
      fontSize: "20px!important",
    },
    [sizes.down("sm")]: {
      fontSize: "15px!important",
    },
    [sizes.down("xs")]: {
      fontSize: "14px!important"
    }
  },
  headerSpan: {
    color: "transparent"
  },
  dashImage: {
    padding: "40px 30px 170px 40px",
    maxWidth: "98%",
    [sizes.down("mlg")]: {
      padding: "40px 30px 170px 40px"
    },
    [sizes.down("lg")]: {
      padding: "40px 30px 170px 40px"
    },
    [sizes.down("md")]: {
      padding: "40px 15px 170px 10px"
    },
    [sizes.down("sm")]: {
      padding: "30px 20px 170px 40px"
    },
    [sizes.down("xs")]: {
      padding: "20px 20px 170px 10px"
    }
  },
  active: {
    color: "rgb(147,210,224)!important"
  },
  areaAroundUserDetails: {
    backgroundColor: "rgb(245,247,250)",
    padding: " 0px 60px 60px 60px",
    [sizes.down("mlg")]: {
      padding: " 0px 60px 60px 40px"
    },
    [sizes.down("lg")]: {
      padding: " 0px 60px 60px 30px"
    },
    [sizes.down("md")]: {
      padding: " 0px 50px 60px 0px"
    },
    [sizes.down("sm")]: {
      padding: " 0px 60px 60px 0px"
    },
    [sizes.down("xs")]: {
      padding: " 0px 60px 60px 0px"
    }
  },
  userDetails: {
    backgroundColor: "rgb(6,154,187)",
    color: "white",
    borderRadius: "7px",
    textAlign: "center",
    padding: "20px 40px 20px 40px",
    "& p": {
      fontSize: "35px",
      fontWeight: "bold",
      [sizes.down("mlg")]: {
        fontSize: "35px"
      },
      [sizes.down("lg")]: {
        fontSize: "35px"
      },
      [sizes.down("md")]: {
        fontSize: "15px"
      },
      [sizes.down("sm")]: {
        fontSize: "15px"
      },
      [sizes.down("xs")]: {
        fontSize: "15px"
      }
    },
    [sizes.down("mlg")]: {
      padding: "20px 120px 20px 20px"
    },
    [sizes.down("lg")]: {
      padding: "20px 200px 20px 40px"
    },
    [sizes.down("md")]: {
      padding: "20px 70px 20px 20px"
    },
    [sizes.down("sm")]: {
      padding: "20px 110px 20px 10px"
    },
    [sizes.down("xs")]: {
      padding: "20px 90px 20px 20px"
    }
  },
  userDetailsEmail: {
    fontSize: "22px!important",
    fontWeight: "400!important",
    [sizes.down("mlg")]: {
      fontSize: "20px!important"
    },
    [sizes.down("lg")]: {
      fontSize: "18px!important"
    },
    [sizes.down("md")]: {
      fontSize: "15px!important"
    },
    [sizes.down("sm")]: {
      fontSize: "12px!important"
    },
    [sizes.down("xs")]: {
      fontSize: "9.5px!important"
    }
  },
  userDetailsAge: {
    fontSize: "25px!important",
    [sizes.down("mlg")]: {
      fontSize: "20px!important"
    },
    [sizes.down("lg")]: {
      fontSize: "18px!important"
    },
    [sizes.down("md")]: {
      fontSize: "15px!important"
    },
    [sizes.down("sm")]: {
      fontSize: "12px!important"
    },
    [sizes.down("xs")]: {
      fontSize: "9.5px!important"
    }
  },
  userImg: {
    borderRadius: "50%",
    maxWidth: "80%",
    [sizes.down("mlg")]: {
    },
    [sizes.down("lg")]: {
    },
    [sizes.down("md")]: {
    },
    [sizes.down("sm")]: {
    },
    [sizes.down("xs")]: {
    }
  }
}