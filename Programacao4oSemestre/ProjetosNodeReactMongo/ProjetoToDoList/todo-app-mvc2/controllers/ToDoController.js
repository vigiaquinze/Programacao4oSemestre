import ToDo from "@/models/ToDo";
import connectMongo from "@/utils/dbConnect";
import closeConnectionMongo from "@/utils/dbCloseConnect";

const [todos, setTodos] = useState([]);
const [newTodo, setNewTodo] = useState('');


//CRUD
export const getToDos = async()=>{
    await connectMongo();
    return await ToDo.find();
}

export const createToDo = async(data)=>{
    await connectMongo();
    const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTodo }),
      });
      const data = await response.json();
      setTodos([...todos, data.data]);
      setNewTodo('');
    return await ToDo.find(data);
}

export const updateToDo = async(id, data)=>{
    await connectMongo();
    const response = await fetch(`/api/todos/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed:!currentStatus }),
        });
        await response.json();
        getTodos();
    return await ToDo.findByIdAndUpdate(id, data);
}

export const deleteToDo = async(id)=>{
    await connectMongo();
    await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter((todo) => todo._id !== id));
    return await ToDo.findByIdAndDelete(id);
}