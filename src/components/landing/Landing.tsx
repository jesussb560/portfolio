import { Grid } from "@mui/material"
import { primaryColorV2 } from "../../theme"
import { About } from "./About"
import { Contact } from "./Contact"
import { Experience } from "./Experience"
import { Projects } from "./Projects"
import { Skills } from "./Skills"
import { Title } from "./Title"
import Background from '../../assets/circle-scatter.svg';
import { Helmet } from "react-helmet"

const title = 'Portfolio'
export const Landing = () => {
    return (
        <>
            <Helmet title={title} />
            <Grid container>
                <Grid item xs={12} sx={{
                    background: `url(${Background})`,
                    backgroundSize: 'cover'
                }} id="title">
                    <Title />
                </Grid>
                <Grid item xs={12} sx={{ backgroundColor: primaryColorV2 }} id="about">
                    <About />
                </Grid>
                <Grid item xs={12} sx={{
                    background: `url(${Background})`,
                    backgroundSize: 'cover'
                }} id="experience">
                    <Experience />
                    <Skills />
                </Grid>
                <Grid item xs={12} sx={{ backgroundColor: primaryColorV2 }} id="projects">
                    <Projects />
                </Grid>
                <Grid item xs={12} sx={{
                    background: `url(${Background})`,
                    backgroundSize: 'cover'
                }} id="contact">
                    <Contact />
                </Grid>
            </Grid>

        </>
    )
}