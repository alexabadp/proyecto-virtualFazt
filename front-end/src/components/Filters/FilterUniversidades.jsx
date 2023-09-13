import { MenuItem, Select } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/Add";

const FilterUniversidades = ({ onChange, value, name, data }) => {
  return (
    <>
      <Select
        IconComponent={ExpandMoreIcon}
        label="Nuestro Ciclos"
        margin="dense"
        onChange={(e) => onChange(e)}
        displayEmpty
        defaultValue=""
        value={value === null ? "" : value}
        variant="standard"
        sx={{
          margin: "30px 0",
          fontWeight: "400",
          color: "#fff",
          display: "flex",
          flexDirection: "row-reverse",
          "& .MuiSelect-icon": {
            color: "#fff",
          },
          "& .MuiSelect-select": {
            paddingLeft: "10px",
          },
        }}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: "300px",
              textAlign: "left",
              color: "#000",
            },
          },
        }}
      >
        <MenuItem value="" disabled>
          {name}
        </MenuItem>

        {data?.map((e) => (
          <MenuItem key={e.iduniversidad} value={e.iduniversidad}>
            {e.nombre_universidad}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default FilterUniversidades;
