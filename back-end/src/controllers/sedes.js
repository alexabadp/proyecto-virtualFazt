const { Sede } = require("../db")

const getSede = async () => {
    const sedes = await Sede.findAll()

    return sedes
}

const postSede = async ({title, address, phone, mobile, lat, lng, img}) => {
    const searchSede = await Sede.findOne({
        where: {title: title}
    })

    if(!searchSede) {
        const newSede = await Sede.create({
            title,
            address,
            phone,
            mobile,
            lat,
            lng,
            img,
            estado: true
        })

        return newSede
    } else {
        return "La sede ya éxiste"
    }
}

const postUpdateSede = async ({id, title, address, phone, mobile, lat, lng, img}) => {
    const existingSede = await Sede.findOne({
        where: {id: id}
    })

    if(existingSede) {
        await existingSede.update({
            title,
            address,
            phone,
            mobile,
            lat,
            lng,
            img
        })

        return "Sede actualizada con exito"
    } else {
        return "La sede no fue actualizada"
    }
}

const postDeleteSede = async ({id}) => {
    const existingSede = await Sede.findOne({
        where: { id: id }
    });

    if (existingSede) {
        await existingSede.update({
            estado: false
        });

        return "Sede eliminada con éxito";
    } else {
        return "La sede no fue eliminada";
    }
}

module.exports = { getSede, postSede, postUpdateSede, postDeleteSede}