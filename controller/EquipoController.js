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
export const getEquipoById = async(req,res)=>{
try{
    const {id}= req.params;
    const equipo = await Equipo.findByPk(id);
    if(!equipo){
        return res.status(404).json({error:'equipo no encontrada'});
    }
    return res.json(equipo);
}catch(error){
    console.log('error al obtener el equipo',error);
    return res.status(500).json({error:'error al obtener el  equipo'});
}
};

export const createEquipo =async(req,res)=>{
try{
    const nuevaEquipo = await Equipo.create(req.body);
    return res.status(201).json(nuevaEquipo);
}catch(error){
    console.log('error al crear la persona ',error);
    return res.status(500).json({error:'error al crear la persona '});
}
};