import sequelize from "sequelize"
const db = new sequelize("facebook", "root", "root", {
    dialect: "mysql",
    host: "localhost"
})

export default db