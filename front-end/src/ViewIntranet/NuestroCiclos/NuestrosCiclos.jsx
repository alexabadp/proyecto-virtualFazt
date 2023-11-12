import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import styles from './TablaNuestrosCiclos.module.css';

import {
  Button,
  Grid,
  Modal,
  Typography,
} from "@mui/material";

import { getCiclos } from "../../redux/actions";
import CiclosFormCreate from "./NuestrosCiclosForm/CiclosFormCreate";
import CiclosFormUpdate from "./NuestrosCiclosForm/CiclosFormUpdate";


const NuestrosCiclos = () => {

  const dispatch = useDispatch()

  const ciclos = useSelector((state) => state.ciclos)

  const [openCreate, setOpenCreate] = useState(false)
  const [openUpdate, setOpenUpdate] = useState(false)
  const [idCiclo, setIdCiclo] = useState()
  const [refresh, setRefresh] = useState()
  const handleOpenCreate = ()=> setOpenCreate(true)
  const handleCloseCreate = ()=> setOpenCreate(false)
  const handleOpenUpdate = ()=> setOpenUpdate(true)
  const handleCloseUpdate = ()=> setOpenUpdate(false)

  const handleUpdateIdCiclo = (id)=>{
    handleOpenUpdate(true)  
    setIdCiclo(id)
  }
    

  const handleDeleteCiclo = (id) => {
    const updatedData = {
      id: id
    };
    axios
      .post(`http://localhost:3001/user/postDeleteUsuario/`, updatedData )
      .then((response) => {
        console.log(response.data);
        dispatch(getCiclos());
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  useEffect(()=> {
    dispatch(getCiclos());
  },[dispatch, refresh])


  return (
    <>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'center', textAlign: "left", margin:'20px 50px 20px'}}>
        <Typography
          component="h1"
          fontWeight="700"
          sx={{
            textAlign: { xs: "center", sm: "left" },
            fontSize: { xs: "26px", md: "32px" },
            padding: '10px 0 15px 0'
          }}
        >
          Registro de Ciclos
        </Typography>
          <Button variant="contained" color="success" onClick={handleOpenCreate} sx={{display: 'inline-block', maxWidth:'150px'}}>
            Crear
          </Button>

          <Grid container columnSpacing={{ md: 2}} sx={{margin:'auto'}}>
            <Grid  item xs={12} md={12}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>idUrl</th>
                    <th>subtitle</th>
                    <th>title</th>
                    <th>Image</th>
                    <th>titleresume</th>
                    <th>resumen</th>
                    <th>duracion</th>
                    <th>temario</th>
                    <th>Estado</th>
                    <th style={{ maxWidth: '150px' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {ciclos?.map((user, index) => (
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.idUrl}</td>
                      <td>{user.subtitle}</td>
                      <td>{user.title}</td>
                      <td>{user.Image}</td>
                      <td>{user.titleresume}</td>
                      <td>{user.resumen}</td>
                      <td>{user.duracion}</td>
                      <td>{user.temario}</td>
                      <td>{(user.estado).toString()}</td>
                      <td style={{width: '50px'}}>
                        <div style={{ display:'flex', justifyContent: 'center', gap: '10px' }}>
                          <Button type="button" variant="contained" onClick={()=>handleUpdateIdCiclo(user.id)} >
                            Actualizar
                          </Button> 
                          <Button type="button" variant="contained" color="error" onClick={()=>handleDeleteCiclo(user?.id)}>
                            Eliminar
                          </Button>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </Grid>
          </Grid>
        </div>

        <Modal open={openCreate} onClose={handleCloseCreate} sx={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
          <CiclosFormCreate onClose={()=>setOpenCreate(false)} refresh={()=>setRefresh(!refresh)} />
        </Modal>

        <Modal open={openUpdate} onClose={handleCloseUpdate} sx={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
          <CiclosFormUpdate id={idCiclo} onClose={()=>setOpenUpdate(false)} refresh={()=>setRefresh(!refresh)} data={ciclos} />
        </Modal>
      </div>
    </>
  );
};

export default NuestrosCiclos;
