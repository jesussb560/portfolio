
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { white } from '../../theme';

import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import TimelineIcon from '@mui/icons-material/Timeline';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const routes = [
    {
        name: "Inicio",
        icon: <KeyboardDoubleArrowUpIcon style={{ color: white }} />,
        href: "#title",
    },
    {
        name: "Sobre mi",
        icon: <WavingHandIcon style={{ color: white }} />,
        href: "#about",
    },
    {
        name: "Experiencia",
        icon: <TimelineIcon style={{ color: white }} />,
        href: "#experience",
    },
    {
        name: "Proyectos",
        icon: <IntegrationInstructionsIcon style={{ color: white }} />,
        href: "#projects",
    },
];

export default function DrawerAppBar() {
    const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Divider />
            <List>
                {routes.map((route, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton href={route.href}>
                            <ListItemIcon>{route.icon}</ListItemIcon>
                            <ListItemText primary={route.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        JJDEV
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {routes.map((item) => (
                            <Button key={item.href} sx={{ color: '#fff' }} href={item.href}>
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}