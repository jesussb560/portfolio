
import ErrorIcon from '@mui/icons-material/Error';
import LanguageIcon from '@mui/icons-material/Language';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Button, Container, Grid, Typography } from "@mui/material";
import { IconCard } from "../global/IconCard";
import DownloadIcon from '@mui/icons-material/Download';

export const About = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} pt="20vh" pb={"25vh"} display={"flex"} justifyContent={"space-between"}>
                <Grid item xs={12} md={12} lg={6} textAlign="left">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h2" mb={2}>Sobre mí</Typography>
                        <Typography variant="body1">
                            Soy un desarrollador web especializado en la creación y mantenimiento de soluciones digitales. Mi enfoque principal está en el desarrollo Backend, donde he participado en diversos proyectos para clientes nacionales y extranjeros, que van desde sitios web corporativos hasta aplicaciones móviles de gran complejidad.
                        </Typography>
                    </Grid>
                    {/* este */}
                    <Grid item xs={12} sm={12} md={12} lg={12} mt={2} mb={{ xs: 4 }} justifyContent="flex-end">
                        <Button startIcon={<DownloadIcon />} variant="contained" color="secondary" size="large">Descargar CV</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} >
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={6} lg={12} xl={6} textAlign={"center"}>
                            <IconCard
                                icon={<TimelineIcon sx={{ fontSize: 60 }} color="secondary" />}
                                title="Experiencia"
                                text="Más de dos años de experiencia en proyectos de desarrollo backend."
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} textAlign={"center"}>
                            <IconCard
                                icon={<ThumbUpAltIcon sx={{ fontSize: 60 }} color="secondary" />}
                                title="Buenas practicas"
                                text="Enfocado en la implementación de buenas prácticas de programación."
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} textAlign={"center"}>
                            <IconCard
                                icon={<LanguageIcon sx={{ fontSize: 60 }} color="secondary" />}
                                title="Inglés"
                                text="Tengo un nivel de inglés intermedio, equivalente al nivel B1."
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={12} xl={6} textAlign={"center"}>
                            <IconCard
                                icon={<ErrorIcon sx={{ fontSize: 60 }} color="secondary" />}
                                title="Resolución de errores"
                                text="Habilidad para identificar y corregir errores eficientemente."
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}