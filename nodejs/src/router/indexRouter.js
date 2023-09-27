const indexController = require("../controller/indexController");

exports.indexRouter = function(app){
    app.post("/todo",indexController.createTodo);
    app.get("/user/:userIdx/todos", indexController.readTodo);
    app.patch("/todo", indexController.updateTodo);
    app.delete("/user/:userIdx/todo/:todoIdx", indexController.deleteTodo);
}