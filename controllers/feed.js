import Feed from "../models/feed.js";

export const getItemFeed = async (req, res) => {
  try {
    const feed = await Feed.findAll()
    res.send(feed)
  } catch (erro) {
    console.log(erro)
  }
}

export const getItemId = async (req, res) => {
  try {
    const feed = await Feed.findAll({
      where: {
        id: req.params.id
      }
    })
    res.send(feed)
  } catch (erro) {
    console.log(erro)
  }
}

export const createItemFeed = async (req, res) => {
  try {
    await Feed.create(req.body)
    res.json({
      "messangem": "Um novo usuário foi criado no Banco de Dados"
    })
  } catch (erro) {
    console.log(erro)
  }
}

export const updateItemFeed = async (req, res) => {
  try {
    await Feed.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json({
      "messangem": "O Feed " + req.params.id + " foi Atualizado"
    })
  } catch (erro) {
    console.log(erro)
  }
}

export const deleteItemFeed = async (req, res) => {
  try {
    await Feed.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json({
      "messangem": "O Item " + req.params.id + " foi Excluido do Banco de Dados"
    })
  } catch (erro) {
    console.log(erro)
  }
}