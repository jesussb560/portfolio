import { Container, Grid, Typography } from "@mui/material";
import { SocialMedia } from "./SocialMedia";

export const Contact = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={1} pt="6vh" pb={"6vh"}>
                <Grid item xs={12} >
                    <SocialMedia />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        Developed by Juan Segura Barría
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}