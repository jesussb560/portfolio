import { IconButton } from "@mui/material";
import { useTranslation } from "react-i18next"
import TranslateIcon from '@mui/icons-material/Translate';

export const ChangeLanguage = () => {

    const { i18n } = useTranslation();

    return (
        <IconButton
            sx={{ p: 0 }}
            color="secondary"
            onClick={() => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
        >
            <TranslateIcon />
        </IconButton>
    )

}