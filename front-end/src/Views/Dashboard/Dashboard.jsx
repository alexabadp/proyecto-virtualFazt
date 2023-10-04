import React, { useEffect, useState } from "react";
import LibraryHeader from "../../Layouts/Header/LibraryHeader";
import styles from "./Dashboard.module.css"

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/user/');
      if (!response.ok) {
        throw new Error('No se pudo obtener la información de usuarios');
      }
      const userData = await response.json();
      setData(userData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <LibraryHeader />
      <div style={{margin:'20px'}}>     
        <h1 style={{ margin: 'auto', padding: '62px 0', textAlign: 'center' }}>PANEL DE ADMINISTRADOR</h1>
        <div>
          <p style={{textAlign:'center', fontSize:'22px'}}>Usuarios registrados</p>
          {/* <table className="data-table"> */}
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
