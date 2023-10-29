import { useEffect, useState } from "react";
import Sede from "../../Components/Sede/Sede";
import { dataSede } from "./dataSede";
import SedeMap from "../../Components/Sede/SedeMap";
import { Container, Grid, Typography } from "@mui/material";
import Header from "../../Layouts/Header/Header";
import "../../Components/Sede/Sede.css";
import Footer from "../../Layouts/Footer/Footer";

const Sedes = () => {
  const [position, setPosition] = useState({
    lat: -11.940829826159977,
    lng: -77.05933774548336,
  });

  const [imagenVisible, setImagenVisible] = useState(null);

  const handleBotonClick = (imagen) => {
    setImagenVisible(imagen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid
          container
          sx={{ margin: { xs: "60px 0 0px 0", sm: "60px 0 20px 0" } }}
        >
          <Grid item xs={12} md={6}>
            <Grid container sx={{ justifyContent: "space-around" }}>
              <Grid item xs={12} padding="20px">
                <Typography fontSize="44px" fontWeight="700" textAlign="center">
                  Sedes
                </Typography>
              </Grid>

              <Grid item>
                <Sede
                  key={dataSede[0].id}
                  dataSede={dataSede[0]}
                  position={position}
                  setPosition={setPosition}
                  imagen="imagen1" //comentario
                  botonClick={handleBotonClick} //comentario
                  imagenVisible={imagenVisible}
                />

                <Sede
                  key={dataSede[1].id}
                  dataSede={dataSede[1]}
                  position={position}
                  setPosition={setPosition}
                  imagen="imagen2" //comentario
                  botonClick={handleBotonClick} //comentario
                  imagenVisible={imagenVisible}
                />

                <Sede
                  key={dataSede[2].id}
                  dataSede={dataSede[2]}
                  position={position}
                  setPosition={setPosition}
                  imagen="imagen3" //comentario
                  botonClick={handleBotonClick} //comentario
                  imagenVisible={imagenVisible}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            minHeight="500px"
            sx={{
              padding: { xs: "20px 0 15px 0", md: "50px 0 15px 0" },
              display: { xs: "none", md: "inline-block" },
            }}
          >
            <SedeMap position={position} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Sedes;
