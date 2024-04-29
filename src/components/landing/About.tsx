import CodeIcon from '@mui/icons-material/Code';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ErrorIcon from '@mui/icons-material/Error';
import LanguageIcon from '@mui/icons-material/Language';
import StorageIcon from '@mui/icons-material/Storage';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Container, Grid, Typography } from "@mui/material";
import { IconCard } from "../global/IconCard";
import AppsIcon from '@mui/icons-material/Apps';
export const About = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={1} pt="20vh" pb={"25vh"}>
                <Grid item xs={12} md={12} lg={12} textAlign="center">
                    <Typography variant="h1">Sobre mi</Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12} textAlign="center">
                    <Typography variant="body1">
                        Soy un desarrollador web especializado en la creación y mantenimiento de soluciones digitales. Mi enfoque principal está en el desarrollo Backend, donde he participado en diversos proyectos para clientes nacionales y extranjeros, que van desde sitios web corporativos hasta aplicaciones móviles de gran complejidad.
                    </Typography>
                </Grid>
                <Grid item xs={12} mt={2}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={3} textAlign={"center"}>
                            <IconCard
                                icon={<CodeIcon sx={{ fontSize: 120 }} color="secondary" />}
                                title="Desarrollo Backend"
                                text="Creación de aplicaciones robustas en el lado del servidor."
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} textAlign={"center"}>
                            <IconCard
                                icon={<EnergySavingsLeafIcon sx={{ fontSize: 120 }} color="secondary" />}
                                title="Spring Boot"
                                text="Especializado en Spring Boot para desarrollo de aplicaciones Java."
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} textAlign={"center"}>
                            <IconCard
                                icon={<StorageIcon sx={{ fontSize: 120 }} color="secondary" />}
                                title="Bases de datos"
                                text="Diseño y mantención de bases de datos relacionales."
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} textAlign={"center"}>
                            <IconCard
                                icon={<AppsIcon sx={{ fontSize: 120 }} color="secondary" />}
                                title="Microservicios"
                                text="Desarrollo de aplicaciones utilizando arquitectura de microservicios."
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} textAlign={"center"}>
                            <IconCard
                                icon={<ThumbUpAltIcon sx={{ fontSize: 120 }} color="secondary" />}
                                title="Buenas practicas"
                                text="Implementación de buenas practicas dentro del código."
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} textAlign={"center"}>
                            <IconCard
                                icon={<LanguageIcon sx={{ fontSize: 120 }} color="secondary" />}
                                title="Inglés"
                                text="Poseo un nivel de inglés intermedio o B1."
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} textAlign={"center"}>
                            <IconCard
                                icon={<TimelineIcon sx={{ fontSize: 120 }} color="secondary" />}
                                title="Experiencia"
                                text="Más de dos años de experiencia en proyectos de desarrollo."
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} textAlign={"center"}>
                            <IconCard
                                icon={<ErrorIcon sx={{ fontSize: 120 }} color="secondary" />}
                                title="Resolución de errores"
                                text="Habilidad para identificar y corregir errores de forma eficiente."
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}