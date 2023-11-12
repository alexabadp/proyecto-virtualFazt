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


const SedeFormCreate =(properties)=> {

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
      id: "",
      title: "",
      address: "",
      phone: "",
      mobile: "",
      lat: "",
      lng: "",
      img: ""
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Ingresa el titulo"),
      address: Yup.string().required("Ingresa la dirección"),
      phone: Yup.string().required("Ingresa el subtítulo"),
      mobile: Yup.string().required("Ingresa el número de telefono"),
      lat: Yup.string().required("Ingresa la latitud"),
      lng: Yup.string().required("Ingresa la longitud"),
      img: Yup.string().required("Ingresa la duración"),
    }),

    onSubmit: (data) => {
      setIsSubmitting(true);
      axios
        .post(
          "http://localhost:3001/sede/postSede",
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
            label="Ingresa el title"
            fullWidth
            margin="normal"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.title) &&
                Boolean(errors.title)
            }
            helperText={
                (showErrors || touched.title) &&
                errors.title
            }
          />

          <TextField
            label="Ingresa el address"
            fullWidth
            margin="normal"
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.address) &&
                Boolean(errors.address)
            }
            helperText={
                (showErrors || touched.address) &&
                errors.address
            }
          />

          <TextField
            label="Ingresa el phone"
            fullWidth
            margin="normal"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.phone) &&
                Boolean(errors.phone)
            }
            helperText={
                (showErrors || touched.phone) &&
                errors.phone
            }
          />

          <TextField
            label="Ingresa el número de telefono"
            fullWidth
            margin="normal"
            name="mobile"
            value={values.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.mobile) &&
                Boolean(errors.mobile)
            }
            helperText={
                (showErrors || touched.mobile) &&
                errors.mobile
            }
          />

          <TextField
            label="Ingresa el lat"
            fullWidth
            margin="normal"
            name="lat"
            value={values.lat}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.lat) &&
                Boolean(errors.lat)
            }
            helperText={
                (showErrors || touched.lat) &&
                errors.lat
            }
          />

          <TextField
            label="Ingresa la lng"
            fullWidth
            margin="normal"
            name="lng"
            value={values.lng}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.lng) &&
                Boolean(errors.lng)
            }
            helperText={
                (showErrors || touched.lng) &&
                errors.lng
            }
          />

          <TextField
            label="Ingresa la img"
            fullWidth
            margin="normal"
            name="img"
            value={values.img}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.img) &&
                Boolean(errors.img)
            }
            helperText={
                (showErrors || touched.img) &&
                errors.img
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
              {isSubmitting ? "Creando" : "Crear"}
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
            Sede registrada
          </Alert>
        </Snackbar>
      </Box>
    </Container >
  </>
}

export default SedeFormCreate