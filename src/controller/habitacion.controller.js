import { Cliente } from "../models/cliente.models.js";
import { Habitacion } from "../models/habitacion.models.js";

export const verHabitaciones = async (req, res) => {
  try {
    const habitacion = await Habitacion.findAll();
    return res.json(habitacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const guardarHabitacion = async (req, res) => {
  try {
    console.log("ENTRO AL POST");
    const { capacidad, ocupado, descripcion, precio } = req.body;
    const habitacion = await Habitacion.create({
      capacidad,
      ocupado,
      descripcion,
      precio,
    });
    return res.json(habitacion);
  } catch (error) {
    console.log("ERROR ", error);
    return res.status(500).json({ message: error.message });
  }
};
export const acutalizarHabitacion = async (req, res) => {
  const { id } = req.params;
  try {
    const habitacion = await Habitacion.findOne({
      where: { id },
    });
    if (habitacion == null) {
      return res.status(500).json({ message: "HABITACION NO ENCONTRADO" });
    } else {
      habitacion.set(req.body);
      await habitacion.save();
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const eliminarHabitacion = async (req, res) => {
  const { id } = req.params;
  try {
    const habitacion = await Habitacion.destroy({
      where: { id },
    });
    return res.json({ message: "ELIMINADO" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const buscarHabitacion = async (req, res) => {
  const { id } = req.params;
  try {
    const habitacion = await Habitacion.findOne({
      where: { id },
    });
    if (habitacion == null) {
      return res.status(500).json({ message: "HABITACION NO ENCONTRADO" });
    } else {
      return res.json(habitacion);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const disponibleHabitacion = async (req, res) => {
  console.log("HEU");
  try {
    const habitacion = await Habitacion.findAll({
      where: {
        ocupado: false,
      },
    });
    if (habitacion == null) {
      res.json({ message: "ERROR" });
    } else {
      res.json(habitacion);
    }
  } catch (error) {}
};
