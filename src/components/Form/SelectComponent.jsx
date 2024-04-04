import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";

export default function SelectComponent() {

    const handleChange = (event) => {
    };

    return (
        <FormControl fullWidth variant="outlined" sx={{marginTop:"1rem"}}>
            <InputLabel id="demo-simple-select-label">Todas</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=""
                label="Todas"
                onChange={handleChange}
            >
                <MenuItem value="Todas">Todas</MenuItem>
                <MenuItem value="Completas">Completas</MenuItem>
                <MenuItem value="Incompletas">Incompletas</MenuItem>
            </Select>
        </FormControl>
    )
}
