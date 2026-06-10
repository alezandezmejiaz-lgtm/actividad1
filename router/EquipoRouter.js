import { Router } from "express";
import {getAllEquipos} from "../controller/EquipoController.js";
import {getEquipoById } from "../controller/EquipoController.js";
const router =Router();
router.get('/equipos',getAllEquipos);
router.get('/equipo/:id',getEquipoById);
export default router;