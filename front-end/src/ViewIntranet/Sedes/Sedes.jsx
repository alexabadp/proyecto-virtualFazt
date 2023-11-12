import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import styles from './TablaSedes.module.css'

import {
  Button,
  Grid,
  Modal,
  Typography,
} from "@mui/material";

import { getSedes } from "../../redux/actions";
import SedeFormCreate from "./SedesForm/SedeFormCreate";
import SedeFormUpdate from "./SedesForm/SedeFormUpdate";


const IntranetSedes = () => {

  const dispatch = useDispatch()

  const sedes = useSelector((state) => state.sedes)

  const [openCreate, setOpenCreate] = useState(false)
  const [openUpdate, setOpenUpdate] = useState(false)
  const [idSede, setIdSede] = useState()
  const [refresh, setRefresh] = useState()
  const handleOpenCreate = ()=> setOpenCreate(true)
  const handleCloseCreate = ()=> setOpenCreate(false)
  const handleOpenUpdate = ()=> setOpenUpdate(true)
  const handleCloseUpdate = ()=> setOpenUpdate(false)


  const handleUpdateIdSede = (id)=>{
    handleOpenUpdate(true)  
    setIdSede(id)
  }
    
  const handleDeleteSede = (id) => {
    const updatedData = {
      id: id
    };
    axios
      .post(`http://localhost:3001/user/postDeleteUsuario/`, updatedData )
      .then((response) => {
        console.log(response.data);
        dispatch(getSedes());
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  useEffect(()=> {
    dispatch(getSedes());
  },[dispatch, refresh])

  console.log("idSede", sedes)

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
            Registro de Sedes
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
                    <th>title</th>
                    <th>address</th>
                    <th>phone</th>
                    <th>mobile</th>
                    <th>lat</th>
                    <th>lng</th>
                    <th>img</th>
                    <th>Estado</th>
                    <th style={{ maxWidth: '150px' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {sedes?.map((user, index) => (
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.title}</td>
                      <td>{user.address}</td>
                      <td>{user.phone}</td>
                      <td>{user.mobile}</td>
                      <td>{user.lat}</td>
                      <td>{user.lng}</td>
                      <td>{user.img}</td>
                      <td>{(user.estado).toString()}</td>
                      <td style={{width: '50px'}}>
                        <div style={{ display:'flex', justifyContent: 'center', gap: '10px' }}>
                          <Button type="button" variant="contained" onClick={()=>handleUpdateIdSede(user.id)} >
                            Actualizar
                          </Button> 
                          <Button type="button" variant="contained" color="error" onClick={()=>handleDeleteSede(user.id)}>
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
          <SedeFormCreate onClose={()=>setOpenCreate(false)} refresh={()=>setRefresh(!refresh)} />
        </Modal>

        <Modal open={openUpdate} onClose={handleCloseUpdate} sx={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
          <SedeFormUpdate id={idSede} onClose={()=>setOpenUpdate(false)} refresh={()=>setRefresh(!refresh)} data={sedes} />
        </Modal>       
      </div>
    </>
  );
};

export default IntranetSedes;
