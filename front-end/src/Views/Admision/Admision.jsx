import escaneos from "./Assets/escaneos.png";
import prospectos from "./Assets/prospectos.png";
import solucionarios from "./Assets/solucionarios.png";
import "./Admision.css";
import { Link } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import LibraryHeader from "../../Layouts/Header/LibraryHeader";

function Admision() {
  const url = useState(window.location.href);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);
  return (
    <>
      <LibraryHeader />
      <Box sx={{ background: "#262626", minHeight: "calc(100vh - 300px)" }}>
        <Container maxWidth="xl">
          <Grid container spacing={2} sx={{ padding: "100px 0 0 0" }}>
            <Grid item xs={12} md={4}>
              <Link to="/escaneos">
                <img src={escaneos} alt="" width="100%" />
              </Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <Link to="/prospectos">
                <img src={prospectos} alt="" width="100%" />
              </Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <Link to="/solucionarios">
                <img src={solucionarios} alt="" width="100%" />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Admision;
