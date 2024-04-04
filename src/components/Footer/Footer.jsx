import { Typography, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
    return (
        <footer>
            <Box sx={{padding:"1rem"}}>
                <Typography variant="body2" align="center">
                    Hecho con <FavoriteIcon fontSize="small" color="primary" sx={{ marginLeft: 1 }} />
                </Typography>
            </Box>
        </footer>
    );
}

export default Footer;

