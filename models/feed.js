import { Sequelize } from "sequelize"
import db from "../config/database.js"

const Feed = db.define("feed",{
    id: {
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    user: {
        type: Sequelize.STRING(30)
    },
    date: {
        type: Sequelize.DATE
    },
    icon: {
        type: Sequelize.STRING(30)
    },
    text: {
        type: Sequelize.STRING(1500)
    }
},  {
        timestamps:false,
        freezeTableName: true 

}) 
export default Feed
