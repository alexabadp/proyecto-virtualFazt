import escaneos from "./Assets/escaneos.png";
import prospectos from "./Assets/prospectos.png";
import solucionarios from "./Assets/solucionarios.png";
import materiales from './Assets/materiales.png'
import "./Admision.css";
import { Link } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import LibraryHeader from "../../Layouts/Header/LibraryHeader";
import Footer from "../../Layouts/Footer/Footer";

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
          <Grid container spacing={2} sx={{ padding: "100px 0 0 0", minHeight: "700px" }}>
            <Grid item xs={12} md={4}>
              <Link to="/escaneos">
                {/* <img src={escaneos} alt="" width="100%" /> */}
                {/* <img src="https://images.prismic.io/aje-cms-production/Materials%26Methods_Sp.png?auto=compress,format&rect=0,0,2542,1250&w=2542&h=1250" alt="" width="100%" /> */}
                <img src={materiales} alt="" width="100%" />
              </Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <Link to="/prospectos">
                <img src={prospectos} alt="" width="100%" />
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJvusuTIGxeyZ-Cf1LYRFqjFciFrEJau_zw&usqp=CAU" alt="" width="100%" /> */}
              </Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <Link to="/solucionarios">
                <img src={solucionarios} alt="" width="100%" />
                {/* <img src="https://academiacesarvallejo.edu.pe/wp-content/uploads/2016/08/DESCARGA-DE-SOLUCIONARIOS.png" alt="" width="100%" /> */}
              </Link>
            </Grid>
          </Grid>
        </Container>
        {/* <Footer/> */}
      </Box>
    </>
  );
}

export default Admision;
