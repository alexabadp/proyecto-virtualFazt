import { useEffect, useState } from "react";
import axios from "axios";

import emailjs from "emailjs-com";

import {
  Alert,
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

const opcionesCiclos = [

  { value: "Ciclo Semestral San Marcos", label: "Ciclo Semestral San Marcos" },
  { value: "Ciclo Anual UNI", label: "Ciclo Anual UNI" },
  {
    value: "Ciclo Semestral UNI",
    label: "Ciclo Semestral UNI",
  },

];

const FormularioInscripcion = () => {
  const [showErrors, setShowErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      ciclo: "",
      nombreapellido: "",
      dni: "",
      email: "",
      celular: "",
      aceptoTerminos: false,
      confirmacionDatos: false,
    },
    validationSchema: Yup.object().shape({
      ciclo: Yup.string().required("Selecciona un ciclo"),
      nombreapellido: Yup.string().required("Ingresa tus nombres y apellidos"),
      dni: Yup.string()
        .test("is-nine-digits", "Ingresa un número de 8 dígitos", (value) =>
          /^\d{8}$/.test(value)
        )
        .required("Ingresa tu dni"),
      celular: Yup.string()
        .test("is-nine-digits", "Ingresa un número de 9 dígitos", (value) =>
          /^\d{9}$/.test(value)
        )
        .required("Ingresa tu numero de celular"),
      email: Yup.string()
        .email("Debes ingresar un correo electrónico válido")
        .required("Ingresa tu email"),
      aceptoTerminos: Yup.boolean()
        .oneOf([true], "Debes confirmar este campo")
        .required("Debes confirmar este campo"),
      confirmacionDatos: Yup.boolean()
        .oneOf([true], "Debes confirmar este campo")
        .required("Debes confirmar este campo"),
    }),

    onSubmit: (data) => {
      setIsSubmitting(true);
      axios
        .post(
          "",
          data
        )
        .then((response) => {
          handleSendEmail(data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      setTimeout(() => {
        setIsSubmitting(false);
        resetForm();
        setSnackbar(true);
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

  const handleSendEmail = (data) => {
    let templateParams = {
      ciclo: data.ciclo,
      nombreapellido: data.nombreapellido,
      dni: data.dni,
      email: data.email,
      celular: data.celular,
      subject: "Nuevo Registro Landing Page",
      body_mail:
        "Tienes un nuevo alumno registrado en el Landing Page con la siguiente Informacion:",
    };

    emailjs
      .send(
        "service_42isdsd",
        "template_02tn7qs",
        templateParams,
        "PiilxYrt1ccsrUNrm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (showErrors) {
      // eslint-disable-next-line no-unused-expressions
      validateForm;
    }
  }, [showErrors, validateForm]);

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          paddingBottom: { xs: "10px", lg: "50px" },
          paddingTop: { xs: "10px", lg: "50px" },
          textAlign: "left",
        }}
      >
        <Typography
          component="h1"
          fontWeight="700"
          sx={{
            textAlign: { xs: "center", sm: "left" },
            fontSize: { xs: "26px", md: "32px" },
          }}
        >
          Inscríbete ahora
        </Typography>
        <form onSubmit={handleInputSubmit}>
          <TextField
            select
            label="Elije el ciclo que te interesa"
            fullWidth
            margin="normal"
            name="ciclo"
            defaultValue={values.ciclo}
            value={values.ciclo}
            onChange={handleChange}
            onBlur={handleBlur}
            error={(showErrors || touched.ciclo) && Boolean(errors.ciclo)}
            helperText={(showErrors || touched.ciclo) && errors.ciclo}
          >
            <MenuItem value="opcion1" disabled>
              Selecciona un Ciclo
            </MenuItem>
            {opcionesCiclos.map((e) => (
              <MenuItem key={e.value} value={e.value}>
                {e.label}
              </MenuItem>
            ))}
          </TextField>

          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={8}>
              <TextField
                label="Ingresa tus nombres y apellidos"
                fullWidth
                margin="normal"
                name="nombreapellido"
                value={values.nombreapellido}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  (showErrors || touched.nombreapellido) &&
                  Boolean(errors.nombreapellido)
                }
                helperText={
                  (showErrors || touched.nombreapellido) &&
                  errors.nombreapellido
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                type="number"
                label="DNI"
                fullWidth
                margin="normal"
                name="dni"
                value={values.dni}
                onChange={handleChange}
                onBlur={handleBlur}
                error={(showErrors || touched.dni) && Boolean(errors.dni)}
                helperText={(showErrors || touched.dni) && errors.dni}
              />
            </Grid>
          </Grid>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={8}>
              <TextField
                label="Ingresa tu correo electrónico"
                fullWidth
                margin="normal"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={(showErrors || touched.email) && Boolean(errors.email)}
                helperText={(showErrors || touched.email) && errors.email}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                type="number"
                label="Celular"
                fullWidth
                margin="normal"
                name="celular"
                value={values.celular}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  (showErrors || touched.celular) && Boolean(errors.celular)
                }
                helperText={(showErrors || touched.celular) && errors.celular}
              />
            </Grid>
          </Grid>

          <FormGroup>
            <FormControlLabel
              sx={{ padding: "10px 0", textAlign: "left" }}
              label="Acepto el uso de mis datos personales con fines comerciales."
              control={
                <Checkbox
                  name="aceptoTerminos"
                  checked={values.aceptoTerminos}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
            />

            <FormControlLabel
              sx={{ padding: "10px 0", textAlign: "left" }}
              label={
                <Typography>
                  Estoy de acuerdo con la
                  <Link
                    href="/politicaproteccion"
                    sx={{
                      textDecoration: "none",
                      color: "red",
                      paddingLeft: "5px",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    política de uso de datos de Grupo Ciencias
                  </Link>
                </Typography>
              }
              control={
                <Checkbox
                  name="confirmacionDatos"
                  checked={values.confirmacionDatos}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              onClick={(event) => event.stopPropagation()}
            />
          </FormGroup>

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
              isSubmitting ||
              !values.confirmacionDatos ||
              !values.aceptoTerminos
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
      </Container>
    </>
  );
};

export default FormularioInscripcion;
