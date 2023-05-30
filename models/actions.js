import { Sequelize } from "sequelize"
import db from "../config/database.js"

const Actions = db.define("actions",{
    idActions: {
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    id: {
        type: Sequelize.INTEGER,
    },
    like: {
        type: Sequelize.INTEGER,
    },
    love: {
        type: Sequelize.INTEGER,
    },
    share: {
        type: Sequelize.INTEGER,
    },
    coments: {
        type: Sequelize.STRING(500)
    }
},  {
        timestamps:false,
        freezeTableName: true 

}) 
export default Actions
