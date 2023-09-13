import React, { useState } from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const ListaDesplegableBiblioteca = ({ elemento, opciones }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={elemento} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {opciones.map((e) => (
          <List
            key={e.name}
            component={Link}
            to={e.enlace}
            disablePadding
            sx={{ color: "#fff" }}
          >
            <ListItemButton sx={{ pl: 4, "&:hover": { color: "red" } }}>
              <ListItemText primary={e.name} />
            </ListItemButton>
          </List>
        ))}
      </Collapse>
    </List>
  );
};

ListaDesplegableBiblioteca.propTypes = {
  opciones: React.ReactNode,
  elemento: React.ReactNode,
};

export default ListaDesplegableBiblioteca;
