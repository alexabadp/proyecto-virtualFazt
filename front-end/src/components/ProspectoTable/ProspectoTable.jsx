import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination"; // Importar TablePagination
import Paper from "@mui/material/Paper";

import InsertLinkIcon from "@mui/icons-material/InsertLink";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
} from "@mui/material";

import background from "../../assets/background.png";
import CopyText from "../CopyText/CopyText";
import emailjs from "emailjs-com";
import { WarningAmber } from "@mui/icons-material";

export default function ProspectoTable({ dataTable }) {
  const [page, setPage] = React.useState(0); // Estado para el número de página actual
  const [rowsPerPage, setRowsPerPage] = React.useState(5); // Estado para el número de filas por página
  const [open, setOpen] = React.useState(false);
  const [nombreProspectoValue, setNombreProspectoValue] = React.useState("");
  const [snackbar, setSnackbar] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Regresar a la primera página cuando se cambie el número de filas por página
  };

  const handleSendEmail = () => {
    setLoading(true);
    let templateParams = {
      ciclo: "N/A",
      nombreapellido: "N/A",
      dni: "N/A",
      email: "N/A",
      celular: "N/A",
      subject: "Nuevo Reporte Archivo Caido",
      body_mail: `Tiene un nuevo reporte de archivo caido en Propectos, el nombre del archivo es el siguiente => ${nombreProspectoValue}.`,
    };
    emailjs
      .send(
        "service_42isdsd",
        "template_02tn7qs",
        templateParams,
        "PiilxYrt1ccsrUNrm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpen(false);
          setTimeout(() => {
            setLoading(false);
            setSnackbar(true);
          }, 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleCellAlert = (nombreProspecto) => {
    setNombreProspectoValue(nombreProspecto);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNombreEscaneoValue("");
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar(false);
  };

  return (
    <>
      {dataTable.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{ background: "#898585", borderRadius: "20px" }}
        >
          <Table
            sx={{ minWidth: 650, background: "#494747" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ color: "#fff" }}>
                  Nombre de Archivo
                </TableCell>
                {/* <TableCell align="center" sx={{ color: "#fff" }}>
                  Fecha
                </TableCell> */}
                <TableCell align="center" sx={{ color: "#fff" }}>
                  Copiar Link
                </TableCell>
                <TableCell align="center" sx={{ color: "#fff" }}>
                  Ver clase asociada
                </TableCell>
                <TableCell align="center" sx={{ color: "#fff" }}>
                  Descargar
                </TableCell>
                <TableCell align="center" sx={{ color: "#fff" }}>
                  Reportar
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataTable
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Filtrar las filas que se muestran según la página actual y el número de filas por página
                .map((row) => (
                  <TableRow
                    key={row.idprospecto}
                    sx={{
                      "& th, td": {
                        color: "#fff",
                      },
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.nombre_prospecto}
                    </TableCell>
                    {/* <TableCell align="center">{row.fecha}</TableCell> */}

                    <TableCell align="center">
                      <CopyText text={row.url_prospecto}>
                        <InsertLinkIcon sx={{ color: "#fff" }} />
                      </CopyText>
                    </TableCell>

                    <TableCell align="center">
                      <a
                        href={row.url_clase_relacionada}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <SlideshowIcon sx={{ color: "#fff" }} />
                      </a>
                    </TableCell>
                    <TableCell align="center">
                      <a
                        href={row.url_prospecto}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FileDownloadIcon sx={{ color: "#fff" }} />
                      </a>
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => handleCellAlert(row.nombre_prospecto)}
                      style={{ cursor: "pointer" }}
                    >
                      <WarningAmber sx={{ color: "red" }} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            sx={{ color: "#fff", background: "#898585" }}
            rowsPerPageOptions={[5, 10, 25]} // Opciones de tamaño de página que deseas ofrecer
            component="div"
            count={dataTable.length} // Total de filas en la tabla
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      ) : (
        <Box sx={{ width: " 100%", gridColumn: "-1 / 1" }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Biblioteca%20GC%2FVideoClases%2Fimagen-para-espera.webp?alt=media&token=797f2e20-a18f-4eaf-ab11-e4fe5a1d0f50"
            style={{ borderRadius: "10px", overflow: "hidden" }}
          />
        </Box>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Reportar archivo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Seguro que deseas reportar que no se puede acceder a este archivo o
            que no corresponde al tema indicado?.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleSendEmail} disabled={loading} autoFocus>
            {loading ? <CircularProgress size={20} /> : "Si"}
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
        >
          Muchas gracias, reportaremos el problema para descargar este archivo
          al area encargada.
        </Alert>
      </Snackbar>
    </>
  );
}
