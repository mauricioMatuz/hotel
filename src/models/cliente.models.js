import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Reserva } from "./reserva,models.js";

export const Cliente = sequelize.define("cliente", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },

  telefono: {
    type: DataTypes.STRING,
  },
  dni: {
    type: DataTypes.STRING,
  },
  fecha_entrada: {
    type: DataTypes.STRING,
  },
  fecha_salida: {
    type: DataTypes.STRING,
  },
});

Cliente.hasMany(Reserva, {
  foreingKey: "cliente_id",
  sourceKey: "id",
});

Reserva.belongsTo(Cliente, {
  foreingKey: "cliente_id",
  sourceKey: "id",
});
