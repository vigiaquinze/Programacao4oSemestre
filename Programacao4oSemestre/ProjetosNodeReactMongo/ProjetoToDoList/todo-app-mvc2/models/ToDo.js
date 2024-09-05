import mongoose from 'mongoose';

// Definição do schema para ToDo
const ToDoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

// Verifica se o modelo já foi registrado. Se não, cria o modelo.
const ToDo = mongoose.models.ToDo || mongoose.model('ToDo', ToDoSchema);

export default ToDo;
