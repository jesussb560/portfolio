import { Container, Grid, Typography } from "@mui/material";
import { SocialMedia } from './SocialMedia';
export const Title = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={1} justifyContent={"center"} alignItems={"center"} pt="30vh" pb={"45vh"}>
                    <Grid item xs={12} md={12} lg={12} textAlign="left">
                        <Typography variant="h1" display={"inline"}>Hola, soy </Typography>
                        <Typography variant="h1" display={"inline"} color={"secondary"}>Juan Segura Barría</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} textAlign="left">
                        <Typography variant="h1" display={"inline"}>desarrollador Fullstack</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} mt={2}>
                        <SocialMedia />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}