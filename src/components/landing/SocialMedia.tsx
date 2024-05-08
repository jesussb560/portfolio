import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, Stack, Tooltip } from "@mui/material";

const linkedInUrl = 'https://www.linkedin.com/in/jesussb';
const gitHubUrl = 'https://github.com/jesussb560';
const email = 'jesus.segurab560@gmail.com';

export const SocialMedia = () => {

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(email);
    };


    return (
        <Stack direction="row" spacing={1}>
            <IconButton color="secondary" href={linkedInUrl} target='_blank'>
                <LinkedInIcon sx={{ fontSize: 35 }} />
            </IconButton>
            <IconButton color="secondary" href={gitHubUrl} target='_blank'>
                <GitHubIcon sx={{ fontSize: 35 }} />
            </IconButton>
            <IconButton color="secondary" onClick={copyToClipboard}>
                <Tooltip title="Copiar">
                    <EmailIcon sx={{ fontSize: 35 }} />
                </Tooltip>
            </IconButton>
        </Stack>
    )
}