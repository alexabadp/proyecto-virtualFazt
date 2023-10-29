import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import styles from './TablaNuestrosCiclos.module.css'

import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";
import { getCiclos } from "../../redux/actions";
// import TablaNuestrosCiclos from "./TablaNuestrosCiclos";

const opcionesCiclos = [

  { value: "Ciclo Semestral San Marcos", label: "Ciclo Semestral San Marcos" },
  { value: "Ciclo Anual UNI", label: "Ciclo Anual UNI" },
  {
    value: "Ciclo Semestral UNI",
    label: "Ciclo Semestral UNI",
  },

];

const NuestrosCiclos = () => {

  const dispatch = useDispatch()

  const [showErrors, setShowErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [refresh, setRefresh] = useState()

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
      idUrl: "",
      subtitle: "",
      title: "",
      Image: "",
      titleresume: "",
      resumen: "",
      duracion: "",
      temario: "",
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
          "http://localhost:3001/ciclo/postCiclo",
          data
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
        setRefresh(true)
      setTimeout(() => {
        setIsSubmitting(false);
        resetForm();
        setSnackbar(true);
        setRefresh(false)
      }, 2000);
    },
  });

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setShowErrors(true);

    validateForm().then(() => {
      if (isValid) {
        handleSubmit();
      }
    });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar(false);
  };


  useEffect(() => {
    if (showErrors) {
      // eslint-disable-next-line no-unused-expressions
      validateForm;
    }
  }, [showErrors, validateForm]);


  const ciclos = useSelector((state) => state.ciclos)

  useEffect(()=> {
    dispatch(getCiclos());
  },[dispatch, refresh])
  
  console.log(ciclos)

  return (
    <>
      <Typography
        component="h1"
        fontWeight="700"
        sx={{
          textAlign: { xs: "center", sm: "left" },
          fontSize: { xs: "26px", md: "32px" },
        }}
      >
        Registro Nuevo Ciclo
      </Typography>
      <div
      style={{ display: 'flex', justifyContent:'center', textAlign: "left", margin:'0 50px'}}
        // maxWidth="xl"
        // sx={{
        //   paddingBottom: { xs: "10px", lg: "50px" },
        //   paddingTop: { xs: "10px", lg: "50px" },
        //   textAlign: "left",
        //   display: "flex",
        //   justifyContent: "center"
        // }}
      >

        <Grid container columnSpacing={{ md: 2}} sx={{margin:'auto'}}>
          <Grid item xs={12} md={2}>

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


              <Button
                sx={{
                  margin: "20px 0",
                  fontSize: "20px",
                  display: "flex",
                  backgroundColor: "rgba(255,0,0,0.85)",
                  color: "rgba(255,255,255,0.85)",
                  "&:hover": {
                    backgroundColor: "red",
                    color: "white",
                  },
                }}
                variant="contained"
                type="submit"
                disabled={
                  isSubmitting
                }
              >
                {isSubmitting ? "Enviando" : "Enviar"}
              </Button>
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
                Muchas gracias, en breve te enviaremos más detalles del ciclo a tu
                correo
              </Alert>
            </Snackbar>
          </Grid>
          <Grid  item xs={12} md={10}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>idUrl</th>
                  <th>subtitle</th>
                  <th>title</th>
                  <th>Image</th>
                  <th>titleresume</th>
                  <th>resumen</th>
                  <th>duracion</th>
                  <th>temario</th>
                </tr>
              </thead>
              <tbody>
                {ciclos?.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.idUrl}</td>
                    <td>{user.subtitle}</td>
                    <td>{user.title}</td>
                    <td>{user.Image}</td>
                    <td>{user.titleresume}</td>
                    <td>{user.resumen}</td>
                    <td>{user.duracion}</td>
                    <td>{user.temario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Grid>
        </Grid>
      </div>
      {/* <TablaNuestrosCiclos dataTable={ciclos} /> */}
    </>
  );
};

export default NuestrosCiclos;
