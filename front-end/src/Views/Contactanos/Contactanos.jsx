import { Box, Container, Grid } from "@mui/material";
import { useEffect } from "react";
import FormularioInscripcion from "../../Components/FormularioInscripcion/FormularioInscripcion";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";

function Contactanos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Box sx={{ background: "#f9faff" }}>
        <Container maxWidth="lg">
          <Grid container marginTop="60px">
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormularioInscripcion />
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                width="100%"
                height="100%"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FContactanos%2Fcontactanospng1.webp?alt=media&token=f6a47c82-a5a9-4b8a-99ec-9312effb28d3"
                }
                alt="alternative"
                style={{ marginRight: "0px" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Contactanos;
