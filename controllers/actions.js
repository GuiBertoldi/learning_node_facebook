import Actions from "../models/actions.js"
import { getItemFeed } from "../controllers/feed.js";

export const getActions = async (req, res) => {
    try {
      const actions = await Actions.findAll();
      res.send(actions)
    } catch (erro) { 
      console.log(erro)
    }
}
  
export const getActionsId = async (req, res) => {
    try {
        const actions = await Actions.findAll({
        where: {
            id: req.params.id
        }
        })
        res.send(actions)
    } catch (erro) {
        console.log(erro)
    }
}
  
export const createAction = async (req, res) => {
    try {
        await Actions.create(req.body)
        res.json({
        "messangem": "Uma nova ação foi adicionada ao Banco de Dados"
        })
    } catch (erro) {
        console.log(erro)
    }
}

export const updateAction = async (req, res) => {
    try {
        await Actions.update(req.body, {
        where: {
            id: req.params.id
        }
        })
        res.json({
        "messangem": "A ação " + req.params.id + " foi Atualizada"
        })
    } catch (erro) {
        console.log(erro)
    }
}

export const deleteAction = async (req, res) => {
    try {
        await Actions.destroy({
        where: {
            id: req.params.id
        }
        })
        res.json({
        "messangem": "O Ação " + req.params.id + " foi Excluida do Banco de Dados"
        })
    } catch (erro) {
        console.log(erro)
    }
}