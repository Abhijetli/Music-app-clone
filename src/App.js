import React, { useState } from 'react';
import { LoginPage } from '../src/pages/LoginPage.jsx';
import { SearchPage } from './pages/SearchPage.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme=createTheme({
  palette:{
    mode:'dark',
  },
})

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <div>
            {loggedIn ? (
                <SearchPage onLogout={handleLogout} />
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
        </div>
      </ThemeProvider>  
    );
}

export default App;
