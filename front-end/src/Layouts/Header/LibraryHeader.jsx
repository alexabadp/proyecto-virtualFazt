import { useState } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";

import biblioteca from "../../assets/biblioteca-free.png";
import imageHeader from "../../assets/ImageLogin.png"

function LibraryHeader() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ background: "#000", color: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", height: "64px" }}
        >
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              size="small"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* <MenuItem
                sx={{ "&:hover": { backgroundColor: "red", color: "#fff" } }}
                component={Link}
                to="/"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Inicio</Typography>
              </MenuItem> */}
              <MenuItem
                sx={{ "&:hover": { backgroundColor: "red", color: "#fff" } }}
                component={Link}
                // to="/videoclases"
                to="/inicio"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Inicio</Typography>
              </MenuItem>
              <MenuItem
                sx={{ "&:hover": { backgroundColor: "red", color: "#fff" } }}
                component={Link}
                // to="/videoclases"
                to="videoclases"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Videoclases</Typography>
              </MenuItem>

              <MenuItem
                sx={{ "&:hover": { backgroundColor: "red", color: "#fff" } }}
                component={Link}
                to="/admision"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Admisión</Typography>
              </MenuItem>
              {/* <MenuItem
                sx={{ "&:hover": { backgroundColor: "red", color: "#fff" } }}
                component={Link}
                to="/materiales"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Materiales</Typography>
              </MenuItem> */}
            </Menu>
          </Box>

          <Button
            className="logoBibliotecaFree"
            component={Link}
            to="/videoclases"
            color="inherit"
            sx={{ width: { xs: "200px", lg: "400px" }, fontSize:'30px', textTransform: 'none' }}
          >
            {/* <img
              // className="logoBibliotecaFree"
              width="100%"
              // height="40px"
              // src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeader%2Fwebp%2Flogo-small.webp?alt=media&token=9b00a52e-4f75-40d2-aa34-35ba358bf35c"
              src={biblioteca}
              alt=""
            /> */}
            Virtual<strong>Fast</strong>
          </Button>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                gap: "10px",
                margin: " 0 20px",
                color: "#000",
              }}
            >
              {/* <Button
                sx={{
                  color: "#fff",
                  "&:hover": { backgroundColor: "red", color: "#fff" },
                }}
                component={Link}
                to="/"
                onClick={handleCloseNavMenu}
              >
                <Typography textTransform="none" textAlign="center">
                  Inicio
                </Typography>
              </Button> */}
              <Button
                sx={{
                  color: "#fff",
                  "&:hover": { backgroundColor: "red", color: "#fff" },
                }}
                component={Link}
                // to="/videoclases"
                to="/inicio"
                onClick={handleCloseNavMenu}
              >
                <Typography textTransform="none" textAlign="center">
                  Inicio
                </Typography>
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  "&:hover": { backgroundColor: "red", color: "#fff" },
                }}
                component={Link}
                // to="/videoclases"
                to="/"
                onClick={handleCloseNavMenu}
              >
                <Typography textTransform="none" textAlign="center">
                  Videoclases
                </Typography>
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  "&:hover": { backgroundColor: "red", color: "#fff" },
                }}
                component={Link}
                to="/admision"
                onClick={handleCloseNavMenu}
              >
                <Typography textTransform="none" textAlign="center">
                  Admisión
                </Typography>
              </Button>
              {/* <Button
                sx={{
                  color: "#fff",
                  "&:hover": { backgroundColor: "red", color: "#fff" },
                }}
                component={Link}
                to="/materiales"
                onClick={handleCloseNavMenu}
              >
                <Typography textTransform="none" textAlign="center">
                  Materiales
                </Typography>
              </Button> */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                sx={{
                  padding: { xs: "8px", md: "12px" },
                  backgroundColor: "rgba(255,0,0,0.85)",
                  color: "rgba(255,255,255,0.85)",
                  "&:hover": {
                    backgroundColor: "red",
                    color: "white",
                  },
                }}
                onClick={() => {
                  localStorage.removeItem("authentication");
                  window.location.href = "/";
                }}
              >
                {/* <ConnectedTvIcon color="inherit" /> */}
                <Typography
                  sx={{
                    textTransform: "none",
                    padding: { xs: "0 5px" },
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  Cerrar Sesión
                </Typography>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default LibraryHeader;
