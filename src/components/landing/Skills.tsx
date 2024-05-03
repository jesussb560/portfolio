import { Container, Grid, Typography } from "@mui/material"

export const Skills = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} pt="20vh" pb={"25vh"}>
                <Grid item xs={12} md={12} lg={12} textAlign="left">
                    <Typography variant="h2" mb={2}>Habilidades técnicas</Typography>
                    <Typography variant="body1">
                        A lo largo de los años, he participado en el desarrollo de multitud de proyectos para diferentes sectores.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </Container>
    )
}