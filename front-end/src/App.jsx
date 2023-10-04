import { Routes, Route } from "react-router-dom";
import Login from "./Views/Login/Login";
import Signup from "./Views/Signup/Signup";
import Dashboard from "./Views/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import VistaTest from "./Views/VistaTest/VistaTest";
import VideoClases from "./Views/VideoClases/VideoClases";
import Admision from "./Views/Admision/Admision";
import Solucionarios from "./Views/Solucionarios/Solucionarios";
import Prospectos from "./Views/Prospectos/Prospectos";
import Escaneos from "./Views/Escaneos/Escaneos";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<VideoClases />} />
        <Route path="/vistatest" element={<VistaTest />} />
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
