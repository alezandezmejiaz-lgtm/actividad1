import { Router } from "express";
import {getAllEquipos} from "../controller/EquipoController.js";
import {getEquipoById } from "../controller/EquipoController.js";
import {createEquipo } from "../controller/EquipoController.js";
const router =Router();
router.get('/equipos',getAllEquipos);
router.get('/equipo/:id',getEquipoById);
router.post('/equipo',createEquipo);
export default router;