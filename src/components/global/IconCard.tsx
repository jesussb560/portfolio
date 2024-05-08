import { Card, CardContent, SvgIconProps, Typography } from "@mui/material";
import { primaryColor, secondaryColor, tertiaryColor } from "../../theme";
import Background from '../../assets/circle-scatter.svg';

interface CardProps {
    icon: React.ReactElement<SvgIconProps>; // This specifies the icon as a React element with SvgIconProps
    title: string;
    text?: string;
    active?: boolean;
}

export const IconCard: React.FC<CardProps> = ({ icon, title, text, active }) => {
    return (
        <Card sx={{ backgroundColor: active ? secondaryColor : primaryColor }}>
            <CardContent sx={{
                background: `url(${Background})`,
                backgroundSize: 'cover'
            }}>
                {icon}
                <Typography variant="h4" mt={2} >{title}</Typography>
                <Typography variant="subtitle1" mt={2} sx={{ color: active ? '#fff' : tertiaryColor }}>{text}</Typography>
            </CardContent>
        </Card>
    )
}