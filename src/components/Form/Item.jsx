import { List, ListItem, ListItemText, IconButton, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function Item({ itemDescription, id, deleteItem }) {

    const handleDelete = (id) => {
        console.log(`Eliminar elemento con ID ${id}`);
    };

    const handleCheck = (id) => {
        console.log(`Editar elemento con ID ${id}`);
    };

    return (
        <Box display="flex" justifyContent="center" id={id}>
            <List sx={{ width: "80%" }}>
                <ListItem sx={{ borderBottom: "#9C9C9C solid 1px" }}>
                    <ListItemText primary={itemDescription} />
                    <IconButton edge="end" aria-label="editar" onClick={() => handleCheck(id)}>
                        <CheckBoxIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="eliminar" onClick={() => deleteItem(id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            </List>
        </Box>
    );
}