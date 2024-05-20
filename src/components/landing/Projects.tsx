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
import { useTranslation } from "react-i18next";



export const Projects = () => {

    const [value, setValue] = useState('0');
    const { t } = useTranslation();

    const jobs: JobStep[] = [
        {
            label: t("projects.tab.0"),
            description: 'Sistemas en los que he participado como desarrollador de manera profesional.',
            projects: [
                {
                    title: 'GIRA',
                    workplace: 'Inosoft',
                    url: 'https://gira.com.ec/app-gira/',
                    image: GiraImg,
                    description: t("projects.jobProjects.0"),
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
                    description: t("projects.jobProjects.1"),
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
                    description: t("projects.jobProjects.2"),
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
                    description: t("projects.jobProjects.3"),
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
            label: t("projects.tab.1"),
            description: 'Sistemas desarrollados a modo de aprendizaje.',
            projects: [
                {
                    title: 'Invoices processor',
                    workplace: 'Personal',
                    image: InvoImg,
                    url: 'https://github.com/jesussb560/invoices-processor',
                    description: t("projects.personalProjects.0"),
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

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="xl">
            <Grid container spacing={1} pt="20vh" pb={"25vh"} >
                <Grid item xs={12} md={12} lg={12} textAlign="center" >
                    <Typography variant="h2" mb={2}>{t("projects.title")}</Typography>
                    <Typography variant="body1">
                        {t("projects.subtitle")}
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