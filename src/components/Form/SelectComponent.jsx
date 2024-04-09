import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export default function SelectComponent({ setItems }) {

    const [filterItem, setfilterItem] = useState("all");

    const handleChange = (e) => {
        setfilterItem(e.target.value);

        let filteredItems = JSON.parse(localStorage.getItem("items"));

        if (e.target.value === "true") {
            filteredItems = filteredItems.filter((item) => item.state === true);
        } else if (e.target.value === "false") {
            filteredItems = filteredItems.filter((item) => item.state === false);
        }

        setItems(filteredItems);
    };

    return (
        <FormControl fullWidth variant="outlined" sx={{ marginTop: "1rem" }}>
            <InputLabel id="demo-simple-select-label">Todas</InputLabel>
            <Select
                label="Select"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterItem}
                onChange={handleChange}
            >
                <MenuItem value="all">Todas</MenuItem>
                <MenuItem value="true">Completas</MenuItem>
                <MenuItem value="false">Incompletas</MenuItem>
            </Select>
        </FormControl>
    )
}
