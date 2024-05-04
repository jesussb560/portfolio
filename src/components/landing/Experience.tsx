import { Box, Button, Container, Grid, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import { primaryColorV2 } from "../../theme";

const steps = [
    {
        label: 'Inosoft',
        time: '2021 - presente',
        description: `Propuse y lideré la implementación de diferentes tecnologías, prácticas y arquitecturas de software para proyectos de clientes importantes, resultando en aumentos de rendimiento y productividad significativos en comparación con sistemas anteriores.`,
    },
    {
        label: '???',
        time: '',
        description: `...`,
    },
];

export const Experience = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => ((prevActiveStep + 2) > steps.length) ? prevActiveStep - 1 : prevActiveStep + 1);
    };

    return (
        <Container maxWidth="xl">
            <Grid container spacing={1} pt="20vh" pb={"25vh"} >
                <Grid item xs={12} md={12} lg={12} textAlign="center" >
                    <Typography variant="h2" mb={2} display={"inline"}>Mi </Typography>
                    <Typography variant="h2" mb={2} display={"inline"} color={"secondary"}>experiencia </Typography>
                    <Typography variant="h2" mb={2} display={"inline"}>laboral</Typography>
                    {/* <Typography variant="body1">
                        A lo largo de los años, he participado en el desarrollo de multitud de proyectos para diferentes sectores e importantes clientes.
                    </Typography> */}
                </Grid>
                <Grid xs={12}>
                    <Box sx={{}}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((step, i) => (
                                <Step key={step.label}>
                                    <StepLabel>
                                        <Typography variant="h4">{step.label}</Typography>
                                    </StepLabel>
                                    <StepContent>
                                        <Typography variant="body1" mb={2}>{step.time}</Typography>
                                        <Box sx={{ border: `2px solid ${primaryColorV2}`, padding: 2, borderRadius: 4 }}>
                                            <Typography variant="subtitle2">{step.description}</Typography>
                                        </Box>
                                        <Box sx={{ mb: 2, mt: 2 }}>
                                            <div>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={handleNext}
                                                    sx={{ mt: 1, mr: 1 }}
                                                >
                                                    {i === steps.length - 1 ? 'Volver' : 'Continuar'}
                                                </Button>
                                            </div>
                                        </Box>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}