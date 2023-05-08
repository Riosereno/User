const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
    // Definimos las columnas aquí
firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    
    birthday: {
        type: DataTypes.DATEONLY(100),
        allowNull: false
    },
    

});

module.exports = User;