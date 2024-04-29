import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Landing } from "../landing/Landing"
import DrawerAppBar from "./DrawerAppBar"
import { Box } from "@mui/material"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <DrawerAppBar />
            <Box component="main">
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </Box>
        </BrowserRouter>
    )
}