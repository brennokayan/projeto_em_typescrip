import { createTheme } from "@mui/material";
import { pink, blueGrey, cyan } from "@mui/material/colors";


export const LightTheme =  createTheme ({
    palette: {
        primary:  {
            main: blueGrey[600] ,
            dark: blueGrey[700] ,
            light: blueGrey[500],
            contrastText: "#ffffff",
        },
        secondary:  {
            main: cyan[700] ,
            dark: cyan[800] ,
            light: cyan[600],
            contrastText: "#fff",  
        },
        background: {
            default: "#e7e6e3",
            paper: "#fff",

        }
    },
})
