import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsX,
} from "react-icons/bs";

import "./Horario.css";
import { Box } from "@mui/material";

const Horario = (props) => {
  const [currentImage, setCurrentImage] = useState();

  const schedule_Images = props.ciclo.schedule_Image;
  const images_cant = schedule_Images.length;
  const image_name = schedule_Images[0].url;
  let [imageNumber, setImageNumber] = useState(1);
  var file_name =
    images_cant === 1
      ? image_name
      : image_name.substring(0, image_name.indexOf("_")) + "_" + imageNumber;

  const removeNumberImage = () => {
    if (imageNumber > 1) {
      setImageNumber(imageNumber - 1);
    }
  };

  const addNumberImage = () => {
    if (imageNumber < images_cant) {
      setImageNumber(imageNumber + 1);
    }
  };

  useEffect(() => {
    file_name === "sasm" &&
      setCurrentImage(
        "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FHorarios%2Fsasm.png?alt=media&token=4964168d-a8f3-4119-9454-ddacdb905f88"
      );
    file_name === "srsm_1" &&
      setCurrentImage(
        "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FHorarios%2Fsrsm_1.png?alt=media&token=d1943b9c-1963-42c9-8143-874acdfe715f"
      );
    file_name === "srsm_2" &&
      setCurrentImage(
        "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FHorarios%2Fsrsm_2.png?alt=media&token=c17b74f4-73a2-460f-ac1b-9b11bc06cc9f"
      );
    file_name === "sruni" &&
      setCurrentImage(
        "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FHorarios%2Fsruni.png?alt=media&token=f5ee0819-c11a-43de-bf2a-f6e55a0a8740"
      );
    file_name === "ssasm" &&
      setCurrentImage(
        "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FHorarios%2Fssasm.png?alt=media&token=88bdd6e0-06b4-4371-a8fd-429366514c2d"
      );
    file_name === "ssbuni" &&
      setCurrentImage(
        "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FHorarios%2Fssbuni.png?alt=media&token=334f77c1-2ba7-4ed9-b2f9-3e0ee3c51497"
      );
    file_name === "ssiuni" &&
      setCurrentImage(
        "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FHorarios%2Fssiuni.png?alt=media&token=74132f59-d9c0-446c-af30-fa830144465d"
      );
    file_name === "sssm_1" &&
      setCurrentImage(
        "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FHorarios%2Fsssm_1.png?alt=media&token=b55716ba-4395-43c8-aa9d-f98fec8cfc08"
      );
    file_name === "sssm_2" &&
      setCurrentImage(
        "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FHorarios%2Fsssm_2.png?alt=media&token=a05d22d0-0288-4572-b2c3-c42006e591da"
      );
    file_name === "svsm" &&
      setCurrentImage(
        "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FHorarios%2Fsvsm.png?alt=media&token=60e04938-a82f-43be-b171-f714a59cdb2e"
      );
    file_name === "svuni" &&
      setCurrentImage(
        "https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FNuestros%20Ciclos%2FHorarios%2Fsvuni.png?alt=media&token=0fe549da-71f3-40f6-a0f4-be02139f0788"
      );
  }, [file_name]);

  return (
    <>
      <div>
        <Modal
          open={props.show}
          //   onClose={() => setOpen(false)}
          onClose={props.close}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            height: "100%",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              margin: "20px auto",
              padding: "20px 20px",
              width: { xs: "350px", sm: "600px", md: "800px", lg: "1000px" },
              bgcolor: "background.paper",
              borderRadius: "10px",
              //   boxShadow: 24,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <BsX
                // onClick={() => setOpen(false)}
                onClick={props.close}
                size={"2.5rem"}
                style={{ cursor: "pointer" }}
              />
            </Box>
            {images_cant > 1 && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "0 0 10px 0",
                  }}
                >
                  <BsFillArrowLeftCircleFill
                    size={"2.5rem"}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                    onClick={() => {
                      removeNumberImage();
                    }}
                  />
                  <BsFillArrowRightCircleFill
                    size={"2.5rem"}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      addNumberImage();
                    }}
                  />
                </Box>
              </>
            )}
            <Box sx={{ display: { xs: "block", sm: "block" } }}>
              {/* <img width="100%" src={imagePath} alt="Imagen de modal" /> */}
              <img
                width="100%"
                src={currentImage}
                alt="Imagen de modal"
                style={{ borderRadius: "20px", overflow: "hidden" }}
              />
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Horario;
