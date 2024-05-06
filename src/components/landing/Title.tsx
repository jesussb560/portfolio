import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";

export const Title = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={1} justifyContent={"center"} alignItems={"center"} pt="30vh" pb={"45vh"}>
                    <Grid item xs={12} md={12} lg={12} textAlign="left">
                        <Typography variant="h1" display={"inline"}>Hola, soy </Typography>
                        <Typography variant="h1" display={"inline"} color={"secondary"}>Juan Segura Barría</Typography>
                        {/* <Typography variant="h1" display={"inline"}>.</Typography> */}
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} textAlign="left">
                        <Typography variant="h1" display={"inline"}>desarrollador backend</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} mt={2}>
                        <Stack direction="row" spacing={1}>
                            <IconButton color="secondary">
                                <LinkedInIcon sx={{ fontSize: 35 }} />
                            </IconButton>
                            <IconButton color="secondary">
                                <GitHubIcon sx={{ fontSize: 35 }} />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}