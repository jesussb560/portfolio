import { Card, CardContent, SvgIconProps, Typography } from "@mui/material";

interface CardProps {
    icon: React.ReactElement<SvgIconProps>; // This specifies the icon as a React element with SvgIconProps
    title: string;
    text?: string;
}

export const MiniIconCard: React.FC<CardProps> = ({ icon, title, text }) => {
    return (
        <Card sx={{ backgroundColor: 'transparent' }}>
            <CardContent>
                {icon}
                <Typography variant="h5">{title}</Typography>
                <Typography variant="subtitle1">{text}</Typography>
            </CardContent>
        </Card>
    )
}