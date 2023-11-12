import NuestrosCiclos from "../NuestroCiclos/NuestrosCiclos"
import IntranetSedes from "../Sedes/Sedes"
import Usuarios from "../Usuarios/Usuarios"

const Dashboard =()=>{

  return <>
    <Usuarios />
    <NuestrosCiclos />
    <IntranetSedes />
  </>
}

export default Dashboard