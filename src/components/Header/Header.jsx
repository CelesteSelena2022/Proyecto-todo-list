import { AppBar, Box, Typography } from '@mui/material';


export default function Header() {
    return (
    <AppBar position="static">
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ height: '10vh', padding:"3rem"}}>
            <Typography variant="h3" component="div">
                TODO LIST
            </Typography>
        </Box>
    </AppBar>
    )
}
