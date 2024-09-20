import { jwtMiddleware } from "@/utils/middleware";
import { getTodos, addTodo, updateTodo, deleteTodo } from "@/controllers/TodoController";

//método get para listar as tarefas do usuário
export async function GET(req, res) {
    return jwtMiddleware(async (req, res) => {
        await getTodos(req, res);
    })(req, res);
}

//método post para adicionar uma nova tarefa ao usuário
export async function POST(req, res) {
    return jwtMiddleware(async (req, res) => {
        await addTodo(req, res);
    })(req, res);
}

//método put para atualizar uma tarefa existente do usuário
export async function PUT(req, res) {
    return jwtMiddleware(async (req, res) => {
        await updateTodo(req, res);
    })(req, res);
}

//método delete para excluir uma tarefa existente do usuário
export async function DELETE(req, res) {
    return jwtMiddleware(async (req, res) => {
        await deleteTodo(req, res);
    })(req, res);
}