import { Cliente } from "../models/cliente.models.js";
import { Habitacion } from "../models/habitacion.models.js";

export const verCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findAll();  
    return res.json(cliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const verReservas = async (req, res) => {
  try {
    const cliente = await Cliente.findAll();
    const cliente_id = cliente.id;
    const habitacion = await Habitacion.findAll({
      where: { cliente_id },
    });
    return res.json(cliente, habitacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const guardarCliente = async (req, res) => {
  try {
    const { nombre, telefono, dni, fecha_entrada, fecha_salida } = req.body;
    const cliente = await Cliente.create({
      nombre,
      telefono,
      dni,
      fecha_entrada,
      fecha_salida,
    });

    return res.json(cliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const eliminarCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.destroy({
      where: { id },
    });
    return res.json({ message: "ELIMINADO" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const actulizarcliente = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findOne({
      where: { id },
    });
    if (cliente == null) {
      return res.status(500).json({ message: "CLIENTE NO ENCONTRADO" });
    } else {
      cliente.set(req.body);
      await cliente.save();
      return res.json({ message: "ACTUALIZADO" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const buscarCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findOne({
      where: {
        id,
      },
    });
    if (cliente == null) {
      return res.status(500).json({ message: "CLIENTE NO ENCONTRADO" });
    } else {
      return res.json(cliente);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


