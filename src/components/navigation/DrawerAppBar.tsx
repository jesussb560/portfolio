import AssessmentIcon from "@mui/icons-material/Assessment";
import DiscountIcon from "@mui/icons-material/Discount";
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from "@mui/icons-material/Person";
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { white } from '../../theme';

const drawerWidth = 240;
const routes = [
    {
        name: "Sobre mi",
        icon: <AssessmentIcon style={{ color: white }} />,
        href: "/subscription-payments",
    },
    {
        name: "Experiencia",
        icon: <PersonIcon style={{ color: white }} />,
        href: "/users",
    },
    {
        name: "Proyectos",
        icon: <DiscountIcon style={{ color: white }} />,
        href: "/promotions",
    },
    // {
    //     name: "Puntos",
    //     icon: <FmdGoodIcon style={{ color: white }} />,
    //     href: "/spots",
    // },
    // {
    //     name: "Imagenes carrusel",
    //     icon: <ViewCarouselIcon style={{ color: white }} />,
    //     href: "/carousel-images/create",
    // },
];

const navItems = ['Sobre mi', 'Experiencia', 'Proyectos'];

export default function DrawerAppBar() {
    const navigate = useNavigate();
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
                        <ListItemButton onClick={() => navigate(route.href)}>
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
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
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