import { DataTypes } from "sequelize";
import {sequelize} from '../db/conexion.js'

export const  Equipo = sequelize.define(
'Equipos',
{

    id: {
    type:DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
    
    },
    Nombre:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
                notNull:{msg:'El nombre del equipo  debe ser obligatorio'},
                notEmpty:true,
                len:{
                args:[5,10],
                msg:'El nombre del equipo  debe tener entre 5 y 10 caracteres'
                }
        }
    },
Ciudad:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull:{msg:'El nombre de la ciudad debe ser obligatorio'},
            notEmpty:true,
            len:{
                args:[5,10],
                msg:'El nombre de la Ciudad debe tener entre 5 y 10 caracteres'
            }
        }
    },
    Pais:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull:{msg:'El nombre  del país  debe ser obligatorio'},
            notEmpty:true,
            len:{
                args:[5,10],
                msg:'El nombre  del país debe tener entre 5 y 10 caracteres'
            }
        }
    },
    Estadio:{
    type:DataTypes.STRING,
    allowNull: false,
    validate:{
            notNull:{msg:'El nombre del Estadio debe ser obligatorio'},
            notEmpty:true,
            len:{
                args:[5,10],
                msg:'El nombre del Estadio debe tener entre 5 y 10 caracteres'
            }
    }
    }, 
    Ano_fundacion:{
    type:DataTypes.INTEGER,
        allowNull: false,
    validate:{
        notNull:{msg:'El  año de fundación debe ser obligatorio'},
        isInt:true,
    }  
    }
},
{
    tableName:'Equipos',
    timestamps: false
}
);