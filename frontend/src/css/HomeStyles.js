import sizes from './sizes'

export default {
  root: {
    backgroundColor: "rgb(245,247,250)"
  },
  navBar: {
    backgroundColor: "white",
    boxShadow: "5px 0px 7px 0px rgba(77,75,75,0.3)",
    minHeight: "100%",
    maxHeight: "100%"
  },
  navItem: {
    paddingLeft: "20%",
    color: "grey",
    fontWeight: "bold",
    marginTop: "5%",
    "&:hover":{
      cursor: "pointer",
      fontSize: "18px"
    }
  },
  dashBoard: {
    backgroundColor: "rgb(245,247,250)",
    padding: "60px"
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
    padding: "20px 40px 20px 40px"
  },
  personTitle: {
    fontWeight: "bold"
  },
  personTitleSubline: {
    fontWeight: "100"
  },
  headerSpan: {
    color: "transparent"
  },
  dashImage: {
    padding: "40px 30px 170px 40px",
    maxWidth: "98%"
  },
  active: {
    color: "rgb(147,210,224)!important"
  },
  areaAroundUserDetails: {
    backgroundColor: "rgb(245,247,250)",
    padding: " 0px 60px 60px 60px"
  },
  userDetails: {
    backgroundColor: "rgb(6,154,187)",
    color: "white",
    borderRadius: "7px",
    textAlign: "center",
    padding: "20px 40px 20px 40px",
    "& p": {
      fontSize: "35px",
      fontWeight: "bold"
    }
  },
  userDetailsEmail: {
    fontSize: "22px!important",
    fontWeight: "400!important"
  },
  userDetailsAge: {
    fontSize: "25px!important"
  },
  userImg: {
    borderRadius: "50%"
  }
}