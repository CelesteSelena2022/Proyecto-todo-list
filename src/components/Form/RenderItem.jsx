import Item from "./Item";
import { Box, Typography } from "@mui/material";

export default function renderItem({ items, deleteItem }) {
    return (
        <Box>
            {items.length === 0 ? (
                <Typography>
                    "¡Excelente! No tienes ninguna tarea pendiente en este momento. Puedes comenzar a agregar tareas para mantener tu lista organizada."
                </Typography>
            ) : (
                items.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        itemDescription={item.Itemdescription}
                        state={item.state}
                        deleteItem={deleteItem}
                    />
                )) 
            )}
        </Box>
    );
}
