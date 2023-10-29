import { useEffect, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsDownload, BsFillStopwatchFill } from "react-icons/bs";
import { FaChrome } from "react-icons/fa";
import { useParams } from "react-router-dom";
// import FormularioInscripcion from "../../Components/FormularioInscripcion/FormularioInscripcion";
import { dataCiclos } from "./dataCiclo";
import "./NuestroCiclo.css";
import Horario from "../../Components/Horario/Horario";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import PagoSlider from "../../Components/PagoSlider/PagoSlider";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import { getCiclos } from "../../redux/actions";

function CicloPage() {

  const dispatch = useDispatch()

  // const [dataActual, setDataActual] = useState([])

  const dataCliclosDb = useSelector((state) => state.ciclos)


  const url = useState(window.location.href);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);

  const { idCiclo } = useParams();
  const [show, setShow] = useState(false);

  function showHorario() {
    setShow(true);
  }

  // const ciclo = dataCiclos.find((obj) => {
  //   return obj.idUrl == idCiclo;
  // });
  const ciclo = dataCliclosDb.find((obj) => {
    return obj?.idUrl == idCiclo;
  });

  useEffect(()=> {
    dispatch(getCiclos());
  },[dispatch])

  return (
    <>
      <Header />
      <Box sx={{ margin: { xs: "64px 0 ", md: "64px 0" } }}>
        <Container maxWidth="xl" margin="auto">
          <Box padding="0px 20px 20px">
            <Grid container justifyContent="center">
              <Grid
                item
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    minHeight: {
                      xs: "300px",
                      md: "400px",
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", md: "22px" },
                      paddingTop: "20px",
                      fontWeight: "700",
                      color: "blue",
                    }}
                  >
                    {ciclo?.subtitle}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "32px", lg: "48px" },
                      fontWeight: "700",
                    }}
                  >
                    {ciclo?.title}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "16px", md: "22px" } }}>
                    {ciclo?.titleresume}
                  </Typography>
                  <a href="#formulario">
                    <Button
                      sx={{
                        borderRadius: "50px",
                        color: "#fff",
                        width: "200px",
                        background: "blue",
                        padding: "15px 0",
                        margin: { xs: "20px auto ", md: "20px 0" },
                        "&:hover": { background: " blue" },
                      }}
                    >
                      Matricúlate ahora
                    </Button>
                  </a>
                </Box>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{ display: { xs: "none", md: "inline-block" } }}
              >
                <img width="100%" height="100%" src={ciclo?.Image} alt="" />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ padding: { xs: "0px", md: "50px" } }}>
            <Grid container>
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    padding: {
                      xs: "0 10px 20px 10px",
                      md: "0 50px 20px 50px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      paddingBottom: "10px",
                      textAlign: { xs: "center", md: "left" },
                      fontSize: { xs: "24px" },
                      fontWeight: "700",
                      lineHeight: "31px",
                    }}
                  >
                    Resumen
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { xs: "left", md: "left" },
                      lineHeight: "36px",
                      fontSize: { xs: "20px" },
                      padding: "10px",
                    }}
                  >
                    {ciclo?.resumen}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", md: "left" },
                      lineHeight: { xs: "31px", md: "46px" },
                      fontSize: { xs: "24px", md: "36px" },
                      fontWeight: "800",
                      padding: { xs: "40px 0 20px 0", md: "20px 0" },
                    }}
                  >
                    Acerca del ciclo
                  </Typography>

                  <Typography
                    sx={{
                      textAlign: { xs: "center", md: "left" },
                      lineHeight: { xs: "31px", md: "31px" },
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: "700",
                    }}
                  >
                    Horario:
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", md: "left" },
                      lineHeight: { xs: "31px", md: "31px" },
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: "400",
                    }}
                  >
                    {ciclo?.horario}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    height: "100%",
                    minHeight: "400px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <Box
                    sx={{
                      width: "90%",
                      margin: "auto",
                      padding: "20px",
                      borderRadius: "10px",
                      background: "#d8f0f8",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        width: "100%",
                      }}
                    >
                      <Typography fontSize="20px" fontWeight="700">
                        <BsFillStopwatchFill
                          style={{
                            marginRight: "10px",
                            color: "blue",
                          }}
                        />
                        Duración :
                      </Typography>
                      <Typography fontSize="20px">{ciclo?.duracion}</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "90%",
                      margin: "auto",
                      padding: "20px",
                      borderRadius: "10px",
                      background: "#d8f0f8",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-evenly",
                        width: "100%",
                      }}
                    >
                      <Typography fontSize="20px" fontWeight="700">
                        <AiFillThunderbolt
                          style={{
                            marginRight: "10px",
                            color: "blue",
                          }}
                        />
                        Modalidad :
                      </Typography>
                      <Typography textAlign="center" fontSize="20px">
                        Presencial / virtual
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "90%",
                      margin: "auto",
                      padding: "20px",
                      borderRadius: "10px",
                      background: "#d8f0f8",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        width: "100%",
                      }}
                    >
                      <Typography fontSize="20px" fontWeight="700">
                        <BsDownload
                          style={{
                            marginRight: "10px",
                            color: "blue",
                          }}
                        />
                        <a
                          href={ciclo?.temario}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Descargar temario
                        </a>
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "90%",
                      margin: "auto",
                      padding: "20px",
                      borderRadius: "10px",
                      background: "#d8f0f8",
                    }}
                    onClick={() => showHorario()}
                    style={{ cursor: "pointer" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        width: "100%",
                      }}
                    >
                      <Typography fontSize="20px" fontWeight="700">
                        <FaChrome
                          style={{
                            marginRight: "10px",
                            color: "blue",
                          }}
                        />
                        Mostrar horario
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

        </Container>
      </Box>

      <Footer />
      {/* <Horario show={show} close={() => setShow(false)} ciclo={ciclo} /> */}
    </>
  );
}

export default CicloPage;
