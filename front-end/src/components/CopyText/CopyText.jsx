import { Button, Snackbar } from "@mui/material";
import { useState } from "react";

const CopyText = ({ text, children }) => {
  const [estado, setEstado] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Texto copiado");
      setEstado(true);

      setTimeout(() => {
        setEstado(false);
      }, 3000);
    });
  };

  return (
    <>
      <Button
        style={{
          padding: "0px",
          maxWidth: "400px",
          width: "100%",
        }}
        onClick={handleCopyClick}
        variant="text"
        color="primary"
      >
        {children}
      </Button>
      <Snackbar open={estado} message="Texto copiado" />
    </>
  );
};

export default CopyText;
