import { Grid } from "@mui/material"
import { primaryColorV2 } from "../../theme"
import { About } from "./About"
import { Title } from "./Title"

// const title = 'Portfolio'
export const Landing = () => {
    return (
        <>
            {/* <Helmet title={title} /> */}
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Title />
                </Grid>
                <Grid item xs={12} sx={{ backgroundColor: primaryColorV2 }}>
                    <About />
                </Grid>

            </Grid>

        </>
    )
}