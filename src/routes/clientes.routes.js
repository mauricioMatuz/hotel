import { Router } from "express";
import cors from "cors";
import {
  actulizarcliente,
  buscarCliente,
  eliminarCliente,
  guardarCliente,
  verCliente,
  verReservas,
} from "../controller/clientes.controller.js";
const router = Router();

router.get("/api/cliente", cors(), verCliente);
router.post("/api/registrar/cliente", cors(), guardarCliente);
router.delete("/api/eliminar/cliente/:id", cors(), eliminarCliente);
router.put("/api/actualizar/clliente/:id", cors(), actulizarcliente);
router.get("/api/buscar/:id", cors(), buscarCliente);
router.get("/api/reserva", cors(), verReservas);
export default router;
