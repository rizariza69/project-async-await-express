const Todos = require("../model/todo");

module.exports = {
  findAll: async (req, res) => {
    try {
      const todos = await Todos.find();
      res.status(200).send({
        message: `find success`,
        data: todos
      });
    } catch (error) {
      res.status(500).send({
        message: "find errors"
      });
    }
  },
  createTodo: async (req, res) => {
    try {
      const todo = await Todos.create({
        text: req.body.text,
        done: false
      });
      res.status(200).send({
        message: `create todo success`,
        data: todo
      });
    } catch (error) {
      res.status(500).send({
        message: "create todo errors"
      });
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const todos = await Todos.deleteOne({
        id: req.params.id
      });

      res.status(200).send({
        message: `delete success`,
        data: todos
      });
    } catch (error) {
      res.status(500).send({
        message: "delete todo errors"
      });
    }
  },
  updateTodo: (req, res) => {
    Todos.update(
      {
        id: req.params.id
      },
      {
        $set: {
          text: req.body.text,
          done: req.body.done
        }
      }
    )
      .then(item => {
        res.status(200).send({
          message: `update todo success`,
          data: item
        });
      })
      .catch(error => {
        res.status(500).send({
          message: "update todo errors"
        });
      });
  }
};
