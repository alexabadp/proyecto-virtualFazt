import { Routes, Route } from "react-router-dom";
import Login from "./Views/Login/Login";
import Signup from "./Views/Signup/Signup";
import Inicio from "./Views/Inicio/Inicio"
import Dashboard from "./Views/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
// import VistaTest from "./Views/VistaTest/VistaTest";
import VideoClases from "./Views/VideoClases/VideoClases";
import Admision from "./Views/Admision/Admision";
import Solucionarios from "./Views/Solucionarios/Solucionarios";
import Prospectos from "./Views/Prospectos/Prospectos";
import Escaneos from "./Views/Escaneos/Escaneos";
import CicloPage from "./Views/NuestrosCiclos/NuestrosCiclos";
import Contactanos from "./Views/Contactanos/Contactanos"
import Sedes from "./Views/Sedes/Sedes"
import NuestrosCiclos from "./ViewIntranet/NuestroCiclos/NuestrosCiclos";
// import Footer from "./Layouts/Footer/Footer";

function App() {
  return (
    <Routes>
      <Route path="/inicio" element={<Inicio/>} />        
      <Route exact path="/ciclos/:idCiclo" element={<CicloPage />} />
      <Route exact path="/contactus" element={<Contactanos />} />
      <Route exact path="/sedes" element={<Sedes />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin/ciclos" element={<NuestrosCiclos/>} />

      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<VideoClases />} />
        <Route path="/admin/users" element={<Dashboard />} />
        <Route path="/videoclases" element={<VideoClases />} />
        <Route path="/admision" element={<Admision />} />
        <Route path="/solucionarios" element={<Solucionarios />} />
        <Route path="/prospectos" element={<Prospectos />} />
        <Route path="/escaneos" element={<Escaneos />} />
      </Route>
    </Routes>
  );
}

export default App;
