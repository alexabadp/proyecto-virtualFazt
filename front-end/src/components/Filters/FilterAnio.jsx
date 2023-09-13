import { MenuItem, Select } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/Add";

const FilterAnio = ({ onChange, value, name, data }) => {
  return (
    <>
      <Select
        IconComponent={ExpandMoreIcon}
        label="Nuestro Ciclos"
        margin="dense"
        onChange={onChange}
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
          <MenuItem key={e.idanio} value={e.idanio}>
            {e.anio}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default FilterAnio;
