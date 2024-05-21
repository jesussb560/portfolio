import { Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { secondaryColor } from "../../theme";
import { SocialMedia } from './SocialMedia';

export const Title = () => {

    const { t } = useTranslation();

    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={1} justifyContent={"center"} alignItems={"center"} pt="30vh" pb={"45vh"}>
                    <Grid item xs={12} md={12} lg={12} textAlign="left">
                        <Typography variant="h1" display={"inline"}>
                            {t("title.greetings")} <span style={{ color: secondaryColor }}>Juan Segura Barría</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} textAlign="left">
                        <Typography variant="h2" display={"inline"}>{t("title.jobArea")}</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} mt={2}>
                        <SocialMedia />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}