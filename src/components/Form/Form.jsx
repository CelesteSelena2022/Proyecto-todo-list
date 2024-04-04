import { TextField, Button, Box, FormControl } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl onSubmit={handleSubmit}>
            <Box display="flex" alignItems="center" justifyContent="center" marginTop="1em">
                <TextField
                    fullWidth
                    label="Ingresa una tarea"
                    variant="outlined"
                />
                <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />} sx={{ marginLeft: '1em' }}>
                    Send
                </Button>
            </Box>
        </FormControl>
    );
}
