import { Code } from "@mui/icons-material";
import AppsIcon from '@mui/icons-material/Apps';
import { Container, Grid, Typography } from "@mui/material";
import { AngularOriginal, DockerOriginal, GitOriginal, JavaOriginal, JunitOriginal, NodejsOriginal, PostgresqlOriginal, ReactOriginal, SpringOriginal, TypescriptOriginal } from 'devicons-react';
import { useTranslation } from "react-i18next";
import { primaryColorV2 } from "../../theme";
import { MiniIconCard } from "../global/MiniIconCard";

const skills = [
    {
        name: "Java",
        icon: <JavaOriginal size={40} />
    },
    {
        name: "Typescript",
        icon: <TypescriptOriginal size={40} />
    },
    {
        name: "Spring Boot",
        icon: <SpringOriginal size={40} />
    },
    {
        name: "NodeJs",
        icon: <NodejsOriginal size={40} />
    },
    {
        name: "React",
        icon: <ReactOriginal size={40} />
    },
    {
        name: "Angular",
        icon: <AngularOriginal size={40} />
    },
    {
        name: "PostgreSQL",
        icon: <PostgresqlOriginal size={40} />
    },
    {
        name: "Git",
        icon: <GitOriginal size={40} />
    },
    {
        name: "Docker",
        icon: <DockerOriginal size={40} />
    },
    {
        name: "Testing",
        icon: <JunitOriginal size={40} />
    },
    {
        name: "Microservices",
        icon: <AppsIcon sx={{ fontSize: 40 }} color="success" />
    },
    {
        name: "Rest",
        icon: <Code sx={{ fontSize: 40 }} color="success" />
    }
]

export const Skills = () => {
    const { t } = useTranslation();
    return (
        <Container maxWidth="xl">
            <Grid container pb="25vh">
                <Grid item xs={12} md={12} lg={12} mb={2} textAlign="center">
                    <Typography variant="h2" mb={2}>{t("skills.title")}</Typography>
                    <Typography variant="body1">
                        {t("skills.subtitle")}
                    </Typography>
                </Grid>
                <Grid container spacing={1} sx={{ border: `2px solid ${primaryColorV2}`, padding: 2, borderRadius: 4 }}>
                    {skills.map(skill => (
                        <Grid item sm={6} md={2} textAlign={"center"} key={skill.name}>
                            <MiniIconCard
                                icon={skill.icon}
                                title={skill.name}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid >
        </Container >
    )
}