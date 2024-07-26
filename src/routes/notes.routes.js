const { Router } = require("express")

const NotesController = require("../controllers/NotesController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesRoutes = Router()

//instanciando a classe
const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)

//rotas
notesRoutes.get("/", notesController.index)
notesRoutes.post("/", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)

module.exports =  notesRoutes