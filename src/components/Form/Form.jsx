import { TextField, Button, Box, FormControl, helperText } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { useFormik } from "formik";

export default function Form() {

    const formik = useFormik({
        initialValues: {
            Itemdescription: "",
            state: false
        },
        validate: (values) => {
            const errors = {};
            if (!values.Itemdescription) {
                errors.Itemdescription =
                    "Agrega tu primera tarea para verla aquí";
            } else if (values.Itemdescription.length > 20) {
                errors.Itemdescription =
                    "El texto debe contener máximo 20 caracteres";
            } else if (values.Itemdescription.length < 5) {
                errors.Itemdescription =
                    "La tarea debe tener al menos 5 caracteres";
            } else if (
                tasks.some((task) => task.Itemdescription === values.Itemdescription)
            ) {
                errors.Itemdescription =
                    "Parece que esta tarea ya existe. Por favor, intenta con otra";
            }
            return errors;
        },
        onSubmit: (values, { resetForm }) => {
            resetForm();
        },
    });

    return (
        <FormControl component="form" onSubmit={formik.handleSubmit} noValidate autoComplete="off">
            <Box display="flex" alignItems="center" justifyContent="center" marginTop="1em">
                <TextField
                    fullWidth
                    label="Ingresa una tarea"
                    variant="outlined"
                    name="Itemdescription"
                    id="Itemdescription"
                    onChange={formik.handleChange}
                    value={formik.values.Itemdescription}
                    error={
                        formik.touched.Itemdescription &&
                        Boolean(formik.errors.Itemdescription)
                    }
                    helperText={
                        formik.touched.Itemdescription && formik.errors.Itemdescription
                    }
                />
                <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />} sx={{ marginLeft: '1em' }}>
                    Send
                </Button>
            </Box>
        </FormControl>
    );
}
