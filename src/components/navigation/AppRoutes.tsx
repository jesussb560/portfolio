import { Box } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Landing } from "../landing/Landing"
import DrawerAppBar from "./DrawerAppBar"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <DrawerAppBar />
            <Box component="main">
                <Routes>
                    <Route path="/portfolio" element={<Landing />} />
                </Routes>
            </Box>
        </BrowserRouter>
    )
}