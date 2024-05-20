
import ErrorIcon from '@mui/icons-material/Error';
import LanguageIcon from '@mui/icons-material/Language';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Button, Container, Grid, Typography } from "@mui/material";
import { IconCard } from "../global/IconCard";
import DownloadIcon from '@mui/icons-material/Download';
import Curriculum from '../../assets/cv-juan-jesus-segura-barria.pdf';
import CurriculumEn from '../../assets/cv-juan-jesus-segura-barria_en.pdf';
import { useTranslation } from 'react-i18next';

export const About = () => {

    const { i18n, t } = useTranslation();

    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} pt="20vh" pb={"25vh"} display={"flex"} justifyContent={"space-between"} >
                <Grid item xs={12} md={12} lg={6} textAlign="left">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h2" mb={2}>{t("about.title")}</Typography>
                        <Typography variant="body1">
                            {t("about.body")}
                        </Typography>
                        <Typography variant="body1">
                            {t("about.body_2")}
                        </Typography>
                    </Grid>
                    {/* este */}
                    <Grid item xs={12} sm={12} md={12} lg={12} mt={2} mb={{ xs: 4 }} justifyContent="flex-end">
                        <Button startIcon={<DownloadIcon />} variant="contained" color="secondary" href={i18n.language === 'es' ? Curriculum : CurriculumEn} target='_blank' size="large">{t("about.download_btn")}</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} >
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={6} lg={12} xl={6} textAlign={"center"}>
                            <IconCard
                                icon={<TimelineIcon sx={{ fontSize: 60, color: '#fff' }} />}
                                title={t("about.icons.0.title")}
                                text={t("about.icons.0.description")}
                                active
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} textAlign={"center"}>
                            <IconCard
                                icon={<ThumbUpAltIcon sx={{ fontSize: 60 }} color="secondary" />}
                                title={t("about.icons.1.title")}
                                text={t("about.icons.1.description")}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} textAlign={"center"}>
                            <IconCard
                                icon={<LanguageIcon sx={{ fontSize: 60 }} color="secondary" />}
                                title={t("about.icons.2.title")}
                                text={t("about.icons.2.description")}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={12} xl={6} textAlign={"center"}>
                            <IconCard
                                icon={<ErrorIcon sx={{ fontSize: 60 }} color="secondary" />}
                                title={t("about.icons.3.title")}
                                text={t("about.icons.3.description")}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}