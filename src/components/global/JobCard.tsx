import { Card, CardContent, Chip, Grid, Stack, Typography } from "@mui/material";
import { primaryColor, secondaryColor } from "../../theme";
import { StepProject } from "../../types/landing.type";

export const JobCard = ({ item, i }: { item: StepProject, i: number }) => {
    return (
        <Grid mx={1} key={i}>
            <Card sx={{ backgroundColor: primaryColor, height: '100%' }}>
                <CardContent sx={{
                    padding: 0, "&:last-child": {
                        paddingBottom: 0
                    }
                }} >
                    <Grid container>
                        <Grid item xs={12} sm={8} md={9} p={2} >
                            <Grid item xs={12} md={12}>
                                <Typography variant="h3">{item.title}</Typography>
                                {/* <ArrowOutwardIcon /> */}
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">{item.workplace}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xl={12} p={2}>
                        <Grid item xs={12} mb={5} sx={{ minHeight: 150 }}>
                            <Typography variant="subtitle2">{item.description}</Typography>
                        </Grid>
                        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                            {item.technologies.map(tec => (
                                <Chip label={tec} sx={{ backgroundColor: secondaryColor, color: 'black' }} />
                            ))}
                        </Stack>
                    </Grid>

                    {/* este */}
                </CardContent>
            </Card>
        </Grid >
    )
}