import { Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import FilterCursos from "../Filters/FilterCursos";
import FilterUniversidades from "../Filters/FilterUniversidades";
import FilterTemas from "../Filters/FilterTemas";
import VideoTemas from "../VideoTemas/VideoTemas";

const VideoFilters = () => {
  const universidades = [
    {
      iduniversidad: "1",
      nombre_universidad: "Universidad Nacional Mayor de San Marcos",
    },
    {
      iduniversidad: "3",
      nombre_universidad: "Universidad Nacional de Ingeniería",
    },
  ];
  const [cursos, setCursos] = useState([]);
  const [temas, setTemas] = useState([]);
  const [clases, setClases] = useState([]);

  const [universidad, setUniversidad] = useState(null);
  const [curso, setCurso] = useState(null);
  const [tema, setTema] = useState(null);

  const handleChangeUniversity = (event) => {
    setUniversidad(event.target.value);
    setCurso(null);
    setTema(null);
    fetch(
      `https://grupociencias.edu.pe:8080/api.grupociencias.admin/api/cursos/universidad/clases/listar/${event.target.value}`
    )
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        const datos = JSON.parse(data);
        setCursos(datos);
      });
  };

  const handleChangeCourse = (event) => {
    setCurso(event.target.value);
    return new Promise((resolve, reject) => {
      fetch(
        "https://grupociencias.edu.pe:8080/api.grupociencias.admin/api/biblioteca/clases/tema/listar/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ idcurso: event.target.value }),
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error en la solicitud");
          }
        })
        .then((responseData) => {
          setTemas(responseData);
          resolve(responseData);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const handleChangeSubject = (event) => {
    setTema(event.target.value);
    return new Promise((resolve, reject) => {
      fetch(
        "https://grupociencias.edu.pe:8080/api.grupociencias.admin/api/biblioteca/clases/listar/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ idtema: event.target.value }),
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error en la solicitud");
          }
        })
        .then((responseData) => {
          setClases(responseData);
          resolve(responseData);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  // const UnicaEjucucion = (event = { target: { value: "2866" } }) => {
  //   return new Promise((resolve, reject) => {
  //     fetch(
  //       "https://grupociencias.edu.pe:8080/api.grupociencias.admin/api/biblioteca/clases/listar/",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ idtema: event.target.value }),
  //       }
  //     )
  //       .then((response) => {
  //         if (response.ok) {
  //           return response.json();
  //         } else {
  //           throw new Error("Error en la solicitud");
  //         }
  //       })
  //       .then((responseData) => {
  //         setClases(responseData);
  //         resolve(responseData);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // };

  // useEffect(() => {
  //   UnicaEjucucion();
  // }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Typography
          sx={{
            color: "#fff",
            padding: "20px 0",
            // fontSize: "32px",
            fontSize: { xs: "22px", md: "32px" },
            textAlign: "center",
          }}
        >
          Accede a todas nuestras clases
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <FilterUniversidades
              onChange={handleChangeUniversity}
              value={universidad}
              name="Universidad"
              data={universidades}
            />
            <FilterCursos
              onChange={handleChangeCourse}
              value={curso}
              name="Curso"
              data={cursos}
            />

            <FilterTemas
              onChange={handleChangeSubject}
              value={tema}
              name="Tema"
              data={temas}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <VideoTemas data={clases} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default VideoFilters;
