import express from "express"
import cors from "cors"
import db from "./config/database.js"
import Router from "./routes/routes.js"
import bodyParser from "body-parser"

const server = express()
server.use(express.json())
server.use(cors())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

try {
    await db.authenticate()
    console.log("Conexão com SGBD MySQL foi estabelecida")
} catch (erro) {
    console.error("Conexão com o SGBD MySQL Não foi Possível")
}

server.use(Router)

server.listen(5000, ()=> console.log("Server executando na http//localhost:5000"))
