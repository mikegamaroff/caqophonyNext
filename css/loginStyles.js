export const useStyles = (theme) => ({
  multilineColor: {
    color: "red",
  },
  label: {
    color: "white",
    fontFamily: "Raleway",
  },
  root: {
    "& > *": {
      color: "white",
      width: "100%",
      textAlign: "left",
      fontFamily: "Raleway",
    },
    "& label.Mui-focused": {
      color: "white",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "gray",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
      // margin: theme.spacing(1),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    color: "#FFFFFF",
    fontSize: "16px",
    width: "auto",
    background: "rgb(144, 144, 144, 0.075)",
    borderRadius: 4,
    border: "solid 1px rgba(144, 144, 144, 0.5)",
    display: "block",
    outline: 0,
    padding: "5px",

    width: "100%",

    // transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
  },

  field: {
    "& > *": {
      color: "white",
      width: "100%",
      textAlign: "left",
      fontFamily: "Raleway",
    },
  },

  smallField: {
    "& > *": {
      width: "100%",
      height: "25px",
      fontSize: "12px",
      textAlign: "left",
      fontFamily: "Raleway",
    },
  },
  paymailField: {
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(255, 255, 255, .5)",
    },

    "& .MuiInput-underline:before": {
      borderBottomColor: "rgb(255, 255, 255, .5)",
    },

    "& label.Mui-error": {
      color: "#FFFF00",
    },
    "& .Mui-error": {
      color: "#FFFF00",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& > *": {
      width: "100%",
      textAlign: "left",
      fontFamily: "Raleway",
      color: "white",
      borderBottomColor: "rgb(255, 255, 255, .5)",
    },
  },
  checkbox: {
    "& > *": {
      textAlign: "left",
      fontFamily: "Raleway",
      marginBottom: "-5px",
    },
  },
  checkboxWhite: {
    "& > *": {
      textAlign: "left",
      fontFamily: "Raleway",
      marginBottom: "-5px",
      color: "white",
    },
  },
  formControl: {
    //    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    //  marginTop: theme.spacing(2),
  },
  menu: {
    "& > *": {
      width: "253px",
    },
    zIndex: 1301,
  },
  button: {
    "&:hover": {
      background: "linear-gradient(45deg, #507bad 30%, #7850ad 90%)",
    },
    "&:disabled": {
      color: "gray",
      background: "linear-gradient(45deg, #cccccc 30%, #ffffff 90%)",
    },
    display: "inline-block",
    background: "linear-gradient(180deg, #139AF3 0%, #EF0A7E 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 20px",
    boxShadow: "2px 3px 1px 1px rgb(0, 0, 0, .5)",
  },
  buttonThin: {
    "&:hover": {
      background: "linear-gradient(45deg, #507bad 30%, #7850ad 90%)",
    },
    "&:disabled": {
      color: "gray",
      background: "linear-gradient(45deg, #cccccc 30%, #ffffff 90%)",
    },
    display: "inline-block",
    background: "linear-gradient(45deg, #ef5350 30%, #9c27b0 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 38,
    padding: "0 20px",
    boxShadow: "2px 3px 1px 1px rgb(0, 0, 0, .5)",
  },
  addButton: {
    "&:hover": {
      background: "linear-gradient(45deg, #e8a4da 30%, #faf4b8 90%)",
    },
    "&:disabled": {
      color: "gray",
      background: "linear-gradient(45deg, #cccccc 30%, #ffffff 90%)",
    },

    background: "linear-gradient(45deg, #ffe5fa 30%, #ffffff 90%)",
    borderRadius: 3,
    border: 0,
    color: "black",
    height: 30,
    fontSize: "0px",
    padding: "0 0px",
    boxShadow: "x 3px 1px 1px rgb(0, 0, 0, .5)",
  },
  claimButton: {
    "&:hover": {
      background: "linear-gradient(0deg, #cf0909 30%, #de8000 90%)",
    },
    "&:disabled": {
      color: "gray",
      background: "linear-gradient(45deg, #cccccc 30%, #ffffff 90%)",
    },
    marginTop: "15px",
    paddingTop: "0px",
    background: "linear-gradient(0deg, #be3205 30%, #deb100 90%)",
    borderRadius: 25,
    fontWeight: 900,
    fontSize: "20px",
    fontFamily: `Raleway, sans-serif`,
    border: 0,
    color: "white",
    height: 35,

    boxShadow: "x 3px 1px 1px rgb(0, 0, 0, .5)",
  },

  buttonSwitchSignin: {
    "&:hover": {
      background: "linear-gradient(45deg, #cccccc 30%, #ffffff 90%)",
    },
    "&:disabled": {
      color: "white",
    },

    backgroundColor: "white",
    borderRadius: 3,
    border: 0,
    color: "black",
    height: 25,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px var(--box-shadow)",
    zIndex: 0,
  },
  userStatementTable: {
    minWidth: 650,
  },
});
