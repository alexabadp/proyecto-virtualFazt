const { Ciclo } = require("../db")

const getCiclo = async () =>{
    const ciclos = await Ciclo.findAll()

    return ciclos
}

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
            temario,
            estado: true
        })

        return newCiclo
    } else {
        return "El ciclo ya existe"
    }
}

const postUpdateCiclo = async ({id, idUrl, subtitle, title, Image, titleresume, resumen, duracion, temario}) => {
    const existingCiclo = await Ciclo.findOne({
        where: { id: id }
    });

    if (existingCiclo) {
        await existingCiclo.update({
            idUrl,
            subtitle,
            title,
            Image,
            titleresume,
            resumen,
            duracion,
            temario
        });

        return "Ciclo actualizado con éxito";
    } else {
        return "El ciclo no fue acttualizado";
    }
}

const postDeleteCiclo = async ({id}) => {
    const existingCiclo = await Ciclo.findOne({
        where: { id: id }
    });

    if (existingCiclo) {
        await existingCiclo.update({
            estado: false
        });

        return "Ciclo eliminado con éxito";
    } else {
        return "El ciclo no fue eliminado";
    }
}




module.exports = { getCiclo, postCiclo, postUpdateCiclo, postDeleteCiclo }