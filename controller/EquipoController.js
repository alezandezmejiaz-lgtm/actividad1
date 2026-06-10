import { Equipo } from "../model/EquipoModel.js"

export const getAllEquipos = async (req,res)=>{
    try{
    const equipos = await Equipo.findAll();
    return res.json(equipos);
}catch(error){
    console.log('error al obtener todos los datos de equipos',error);
    return res.status(500).json({error:'error al obtener todos los datos de equipos'});
}
};
