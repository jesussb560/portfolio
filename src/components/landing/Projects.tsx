import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Container, Grid, Tab, Typography } from "@mui/material";
import { useState } from "react";
import { JobStep } from "../../types/landing.type";
import { JobCard } from "../global/JobCard";

const jobs: JobStep[] = [
    {
        label: 'Profesionales',
        description: 'Sistemas en los que he participado como desarrollador de manera profesional.',
        projects: [
            {
                title: 'GIRA',
                workplace: 'Inosoft',
                description: `Aplicación móvil que permite recibir puntos a cambio de reciclar materiales de todo tipo. Estos puntos son utilizados como descuento en las compras en una gran cadena de supermercados en Ecuador.`,
                technologies: [
                    'Spring Boot',
                    'PostgreSQL',
                    'Git',
                    'JavaScript'
                ]
            },
            {
                title: 'Vipure Monitor',
                workplace: 'Inosoft',
                description: 'Aplicación móvil para el monitoreo de parametros en maquinas y procesos relacionados con el tratamiento y reúso del agua.',
                technologies: [
                    'Spring Boot',
                    'Git',
                    'Flutter'
                ]
            },
            {
                title: 'RAS 2',
                workplace: 'Inosoft',
                description: 'Sed ut perspiciatis unde em quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eo',
                technologies: [
                    'NodeJs',
                    'Git',
                    'React'
                ]
            }
        ]
    },
    {
        label: 'Personales',
        description: 'Sistemas desarrollados a modo de aprendizaje o demostración.',
        projects: [
            {
                title: 'Procesamiento de facturas',
                workplace: 'Inosoft',
                image: 'https://gira.com.ec/wp-content/uploads/2022/12/iMAGEN-TELEFONO-APP-679x1024.png',
                description: 'blabla',
                technologies: [
                    'Spring boot',
                    'PostgreSQL'
                ]
            }
        ]
    }
]

export const Projects = () => {


    const [value, setValue] = useState('0');
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="xl">
            <Grid container spacing={1} pt="20vh" pb={"25vh"} >
                <Grid item xs={12} md={12} lg={12} textAlign="center" >
                    <Typography variant="h2" mb={2}>Proyectos</Typography>
                    <Typography variant="body1">
                        A lo largo de los años, he participado en el desarrollo de multitud de proyectos para diferentes sectores e importantes clientes.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} mt={4}>
                    <TabContext value={`${value}`}>
                        <TabList onChange={handleChange} centered>
                            {jobs.map((job, i) => (
                                <Tab label={job.label} value={`${i}`} />
                            ))}
                        </TabList>
                        {jobs.map((_job, i) => (
                            <TabPanel value={`${i}`} key={i}>
                                <Grid container>
                                    {jobs[Number(value)].projects.map((project, i) => (
                                        <Grid md={12} lg={6} mb={2}>
                                            <JobCard i={i} item={project} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </TabPanel>
                        ))}
                    </TabContext>
                </Grid>
            </Grid>
        </Container>
    )
}