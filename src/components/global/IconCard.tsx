import { Card, CardContent, SvgIconProps, Typography } from "@mui/material";
interface CardProps {
    icon: React.ReactElement<SvgIconProps>; // This specifies the icon as a React element with SvgIconProps
    title: string;
    text?: string;
}

export const IconCard: React.FC<CardProps> = ({ icon, title, text }) => {
    return (
        <Card>
            <CardContent>
                {icon}
                <Typography variant="h4" mt={2}>{title}</Typography>
                <Typography variant="subtitle1" mt={2}>{text}</Typography>
            </CardContent>
        </Card>
    )
}