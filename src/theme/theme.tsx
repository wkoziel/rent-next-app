import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2',
      light: '#63A4FF',
      dark: '#004BA0',
    },
    secondary: {
      main: '#FF9100',
      light: '#FFC246',
      dark: '#C56200',
    },
    text: {
      primary: '#333333',
      secondary: '#757575',
      disabled: '#BDBDBD',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: 2,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },

    MuiDialogContent: {
      styleOverrides: {
        root: {
          marginTop: 8,
          marginBottom: 10,
          paddingTop: `5px !important`,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        root: {
          padding: 2,
        },
      },
    },
  },
});
