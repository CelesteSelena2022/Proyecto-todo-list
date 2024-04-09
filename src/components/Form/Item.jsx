import { List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function Item({ itemDescription, id, deleteItem, handleCheck, state }) {

    return (
        <Box display="flex" justifyContent="center" id={id}>
            <List sx={{ width: "80%" }}>
                <ListItem sx={{ borderBottom: "#9C9C9C solid 1px" }}>
                    <ListItemText primary={itemDescription} sx={state ? { textDecoration: 'line-through' } : {}} />
                    <IconButton edge="end" aria-label="editar" onClick={() => handleCheck(id)}>
                        {state ? (
                            <CheckBoxIcon />
                        ) : (
                            <CheckBoxIcon color="primary" />
                        )}
                    </IconButton>
                    <IconButton edge="end" aria-label="eliminar" onClick={() => deleteItem(id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            </List>
        </Box >
    );
}