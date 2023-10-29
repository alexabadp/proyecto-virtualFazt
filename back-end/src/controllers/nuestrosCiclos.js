const { Ciclo } = require("../db")

const postCiclo = async ({idUrl, subtitle, title, Image, titleresume, resumen, duracion, temario}) => {
    const searchCiclo = await Ciclo.findOne({
        where: {idUrl: idUrl}
    })

    if (!searchCiclo) {
        const newCiclo = await Ciclo.create({
            idUrl,
            subtitle, 
            title, 
            Image, 
            titleresume, 
            resumen, 
            duracion, 
            temario
        })

        return newCiclo
    } else {
        return "El ciclo ya existe"
    }
}

const getCiclo = async () =>{
    const ciclos = await Ciclo.findAll()

    return ciclos
}


module.exports = { postCiclo, getCiclo }