import { Grid } from "@mui/material"
import { primaryColor, primaryColorV2, secondaryColor } from "../../theme"
import { About } from "./About"
import { Projects } from "./Projects"
import { Title } from "./Title"
import { Experience } from "./Experience"

// const title = 'Portfolio'
export const Landing = () => {
    return (
        <>
            {/* <Helmet title={title} /> */}
            <Grid container>
                <Grid item xs={12}>
                    <Title />
                </Grid>
                <Grid item xs={12} sx={{ backgroundColor: primaryColorV2 }}>
                    <About />
                </Grid>
                <Grid item xs={12}>
                    <Experience />
                </Grid>
                <Grid item xs={12} sx={{ backgroundColor: primaryColorV2 }}>
                    <Projects />
                </Grid>
            </Grid>

        </>
    )
}