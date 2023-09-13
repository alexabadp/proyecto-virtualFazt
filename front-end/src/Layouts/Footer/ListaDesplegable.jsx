import React, { useState } from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const ListaDesplegable = ({ elemento, opciones }) => {
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
          <List key={e} component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary={e} />
            </ListItemButton>
          </List>
        ))}
      </Collapse>
    </List>
  );
};

ListaDesplegable.propTypes = {
  opciones: React.ReactNode,
  elemento: React.ReactNode,
};

export default ListaDesplegable;
