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


const CicloFormUpdate =(properties)=> {

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
      idUrl: properties.data[0]?.idUrl,
      subtitle: properties.data[0]?.subtitle,
      title: properties.data[0]?.title,
      Image: properties.data[0]?.Image,
      titleresume: properties.data[0]?.titleresume,
      resumen: properties.data[0]?.resumen,
      duracion: properties.data[0]?.duracion,
      temario: properties.data[0]?.temario,
    },
    validationSchema: Yup.object().shape({
      idUrl: Yup.string().required("Ingresa la url"),
      subtitle: Yup.string().required("Ingresa el subtítulo"),
      title: Yup.string().required("Ingresa el titulo"),
      Image: Yup.string().required("Ingresa la url de la imagen"),
      titleresume: Yup.string().required("Ingresa el título del resumen"),
      resumen: Yup.string().required("Ingresa la resumen"),
      duracion: Yup.string().required("Ingresa la duración"),
      temario: Yup.string().required("Ingresa la temario"),
    }),

    onSubmit: (data) => {
      setIsSubmitting(true);
      axios
        .post(
          "http://localhost:3001/ciclo/postUpdateCiclo",
          data
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      setTimeout(() => {
        properties.refresh();
        properties.onClose();
        setIsSubmitting(false);
        resetForm();
        setSnackbar(true);
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
            label="Ingresa el idUrl"
            fullWidth
            margin="normal"
            name="idUrl"
            value={values.idUrl}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.idUrl) &&
                Boolean(errors.idUrl)
            }
            helperText={
                (showErrors || touched.idUrl) &&
                errors.idUrl
            }
          />

          <TextField
            label="Ingresa el subtitle"
            fullWidth
            margin="normal"
            name="subtitle"
            value={values.subtitle}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.subtitle) &&
                Boolean(errors.subtitle)
            }
            helperText={
                (showErrors || touched.subtitle) &&
                errors.subtitle
            }
          />

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
            label="Ingresa el Image"
            fullWidth
            margin="normal"
            name="Image"
            value={values.Image}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.Image) &&
                Boolean(errors.Image)
            }
            helperText={
                (showErrors || touched.Image) &&
                errors.Image
            }
          />  

          <TextField
            label="Ingresa el titleresume"
            fullWidth
            margin="normal"
            name="titleresume"
            value={values.titleresume}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.titleresume) &&
                Boolean(errors.titleresume)
            }
            helperText={
                (showErrors || touched.titleresume) &&
                errors.titleresume
            }
          />

          <TextField
            label="Ingresa la resumen"
            fullWidth
            margin="normal"
            name="resumen"
            value={values.resumen}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.resumen) &&
                Boolean(errors.resumen)
            }
            helperText={
                (showErrors || touched.resumen) &&
                errors.resumen
            }
          />

          <TextField
            label="Ingresa la duracion"
            fullWidth
            margin="normal"
            name="duracion"
            value={values.duracion}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.duracion) &&
                Boolean(errors.duracion)
            }
            helperText={
                (showErrors || touched.duracion) &&
                errors.duracion
            }
          />

          <TextField
            label="Ingresa el temario"
            fullWidth
            margin="normal"
            name="temario"
            value={values.temario}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
                (showErrors || touched.temario) &&
                Boolean(errors.temario)
            }
            helperText={
                (showErrors || touched.temario) &&
                errors.temario
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
            Se actualizaron los datos del ciclo
          </Alert>
        </Snackbar>
      </Box>
    </Container >
  </>
}

export default CicloFormUpdate