import { Router } from "express";
import cors from "cors";
const router = Router();

router.get("/api/reserv", cors(),verHabitaciones);
router.post("/api/registrar/habitacion", cors()),guardarHabitacion;
router.delete("/api/eliminar/habitacion", cors(),eliminarHabitacion);
router.put("/api/actualizar/habitacion/:id", cors()),acutalizarHabitacion;
router.get("/api/buscar/:id", cors(),buscarHabitacion);

export default router;