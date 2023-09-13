import { Box } from "@mui/material";
import ReactPlayer from "react-player";

const BannerLibrary = () => {
  return (
    <Box sx={{ marginTop: "64px", height: "calc(100vh - 140px)" }}>
      <ReactPlayer
        url="https://youtu.be/UZ1xi5HJP6c"
        className="react-player"
        width="100%"
        height="100%"
        controls={true}
        muted={true}
      />
    </Box>
  );
};

export default BannerLibrary;
