
import { useEffect } from "react";
import Heroslider from "../../Components/HeroSlider/HeroSlider";
import QuienesSomos from "../../Components/QuienesSomos/QuienesSomos";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";

function Inicio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Heroslider />
      <QuienesSomos />
      <Footer />
    </>
  );
}

export default Inicio;
