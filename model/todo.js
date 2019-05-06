const mongoose = require("../config/todo");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const todosSchema = mongoose.Schema(
  {
    text: String,
    done: Boolean
  },
  {
    timestamps: true
  }
);

todosSchema.plugin(AutoIncrement, {
  id: "todos_counter",
  inc_field: "id"
});

const Todos = mongoose.model("Todos", todosSchema);

module.exports = Todos;
