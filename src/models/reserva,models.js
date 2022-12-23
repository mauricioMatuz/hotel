import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Cliente } from "./cliente.models.js";

export const Reserva = sequelize.define("reserva", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

