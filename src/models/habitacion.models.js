import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Cliente } from "./cliente.models.js";

export const Habitacion = sequelize.define("habitacion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  capacidad: {
    type: DataTypes.STRING,
  },
  ocupado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  },

  precio: {
    type: DataTypes.STRING,
  },
});
