import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import styles from './TablaUsuarios.module.css'

import {
  Button,
  Grid,
  Typography,
  Modal
} from "@mui/material";

import { getUsuarios } from "../../redux/actions";
import UserFormCreate from "./UserForm/UserFormCreate";
import UserFormUpdate from "./UserForm/UserFormUpdate";

const Usuarios = () => {

  const dispatch = useDispatch()
  
  const users = useSelector((state) => state.usuarios)

  const [openCreate, setOpenCreate] = useState(false)
  const [openUpdate, setOpenUpdate] = useState(false)
  const [idUsuario, setIdUsuario] = useState()
  const [refresh, setRefresh] = useState()
  const handleOpenCreate = ()=> setOpenCreate(true)
  const handleCloseCreate = ()=> setOpenCreate(false)
  const handleOpenUpdate = ()=> setOpenUpdate(true)
  const handleCloseUpdate = ()=> setOpenUpdate(false)


  const handleUpdateIdUsuario = (id)=>{
    handleOpenUpdate(true)  
    setIdUsuario(id)
  }
    
  const handleDeleteUsuario = (id) => {
    const updatedData = {
      id: id
    };
    axios
      .post(`http://localhost:3001/user/postDeleteUsuario/`, updatedData )
      .then((response) => {
        console.log(response.data);
        dispatch(getUsuarios());
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  useEffect(()=> {
    dispatch(getUsuarios());
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
            Registro de Usuarios
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
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>Estado</th>
                    <th style={{ maxWidth: '150px' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>{(user.estado).toString()}</td>
                      <td style={{ width: '50px' }}>
                        <div style={{ display:'flex', justifyContent: 'center', gap: '10px' }}>
                          <Button type="button" variant="contained" onClick={()=>handleUpdateIdUsuario(user.id)} >
                            Actualizar
                          </Button> 
                          <Button type="button" variant="contained" color="error" onClick={()=>handleDeleteUsuario(user?.id)}>
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
          <UserFormCreate onClose={()=>setOpenCreate(false)} refresh={()=>setRefresh(!refresh)} />
        </Modal>

        <Modal open={openUpdate} onClose={handleCloseUpdate} sx={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
          <UserFormUpdate id={idUsuario} onClose={()=>setOpenUpdate(false)} refresh={()=>setRefresh(!refresh)} data={users} />
        </Modal>
    </div>
    </>
  );
};

export default Usuarios;

