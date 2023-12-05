import { Box } from "@mui/material";

import BannerLibrary from "../../Components/BannerLibrary/BannerLibrary";
import SolucionarioFilter from "../../Components/SolucionarioFilter/SolucionarioFilter";
import { useEffect, useState } from "react";
import LibraryHeader from "../../Layouts/Header/LibraryHeader";
import Footer from "../../Layouts/Footer/Footer";
// import ClavesFilters from "../../Components/ClavesFilters/ClavesFilter";

const Solucionarios = () => {
  const url = useState(window.location.href);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);
  return (
    <>
      <LibraryHeader />
      <Box sx={{ background: "#262626", minHeight: "calc(100vh - 300px)" }}>
      {/* <Box sx={{ background: "#f3f3f3", minHeight: "calc(100vh - 300px)" }}> */}
        <BannerLibrary />
        <SolucionarioFilter />
      </Box>
      <Footer />
    </>
  );
};

export default Solucionarios;
