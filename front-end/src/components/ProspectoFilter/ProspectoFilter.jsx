import { Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import FilterUniversidades from "../Filters/FilterUniversidades";
import FilterAnio from "../Filters/FilterAnio";
import ProspectoTable from "../ProspectoTable/ProspectoTable";

const ProspectoFilters = () => {
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

  const [anios, setAnios] = useState([]);
  const [dataTable, setDataTable] = useState([]);

  const [universidad, setUniversidad] = useState(null);
  const [anio, setAnio] = useState(null);

  const handleChangeUniversity = (event) => {
    setUniversidad(event.target.value);
    fetch(
      `https://grupociencias.edu.pe:8080/api.grupociencias.admin/api/anios/listar`
    )
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        const datos = JSON.parse(data);
        setAnios(datos.sort(compararFechas));
      });
  };

  const handleChangeAnio = (event) => {
    setAnio(event.target.value);
    return new Promise((resolve, reject) => {
      fetch(
        "https://grupociencias.edu.pe:8080/api.grupociencias.admin/api/biblioteca/prospectos/listar/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            iduniversidad: `${universidad}`,
            idanio: event.target.value,
          }),
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.text();
          } else {
            setDataTable([]);
            return Promise.reject("Error en la solicitud");
            // throw new Error("Error en la solicitud");
          }
        })
        .then((responseData) => {
          if (responseData) {
            // Si hay datos en la respuesta, intenta parsearla como JSON
            const jsonData = JSON.parse(responseData);
            setDataTable(jsonData);
            resolve(jsonData);
          } else {
            // Si la respuesta está vacía, limpia la tabla estableciendo el estado con un array vacío
            setDataTable([]);
            resolve([]); // Resuelve la promesa con un array vacío
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const compararFechas = (a, b) => {
    return a.anio.localeCompare(b.anio);
  };
  return (
    <>
      <Container maxWidth="xl">
        <Typography
          sx={{
            color: "#fff",
            padding: "20px 0",
            fontSize: { xs: "22px", md: "32px" },
            textAlign: "center",
          }}
        >
          Prospectos
        </Typography>
        <Grid container spacing={2} sx={{ padding: "0 0 100px 0" }}>
          <Grid item xs={12} md={4}>
            <FilterUniversidades
              onChange={handleChangeUniversity}
              value={universidad}
              name="Universidad"
              data={universidades}
            />
            <FilterAnio
              onChange={handleChangeAnio}
              value={anio}
              name="Año"
              data={anios}
            />
          </Grid>
          <Grid item xs={12} md={8} overflow="auto">
            <ProspectoTable dataTable={dataTable} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProspectoFilters;
