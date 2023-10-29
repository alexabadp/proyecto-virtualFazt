import React, { useEffect, useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import "./Sede.css";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CopyText from "../CopyText/CopyText";
import SedeMap from "./SedeMap";

const Sede = ({
  dataSede,
  position,
  setPosition,
  imagen,
  botonClick,
  imagenVisible,
}) => {
  const [hideImage, setHideImage] = useState(false);

  const ShowSede = (currentlat, currentlng) => {
    setHideImage(!hideImage);
    setPosition({ ...position, lat: currentlat, lng: currentlng });
    handleClick();
  };

  const [verSede, setVerSede] = useState(false);

  const elementRef = useRef(null);

  useEffect(() => {
    if (imagenVisible === imagen) {
      setHideImage(true);
      setVerSede(true);

      const yOffset = -50; // Ajuste de 20 píxeles hacia arriba
      const element = elementRef.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y });
    } else {
      setHideImage(false);
      setVerSede(false);
    }
  }, [imagenVisible, imagen]);

  const handleClick = () => {
    !hideImage ? botonClick(imagen) : botonClick("");
    if (hideImage) {
      window.scrollTo({ top: 100 });
    }
  };

  console.log("position", position);
  return (
    <>
      <Container maxWidth="xl" ref={elementRef}>
        <Box padding="20px 0px" textAlign="left">
          <div className="sede">{dataSede.title}</div>
          <CopyText text={dataSede.address}>
            <Grid
              container
              sx={{ color: "#000", padding: "0px 0 10px 0", textAlign: "left" }}
            >
              <Grid item xs={9} textAlign="left">
                {dataSede.address}
              </Grid>
              <Grid item xs={1} textAlign="right" sx={{ margin: "auto" }}>
                <FaCopy
                  style={{
                    marginRight: "5px",
                    fontSize: "0.8rem",
                  }}
                />
              </Grid>
              <Grid item xs={2} sx={{ margin: "auto" }}>
                <Typography textTransform="none" textAlign="left">
                  copiar
                </Typography>
              </Grid>
            </Grid>
          </CopyText>

          <Typography>Tel: {dataSede.phone}</Typography>
          <Typography>Whatsapp: {dataSede.mobile}</Typography>

          <div className="sede-button">
            <Button
              className="sede-look"
              variant="contained"
              sx={{
                backgroundColor: "blue",
                color: "rgba(255,255,255,0.85)",
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "blue",
                  color: "white",
                },
              }}
              onClick={() => {
                ShowSede(dataSede.lat, dataSede.lng);
              }}
            >
              <Box> {verSede ? "Ocultar" : "Ver Sede"}</Box>
            </Button>

            {/* SOLO PARA MOBILE */}

            {imagenVisible === imagen ? (
              <Box padding="10px 0px">
                <img
                  src={dataSede.img}
                  className="navbar-logo"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="navbar-logo"
                />
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    minHeight="500px"
                    sx={{
                      padding: { xs: "20px 0 15px 0", md: "50px 0 15px 0" },
                      display: { xs: "inline-block", md: "none" },
                    }}
                  >
                    <SedeMap position={position} />
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <Box></Box>
            )}
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Sede;

// Sede.propTypes = {
//   dataSede: React.ReactNode,
//   position: React.ReactNode,
//   setPosition: React.ReactNode,
//   imagen: React.ReactNode,
//   botonClick: React.ReactNode,
//   imagenVisible: React.ReactNode,
// };
