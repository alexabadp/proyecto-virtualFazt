import { useState } from "react";
import axios from 'axios';
import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
  Typography
} from "@mui/material";
import  {useFormik} from 'formik'
import * as Yup from 'yup';


const UserFormUpdate =(properties)=> {

  console.log("id de usuario en modal",properties.id)
  const [showErrors, setShowErrors] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [snackbar, setSnackbar] = useState(false);

  const {
    handleChange,
    values,
    errors,
    handleBlur,
    touched,
    validateForm,
    isValid,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
        id: properties.id,
        name: properties.data[0]?.name,
        email: properties.data[0]?.email,
        password: properties.data[0]?.password,
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Ingresa el nombre"),
        email: Yup.string().required("Ingresa el email"),
        password: Yup.string().required("Ingresa el password"),
    }),

    onSubmit: (data) => {
      setIsSubmitting(true);
      axios
        .post(
          "http://localhost:3001/user/postUpdateUsuario",
          data
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
        
        setSnackbar(true);
      setTimeout(() => {
        properties.refresh();
        properties.onClose();
        setIsSubmitting(false);
        resetForm();
        setSnackbar(false);
      }, 2000);
    },
  });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar(false);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setShowErrors(true);

    validateForm().then(() => {
      if (isValid) {
        handleSubmit();
      }
    });
  };

  return <>
    <Container maxWidth='sm' sx={{background:'#fff', padding: '10px 0', borderRadius: '20px'}}>
      <Box item xs={6} md={6}>
        <Typography sx={{fontWeight:'600', textAlign:'center', fontSize: '24px'}}>Formulario de Usuario</Typography>
        <form onSubmit={handleInputSubmit}>

          <TextField
            label="Ingresa el name"
            fullWidth
            margin="normal"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.name) &&
                Boolean(errors.name)
            }
            helperText={
                (showErrors || touched.name) &&
                errors.name
            }
          />

          <TextField
            label="Ingresa el email"
            fullWidth
            margin="normal"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.email) &&
                Boolean(errors.email)
            }
            helperText={
                (showErrors || touched.email) &&
                errors.email
            }
          />

          <TextField
            label="Ingresa el password"
            fullWidth
            margin="normal"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.password) &&
                Boolean(errors.password)
            }
            helperText={
                (showErrors || touched.password) &&
                errors.password
            }
            />

          <div style={{display: 'flex', justifyContent:'space-between'}}>
              <Button
                sx={{
                  margin: "20px 0",
                  fontSize: "20px",
                  display: "flex",
              
                }}
                color="success"
                variant="contained"
                type="submit"
                disabled={
                  isSubmitting
                }
              >
                {isSubmitting ? "Actualizando" : "Actualizar"}
              </Button>
              <Button
                sx={{
                  margin: "20px 0",
                  fontSize: "20px",
                  display: "flex",
              
                }}
                onClick={properties.onClose}
                color="error"
                variant="contained"
                type="button"
                disabled={
                  isSubmitting
                }
              >
                {isSubmitting ? "Cerrar" : "Cerrar"}
              </Button>

          </div>
        </form>

        <Snackbar
          open={snackbar}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            variant="filled"
          >
            Se actualizaron los datos del usuario
          </Alert>
        </Snackbar>
      </Box>
    </Container >
  </>
}

export default UserFormUpdate