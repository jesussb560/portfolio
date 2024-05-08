import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Container, Grid, Tab, Typography } from "@mui/material";
import { useState } from "react";
import { JobStep } from "../../types/landing.type";
import { JobCard } from "../global/JobCard";
import GiraImg from '../../assets/gira-img.jpg';
import ProbImg from "../../assets/prob-img.png";
import VipureImg from "../../assets/vipure-img.jpg";
import WobeImg from "../../assets/wobe-img.png";
import InvoImg from "../../assets/invo-img.png";

const jobs: JobStep[] = [
    {
        label: 'Profesionales',
        description: 'Sistemas en los que he participado como desarrollador de manera profesional.',
        projects: [
            {
                title: 'GIRA',
                workplace: 'Inosoft',
                url: 'https://gira.com.ec/app-gira/',
                image: GiraImg,
                description: `Aplicaciónes moviles y sistema de administración que permiten recibir puntos a cambio de reciclar materiales de todo tipo. Estos puntos pueden ser utilizados como descuento en las compras en una gran cadena de supermercados en Ecuador.`,
                technologies: [
                    'Spring Boot',
                    'PostgreSQL',
                    'Git',
                    'JavaScript',
                    'Azure',
                ]
            },
            {
                title: 'Vipure',
                workplace: 'Inosoft',
                image: VipureImg,
                description: 'Aplicación móvil para el monitoreo de parametros en maquinas y procesos relacionados con el tratamiento y reúso del agua.',
                technologies: [
                    'Spring Boot',
                    'Git',
                    'Flutter',
                    'JavaScript',
                    'Azure'
                ]
            },
            {
                title: 'RAS V2',
                workplace: 'Inosoft',
                image: ProbImg,
                description: 'Sistema para administrar tareas destinadas a recursos humanos para importantes clientes y una gran cantidad de personas.',
                technologies: [
                    'NodeJs',
                    'Typescript',
                    'Git',
                    'React',
                    'Azure'
                ]
            },
            {
                title: 'Wobe',
                workplace: 'Inosoft',
                url: 'https://wobesocial.com/app/',
                image: WobeImg,
                description: 'Aplicación móvil y sistema de administración para un proyecto dedicado a ofrecer espacios de descanso para repartidores mediante una suscripción mensual en la región Metropolitana.',
                technologies: [
                    'NodeJs',
                    'Typescript',
                    'Git',
                    'React',
                    'AWS'
                ]
            }
        ]
    },
    {
        label: 'Personales',
        description: 'Sistemas desarrollados a modo de aprendizaje.',
        projects: [
            {
                title: 'Procesamiento de facturas',
                workplace: 'Personal',
                image: InvoImg,
                description: 'Sistema basado en microservicios capaz de procesar documentos tributarios electrónicos (DTE) provenientes de correos en grandes cantidades.',
                technologies: [
                    'Spring boot',
                    'PostgreSQL',
                    'Kafka',
                    'Docker',
                    'Keycloak'
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
                        A lo largo de los años, Participé en el desarrollo de multitud de proyectos para diferentes sectores e importantes clientes.
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
                                        <Grid sm={12} md={6} lg={4} mb={1}>
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