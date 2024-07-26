const { Router } = require("express")

const TagsController = require("../controllers/TagsController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tagsRoutes = Router()

//instanciando a classe
const tagsController = new TagsController()

//rotas
tagsRoutes.get("/", ensureAuthenticated, tagsController.index)

module.exports =  tagsRoutes