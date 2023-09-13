import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  Box,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { cursos } from "./dataCursos";
import "./VideoSlider.css";
import { useState } from "react";

import background from "./Assets/background.png";
import { Link } from "react-router-dom";

const VideoSliders = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 1200px)");
  const arrowDots = isSmallScreen ? true : isMediumScreen ? false : false;

  const [imageVisible, setImageVisible] = useState(null);

  //* PAGINACION
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(cursos.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = cursos.slice(startIndex, endIndex);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const dotStyles = {
    display: "inline-block",
    width: "20px" /* Ancho de la línea */,
    height: "5px" /* Alto de la línea */,
    borderRadius: "2px",
    border: "1px solid gray",
    backgroundColor: "#fff" /* Color de la línea */,
    margin: "5px 5px" /* Espacio entre las líneas */,
  };

  const activeDotStyles = {
    ...dotStyles,
    backgroundColor: "black" /* Color de la línea activa */,
  };

  // eslint-disable-next-line react/prop-types
  const CustomDot = ({ onClick, active }) => (
    <span
      onClick={() => onClick()}
      style={active ? activeDotStyles : dotStyles}
    />
  );

  const handleImageVisible = (image) => {
    if (image === imageVisible) {
      setImageVisible("");
    } else {
      setImageVisible(image);
    }
  };

  return (
    <>
      {itemsToShow.map((data) => (
        <Box key={data.name} className="containerSliders">
          <Typography
            sx={{ fontSize: { xs: "16px", md: "18px" }, color: "#fff" }}
          >
            {data.name}
          </Typography>
          <Carousel
            additionalTransfrom={0}
            customTransition="transform 500ms ease-in-out" // Transición personalizada de 500ms
            // arrows={!arrowDots}
            arrows={true}
            // autoPlay
            autoPlaySpeed={6000}
            centerMode={false}
            className="videoSliderContainer"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 1024 },
                items: 5,
                partialVisibilityGutter: 20,
              },
              desktop: {
                breakpoint: { max: 1024, min: 800 },
                items: 4,
                partialVisibilityGutter: 20,
              },
              tablet: {
                breakpoint: { max: 800, min: 464 },
                items: 2,
                partialVisibilityGutter: 20,
              },
              mobile: {
                partialVisibilityGutter: 40,
                breakpoint: { max: 464, min: 0 },
                items: 1,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            customDot={<CustomDot />}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {data.subject.map((e) => (
              <Box
                key={e.id}
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={() => handleImageVisible(e.image)}
                className="videoSliderItem"
              >
                <img
                  src={
                    imageVisible === e.image
                      ? "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Biblioteca%20GC%2FVideoClases%2Fbiblioteca%20341x192%201-100.jpg?alt=media&token=5a9841c1-dfc3-424e-9081-a0a3317c7ece"
                      : e.image
                  }
                  alt="Descripción de la imagen"
                  style={{
                    width: `${imageVisible === e.image ? "110%" : "100%"}`,
                    height: `${imageVisible === e.image ? "110%" : "100%"}`,
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
            <Box
              component={Link}
              to={data.listLink}
              target="_blank"
              key={data.name}
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={() => <Link to={data.listLink}></Link>}
              className="videoSliderItem"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Biblioteca%20GC%2FVideoClases%2Fimagen-para-redirecionar-a-la-lista-de-yt.webp?alt=media&token=69f17ec4-b6e9-4005-a986-24c07b319410"
                alt="Descripción de la imagen"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Carousel>
          {data.subject.map(
            (e) =>
              imageVisible === e.image && (
                <Box
                  key={e.id}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  padding="0 30px 0 0px"
                  position="relative"
                  borderRadius="20px"
                  overflow="hidden"
                  // style={{
                  //   boxShadow: "10px 0px 20px rgba(0, 0, 0, 0.5)", // Agrega la sombra de color negro al lado izquierdo
                  // }}
                >
                  <img
                    src={e.imageBg}
                    alt="Descripción de la imagen"
                    className="videoSliderImagen"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <CancelIcon
                    onClick={() => {
                      setImageVisible(null);
                    }}
                    sx={{
                      position: "absolute",
                      top: "10px",
                      right: "40px",
                      color: "#000",
                      fontSize: { xs: "25px", lg: "50px" },
                      background: "#fff",
                      borderRadius: "100%",
                      zIndex: "99",
                      "&:hover": {
                        cursor: "pointer",
                        color: "red",
                        background: "#fff",
                        borderRadius: "100%",
                      },
                    }}
                  />
                  <Box
                    className="shadowOverlay"
                    style={{
                      content: "",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "60%", // La mitad izquierda de la imagen
                      height: "100%",
                      background:
                        "linear-gradient(to right, rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))", // Degradado de izquierda a derecha
                      zIndex: 1,
                    }}
                  >
                    <Box
                      className={
                        e.description.length > 360
                          ? "contenidoVideoSmaller"
                          : "contenidoVideo"
                      }
                    >
                      <h2>{e.title}</h2>
                      <p>
                        {e.description}
                        <br></br>
                        <a
                          href={e.youtubeLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ver Video
                        </a>
                      </p>
                    </Box>
                  </Box>
                </Box>
              )
          )}
        </Box>
      ))}
      <Stack spacing={2} justifyContent="center" sc={{ mt: 2 }}>
        <Pagination
          count={totalPages} // Total de páginas
          page={page} // Página actual
          onChange={handleChangePage} // Función de cambio de página
          variant="outlined"
          shape="rounded"
          color="primary"
          sx={{
            padding: "20px 0",
            display: "flex",
            justifyContent: "center",
            color: "#fff",
            "& .MuiPaginationItem-root": {
              color: "#fff",
              border: "1px  solid #fff",
            },
            "& .MuiPaginationItem-page": {
              fontSize: "20px",
              width: "auto",
              padding: "10px",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              fontSize: { xs: "24px", md: "30px" },
              color: "#fff",
              padding: { xs: "12px", md: "18px" },
              background: "red",
            },
          }}
        />
      </Stack>
    </>
  );
};

export default VideoSliders;
