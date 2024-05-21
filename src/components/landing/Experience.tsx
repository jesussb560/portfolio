import { Box, Button, Container, Grid, Link, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import { primaryColorV2 } from "../../theme";
import { useTranslation } from "react-i18next";


export const Experience = () => {
    const [activeStep, setActiveStep] = useState(0);
    const { t } = useTranslation();
    const steps = [
        {
            label: 'Inosoft',
            time: t("experience.steps.0.time"),
            description: t("experience.steps.0.description"),
        }
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => ((prevActiveStep + 2) > steps.length) ? prevActiveStep - 1 : prevActiveStep + 1);
    };

    return (
        <Container maxWidth="xl">
            <Grid container spacing={1} pt="20vh" pb="10vh">
                <Grid item xs={12} md={12} lg={12} textAlign="center" >
                    <Typography variant="h2" mb={2}>{t("experience.title")}</Typography>
                </Grid>
                <Grid>
                    <Box >
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((step, i) => (
                                <Step key={step.label}>
                                    <StepLabel>
                                        <Link href="https://inosoft.cl/index.html">
                                            <Typography variant="h4">{step.label}</Typography>
                                        </Link>
                                    </StepLabel>
                                    <StepContent>
                                        <Typography variant="body1" mb={2}>{step.time}</Typography>
                                        <Box sx={{ border: `2px solid ${primaryColorV2}`, padding: 2, borderRadius: 4 }}>
                                            <Typography variant="subtitle2" display={"block"}>{step.description}</Typography>
                                        </Box>
                                        {steps.length > 1 && (
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
                                        )}
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