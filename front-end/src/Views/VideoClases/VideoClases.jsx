import { Box, Container, Typography } from "@mui/material";

import "./VideoClases.css";

import VideoFilters from "../../Components/VideoFilters/VideoFilters";
import BannerLibrary from "../../Components/BannerLibrary/BannerLibrary";
import VideoSliders from "../../Components/VideoSliders/VideoSliders";
import { useEffect, useState } from "react";
import Header from "../../Layouts/Header/Header";
import LibraryHeader from "../../Layouts/Header/LibraryHeader";
import Footer from "../../Layouts/Footer/Footer";
// import LibraryHeader from "../../Layouts/Header/LibraryHeader";

function VideoClases() {
  const url = useState(window.location.href);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);

  return (
    <>
      <LibraryHeader />
      {/* <Header /> */}
      <Box className="contenedorGlobal">
        <BannerLibrary />

        <VideoFilters />

        <Container maxWidth="xl">
          <Typography
            sx={{
              color: "#FFF",
              fontSize: { xs: "22px", md: "32px" },
              padding: "50px 0 0 0 ",
            }}
          >
            Conoce más cursos
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "inline-block", padding: "20px  0" },
            }}
          >
            {/* <VideoContainer /> */}
          </Box>
          <VideoSliders />
        </Container>
      </Box>
      <Footer/>
    </>
  );
}

export default VideoClases;
