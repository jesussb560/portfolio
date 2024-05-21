import LanguageIcon from '@mui/icons-material/Language';
import { Card, CardContent, CardMedia, Chip, Grid, Link, Stack, Tooltip, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Background from '../../assets/circle-scatter.svg';
import { primaryColor, secondaryColor } from "../../theme";
import { StepProject } from "../../types/landing.type";

export const JobCard = ({ item }: { item: StepProject }) => {

    const { t } = useTranslation();

    return (
        <Grid mx={1}>
            <Card sx={{ backgroundColor: primaryColor }}>
                <CardContent sx={{
                    padding: 0, "&:last-child": {
                        paddingBottom: 0
                    },
                    background: `url(${Background})`,
                    backgroundSize: 'cover'
                }} >
                    <Grid container p={2}>
                        <Grid item xs={10}>
                            <Typography variant="h3">{item.title}</Typography>
                        </Grid>
                        {item.url && (
                            <Grid item xs={2}>
                                <Tooltip title={t("tooltips.0")}>
                                    <Link href={item.url} target="_blank">
                                        <LanguageIcon sx={{ float: 'right', cursor: 'pointer' }} color="info" />
                                    </Link>
                                </Tooltip>
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            <Typography variant="body1">{item.workplace}</Typography>
                        </Grid>
                        <CardMedia
                            image={item.image}
                            sx={{ height: 250, width: '100%', borderRadius: 2, mt: 2 }} />
                    </Grid>
                    <Grid xl={12} p={3}>
                        <Grid item xs={12} mb={5} sx={{ minHeight: 150, maxHeight: 150, overflow: 'auto' }}>
                            <Typography variant="body1" >{item.description}</Typography>
                        </Grid>
                        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                            {item.technologies.map((tec, i) => (
                                <Chip label={tec} key={i} sx={{ backgroundColor: secondaryColor, color: 'black' }} />
                            ))}
                        </Stack>
                    </Grid>
                </CardContent>
            </Card>
        </Grid >
    )
}