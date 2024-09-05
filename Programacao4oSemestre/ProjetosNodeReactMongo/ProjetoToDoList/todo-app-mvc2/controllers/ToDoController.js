import ToDo from "@/models/ToDo";
import connectMongo from "@/utils/dbConnect";
import closeConnectionMongo from "@/utils/dbCloseConnect";

// Funções de CRUD

export const getToDos = async () => {
  await connectMongo();
  const todos = await ToDo.find();
  await closeConnectionMongo();
  return todos;
};

export const createToDo = async (data) => {
  await connectMongo();
  const newToDo = new ToDo({
    title: data.title,
    description: data.description
  });
  const savedToDo = await newToDo.save();
  await closeConnectionMongo();
  return savedToDo;
};

export const updateToDo = async (id, data) => {
  await connectMongo();
  const updatedToDo = await ToDo.findByIdAndUpdate(id, data, { new: true });
  await closeConnectionMongo();
  return updatedToDo;
}

export const deleteToDo = async (id) => {
  await connectMongo();
  const deletedToDo = await ToDo.findByIdAndDelete(id);
  await closeConnectionMongo();
  return deletedToDo;
}
