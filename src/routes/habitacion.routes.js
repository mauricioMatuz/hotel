import { Router } from "express";
import cors from "cors";
import {
  acutalizarHabitacion,
  buscarHabitacion,
  disponibleHabitacion,
  eliminarHabitacion,
  guardarHabitacion,
  verHabitaciones,
} from "../controller/habitacion.controller.js";
const router = Router();

router.get("/api/habitacion", cors(), verHabitaciones);
router.post("/api/registrar/habitacion", cors(), guardarHabitacion);
router.delete("/api/eliminar/habitacion", cors(), eliminarHabitacion);
router.put("/api/actualizar/habitacion/:id", cors()), acutalizarHabitacion;
router.get("/api/buscar/:id", cors(), buscarHabitacion);
router.get("/api/disponible", disponibleHabitacion);

export default router;
