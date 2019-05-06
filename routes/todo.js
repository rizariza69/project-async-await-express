const express = require("express");
const router = express.Router();
const Controller = require("../controllers/todo");

router.get("/", Controller.findAll);
router.post("/", Controller.createTodo);
router.delete("/:id", Controller.deleteTodo);
router.put("/:id", Controller.updateTodo);

module.exports = router;
