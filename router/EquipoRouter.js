import { Router } from "express";
import {getAllEquipos} from "../controller/EquipoController.js";
const router =Router();
router.get('/equipos',getAllEquipos);

export default router;