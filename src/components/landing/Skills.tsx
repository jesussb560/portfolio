import { Code } from "@mui/icons-material";
import AppsIcon from '@mui/icons-material/Apps';
import { Container, Grid, Typography } from "@mui/material";
import { DockerOriginal, ExpressOriginal, GitOriginal, JunitOriginal, PostgresqlOriginal, SpringOriginal } from 'devicons-react';
import { MiniIconCard } from "../global/MiniIconCard";
import { primaryColorV2 } from "../../theme";

export const Skills = () => {
    return (
        <Container maxWidth="xl">
            <Grid container pb="25vh">
                <Grid item xs={12} md={12} lg={12} textAlign="center">
                    <Typography variant="h2" mb={2}>Habilidades técnicas</Typography>
                </Grid>
                <Grid container spacing={1} sx={{ border: `2px solid ${primaryColorV2}`, padding: 2, borderRadius: 4 }}>
                    <Grid item xs={12} sm={6} md={2} textAlign={"center"}>
                        <MiniIconCard
                            icon={<SpringOriginal size={40} />}
                            title="Spring Boot"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} textAlign={"center"}>
                        <MiniIconCard
                            icon={<PostgresqlOriginal size={40} color="whtie" />}
                            title="PostgreSQL"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} textAlign={"center"}>
                        <MiniIconCard
                            icon={<GitOriginal size={40} color="success" />}
                            title="Git"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} textAlign={"center"}>
                        <MiniIconCard
                            icon={<ExpressOriginal size={40} color="success" />}
                            title="Express"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} textAlign={"center"}>
                        <MiniIconCard
                            icon={<DockerOriginal size={40} color="success" />}
                            title="Docker"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} textAlign={"center"}>
                        <MiniIconCard
                            icon={<AppsIcon sx={{ fontSize: 40 }} color="success" />}
                            title="Microservicios"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} textAlign={"center"}>
                        <MiniIconCard
                            icon={<JunitOriginal size={40} color="success" />}
                            title="Testing"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} textAlign={"center"}>
                        <MiniIconCard
                            icon={<Code sx={{ fontSize: 40 }} color="success" />}
                            title="Rest / Soap"
                        />
                    </Grid>
                </Grid>
            </Grid >
        </Container >
    )
}