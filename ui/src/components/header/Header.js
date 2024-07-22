import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

import DarkTheme from '../../services/themes';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={DarkTheme}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textAlign: 'center',
                            width: '100%'
                        }}
                    >
                        BEAT THE AI
                    </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
}

export default Header;