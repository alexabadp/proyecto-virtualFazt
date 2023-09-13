import { Box, ImageListItem } from "@mui/material";
import ReactPlayer from "react-player";
import style from "./SolucionarioVideo.module.css";
import background from "../../assets/background.png";

const SolucionarioVideo = ({ data }) => {
  return (
    <Box className={style.videoClasesContainer}>
      {data.length > 0 ? (
        data.map((e) => (
          <ImageListItem
            key={e.idsolucionario}
            // className="videoContainer custom-video-player"
            className={style.videoContainer}
          >
            <ReactPlayer
              url={e.url_solucionario}
              width="100%"
              height="100%"
              controls={true}
              muted={true}
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 0,
                    fs: 0,
                    showinfo: 0, // Ocultar el título y otras informaciones del video
                  },
                },
              }}
            />
          </ImageListItem>
        ))
      ) : (
        <Box
          sx={{
            width: " 100%",
            gridColumn: "-1 / 1",
          }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Biblioteca%20GC%2FVideoClases%2Fimagen-para-espera.webp?alt=media&token=797f2e20-a18f-4eaf-ab11-e4fe5a1d0f50"
            style={{ borderRadius: "10px", overflow: "hidden" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default SolucionarioVideo;
