const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Board = db.define('Board', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Board;
