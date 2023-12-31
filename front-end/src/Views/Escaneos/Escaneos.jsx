import { Box } from "@mui/material";

import BannerLibrary from "../../Components/BannerLibrary/BannerLibrary";
import EscaneoFilters from "../../Components/EscaneoFilters/EscaneoFilters";
import { useEffect, useState } from "react";
// import ClavesFilters from "../../Components/ClavesFilters/ClavesFilter";
import LibraryHeader from "../../Layouts/Header/LibraryHeader";
import Footer from "../../Layouts/Footer/Footer";

const Escaneos = () => {
  const url = useState(window.location.href);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);

  return (
    <>
      <LibraryHeader />
      <Box sx={{ background: "#262626", minHeight: "calc(100vh - 300px)" }}>
        <BannerLibrary />

        <EscaneoFilters />

        {/* <ClavesFilters /> */}
      </Box>
      <Footer />
    </>
  );
};

export default Escaneos;
