import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, useMediaQuery } from "@mui/material";

import banner from '../../assets/banner.png'

const Heroslider = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 1200px)");
  const arrowDots = isSmallScreen ? true : isMediumScreen ? false : false;

  const dotStyles = {
    display: "inline-block",
    width: "20px", 
    height: "5px", 
    borderRadius: "2px",
    border: "1px solid gray",
    backgroundColor: "#fff", 
    margin: "5px 5px", 
  };

  const activeDotStyles = {
    ...dotStyles,
    backgroundColor: "black" 
  };

  // eslint-disable-next-line react/prop-types
  const CustomDot = ({ onClick, active }) => (
    <span
      onClick={() => onClick()}
      style={active ? activeDotStyles : dotStyles}
    />
  );

  return (
    <Box sx={{ marginTop: { xs: "64px", md: "64px" } }}>
      <Carousel
        additionalTransfrom={0}
        customTransition="transform 500ms ease-in-out" 
        // arrows={!arrowDots}
        // autoPlay
        // autoPlaySpeed={6000}
        centerMode={false}
        className=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        // infinite
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
            breakpoint: { max: 4000, min: 1024 },
            items: 1,
          },
          desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        // showDots={arrowDots} 
        // customDot={<CustomDot />}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          maxHeight="calc(100vh)"
          overflow="hidden"
        >
          <img
            // src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeroSlider%2Factualizadas%2FPORTADA%201.webp?alt=media&token=6e607e12-8e45-4ac0-982e-40daa89c9e97&_gl=1*pp18jp*_ga*Njk4NjE0MDA1LjE2ODQ3MDg2NTU.*_ga_CW55HF8NVT*MTY4NTU2OTYzNC4yMy4xLjE2ODU1Njk2NTguMC4wLjA."
            src={banner}
            alt="Descripción de la imagen"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

      </Carousel>
    </Box>
  );
};

export default Heroslider;
