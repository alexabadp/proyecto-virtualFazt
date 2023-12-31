import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import {
  Grid,
  Button,
  Container,
  TextField,
  Typography,
  Box,
} from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";

import ImageLogin from "../../assets/ImageLogin.png";

const Signup = () => {
  const [showErrors, setShowErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required("Ingresa tu contraseña"),
      name: Yup.string().required("Ingresa un nombre de usuario"),
      email: Yup.string()
        .email("Debes ingresar un correo electrónico válido")
        .required("Ingresa tu correo electrónico"),
    }),

    onSubmit: (data) => {
      setIsSubmitting(true);
      axios
        .post("http://localhost:3001/user/signup", data)
        .then((response) => {
          window.location.href = "/";
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsSubmitting(false);
          resetForm();
        });
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

  useEffect(() => {
    if (showErrors) {
      validateForm;
    }
  }, [showErrors, validateForm]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#16191c",
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={5}>
            <img width="100%" height="100%" src={ImageLogin} alt="" />
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              display: "inline-block",
              background: "#cec8c8",
            }}
          >
            <Typography
              component="h1"
              fontWeight="700"
              sx={{
                textAlign: "center",
                padding: "20px 0",
                fontSize: { xs: "26px", md: "32px" },
                whiteSpace: "nowrap",
                color: "#000 ",
              }}
            >
              BIENVENIDO A VIRTUAL FAST
            </Typography>
            <form onSubmit={handleInputSubmit}>
              <Container maxWidth="lg">
                <Box>
                  <Typography sx={{ paddingTop: "20px" }}>
                    Nombre de Usuario
                  </Typography>
                  <TextField
                    label="Nombre de usuario"
                    fullWidth
                    margin="normal"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={(showErrors || touched.name) && Boolean(errors.name)}
                    helperText={(showErrors || touched.name) && errors.name}
                  />
                </Box>
                <Box>
                  <Typography sx={{ paddingTop: "20px" }}>Email</Typography>
                  <TextField
                    label="Correo electrónico"
                    fullWidth
                    margin="normal"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      (showErrors || touched.email) && Boolean(errors.email)
                    }
                    helperText={(showErrors || touched.email) && errors.email}
                  />
                </Box>

                <Box>
                  <Typography sx={{ paddingTop: "20px" }}>
                    Contraseña
                  </Typography>
                  <TextField
                    label="password"
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
                      (showErrors || touched.password) && errors.password
                    }
                  />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    sx={{
                      margin: "50px 0",
                      fontSize: "20px",
                      display: "flex",
                      width: "100%",
                      backgroundColor: "rgba(255,0,0,0.85)",
                      borderRadius: "10px",
                      background:
                        "var(--PRIMARY, linear-gradient(180deg, #3969FC 0%, rgba(42, 73, 255, 10.00) 100%))",
                      color: "rgba(255,255,255,0.85)",
                      "&:hover": {
                        backgroundColor: "red",
                        color: "white",
                      },
                    }}
                    variant="contained"
                    type="submit"
                  >
                    REGISTRARME
                  </Button>
                </Box>
              </Container>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Signup;
