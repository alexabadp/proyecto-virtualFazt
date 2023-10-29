import { useEffect, useState } from "react";
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
import { Select } from "@mui/material";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import { useDispatch, useSelector } from "react-redux";

import logoAcademia from '../../assets/logoAcademia.png'
import { getCiclos } from "../../redux/actions";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const dispatch = useDispatch()
  const dataCliclos = useSelector((state) => state.ciclos)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(()=>{
    dispatch(getCiclos());
  },[dispatch])

  return (
    <AppBar color="inherit">
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
            {/* //*--MENU PARA MOBILE */}
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem
                sx={{ "&:hover": { backgroundColor: "blue", color: "#fff" } }}
                component={Link}
                to="/inicio"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Inicio</Typography>
              </MenuItem>
              <Select
                label="Nuestro Ciclos"
                margin="dense"
                defaultValue=""
                value="opcion1"
                variant="standard"
                sx={{
                  margin: "0px 20px",
                  fontWeight: "700",
                  color: "blue",
                  "& .MuiSelect-icon": {
                    color: "blue",
                  },
                }}
              >
                <MenuItem key="option1" value="opcion1" disabled>
                  Nuestro Ciclos
                </MenuItem>

                {
                  dataCliclos?.map((e)=> <MenuItem key={e.idUrl} 
                  sx={{
                    "&:hover": {
                      backgroundColor: "blue",
                      color: "#fff",
                    },
                  }}
                  component={Link}
                  // to={`/ciclos/anualsanmarcos`}
                  to={`/ciclos/${e.idUrl}`}
                  onClick={handleCloseNavMenu}
                >
                  {e.title}</MenuItem>)
                }

              </Select>

              <MenuItem
                sx={{ "&:hover": { backgroundColor: "blue", color: "#fff" } }}
                component={Link}
                to="/contactus"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Contáctanos</Typography>
              </MenuItem>
              <MenuItem
                sx={{ "&:hover": { backgroundColor: "blue", color: "#fff" } }}
                component={Link}
                to="/sedes"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Sedes</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{ height: { xs: "40px", md: "55px" } }}
          >
            <img
              width="100%"
              height="100%"
              src={logoAcademia}
              alt=""
            />
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
              <Button
                sx={{
                  color: "#000",
                  "&:hover": { backgroundColor: "blue", color: "#fff" },
                }}
                component={Link}
                to="/inicio"
                onClick={handleCloseNavMenu}
              >
                <Typography textTransform="none" textAlign="center">
                  Inicio
                </Typography>
              </Button>
              <Select
                label="Nuestro Ciclos"
                margin="dense"
                defaultValue=""
                value="opcion1"
                variant="standard"
                sx={{
                  fontWeight: "700",
                  color: "blue",
                  "& .MuiSelect-icon": {
                    color: "blue",
                  },
                }}
              >
                <MenuItem key="option1" value="opcion1" disabled>
                  Nuestro Ciclos
                </MenuItem>

                {
                  dataCliclos?.map((e)=> <MenuItem 
                  key={e.idUrl} 
                  sx={{
                    "&:hover": {
                      backgroundColor: "blue",
                      color: "#fff",
                    },
                  }}
                  component={Link}
                  // to={`/ciclos/anualsanmarcos`}
                  to={`/ciclos/${e.idUrl}`}
                  onClick={handleCloseNavMenu}
                >
                  {e.title}</MenuItem>)
                }

                {/* <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "blue",
                      color: "#fff",
                    },
                  }}
                  key="option9"
                  component={Link}
                  to="/ciclos/anualsanmarcos"
                >
                  Ciclo Anual San Marcos
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "blue",
                      color: "#fff",
                    },
                  }}
                  key="option7"
                  component={Link}
                  to="/ciclos/anualuni"
                >
                  Ciclo Anual UNI
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "blue",
                      color: "#fff",
                    },
                  }}
                  key="option6"
                  component={Link}
                  to="/ciclos/semestralsanmarcos"
                >
                  Ciclo Semestral San Marcos
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "blue",
                      color: "#fff",
                    },
                  }}
                  key="option8"
                  component={Link}
                  to="/ciclos/semestraluni"
                >
                  Ciclo Semestral UNI
                </MenuItem> */}
              </Select>

              <Button
                sx={{
                  color: "#000",
                  "&:hover": { backgroundColor: "blue", color: "#fff" },
                }}
                component={Link}
                to="/contactus"
                onClick={handleCloseNavMenu}
              >
                <Typography textTransform="none" textAlign="center">
                  Contáctanos
                </Typography>
              </Button>
              <Button
                sx={{
                  color: "#000",
                  "&:hover": { backgroundColor: "blue", color: "#fff" },
                }}
                component={Link}
                to="/sedes"
                onClick={handleCloseNavMenu}
              >
                <Typography textTransform="none" textAlign="center">
                  Sedes
                </Typography>
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                sx={{
                  padding: { xs: "8px", md: "12px" },
                  backgroundColor: "blue",
                  color: "rgba(255,255,255,0.85)",
                  "&:hover": {
                    backgroundColor: "blue",
                    color: "white",
                  },
                }}
                component={Link}
                to="/"
                onClick={handleCloseNavMenu}
              >
                <ConnectedTvIcon color="inherit" />
                <Typography
                  sx={{
                    textTransform: "none",
                    padding: { xs: "0 5px" },
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  Biblioteca
                </Typography>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
