import { Container, Grid, Typography } from "@mui/material";
import { SocialMedia } from "./SocialMedia";

export const Contact = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={1} pt="6vh" pb={"6vh"}>
                <Grid item xs={12} >
                    {/* <Typography variant="h2" mb={2}>Contacto</Typography> */}
                    <SocialMedia />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        Developed by Juan Segura Barría
                    </Typography>
                    {/* <Card sx={{ backgroundColor: secondaryColor }}>
                        <CardContent sx={{ p: 4 }}>
                            <form>
                                <Grid container={true} spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="name"
                                            name="name"
                                            label="Nombre *"
                                            type="text"
                                            variant="outlined"
                                            color="secondary"
                                            placeholder="John Doe"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="Email"
                                            name="Email"
                                            label="Correo electrónico *"
                                            type="text"
                                            variant="outlined"
                                            color="secondary"
                                            placeholder="example@email.com"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            id="body"
                                            name="body"
                                            label="Mensaje *"
                                            type="text"
                                            multiline
                                            variant="outlined"
                                            color="secondary"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            color="primary"
                                            size="large"
                                            variant="contained"
                                            sx={{ color: white, float: 'right' }}
                                            endIcon={<SendIcon />}
                                        >Enviar</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card> */}
                </Grid>
            </Grid>
        </Container>
    )
}