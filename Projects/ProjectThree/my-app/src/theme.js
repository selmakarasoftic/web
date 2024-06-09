import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5', 
      paper: 'lightcoral' 
    },
    primary: {
      main: "#000000",
    },
    secondary: {
      main: '#201f1f',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
