import sizes from './sizes'

export default {
  navBar: {
    backgroundColor: "rgb(245,247,250)",
    minHeight: "100%",
    maxHeight: "100%"
  },
  mainArea: {
    backgroundColor: "rgb(245,247,250)"
  },
  profileHeader: {
      backgroundColor: "rgb(6,154,187)",
      maxWidth: "40%",
      color: "white",
      textAlign: "center",
      paddingTop: "1%",
      paddingBottom: "0.5%",
      marginLeft: "24%",
      marginTop: "8%"
  },
  profileArea: {
      backgroundColor: "rgb(147,210,224)",
      marginTop: "-1%",
      paddingLeft: "10%",
      paddingTop: "2%",
      paddingBottom: "2%",
      margin: "5%",
      "& h3":{
          color: "rgb(7,124,150)"
      },
      "& p":{
          backgroundColor: "white",
          maxWidth: "30%",
          padding: "1%",
          [sizes.down("mlg")]: {
            maxWidth: "30%"
          },
          [sizes.down("lg")]: {
            maxWidth: "50%"
          },
          [sizes.down("md")]: {
            maxWidth: "60%"
          },
          [sizes.down("sm")]: {
            maxWidth: "70%"
          },
          [sizes.down("xs")]: {
            maxWidth: "80%"
          }
      }
  },
  editButton: {
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
  }
};