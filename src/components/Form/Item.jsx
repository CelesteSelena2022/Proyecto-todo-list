import { List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function Item() {
    // Ejemplo de datos para la lista
    const items = [
        { id: 1, text: 'Elemento 1' },
        { id: 2, text: 'Elemento 2' },
        { id: 4, text: 'Elemento 3' },
        { id: 5, text: 'Elemento 3' },
        { id: 3, text: 'Elemento 3' },
    ];

    const handleDelete = (id) => {
        console.log(`Eliminar elemento con ID ${id}`);
    };

    const handleCheck = (id) => {
        console.log(`Editar elemento con ID ${id}`);
    };

    return (
        <Box display="flex" justifyContent="center">
            <List sx={{ width: "80%" }}>
                {items.map((item) => (
                    <ListItem key={item.id} sx={{ borderBottom: "#9C9C9C solid 1px" }}>
                        <ListItemText primary={item.text} />
                        <IconButton edge="end" aria-label="editar" onClick={() => handleCheck(item.id)}>
                            <CheckBoxIcon color="primary" />
                        </IconButton>
                        <IconButton edge="end" aria-label="eliminar" onClick={() => handleDelete(item.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default Item;