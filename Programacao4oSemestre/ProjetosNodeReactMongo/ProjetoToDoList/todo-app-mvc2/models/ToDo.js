import mongoose from 'mongoose';

const ToDoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['A fazer', 'Fazendo', 'Feito'],
        default:"A fazer"
    }
})

const ToDo = mongoose.models.ToDo || mongoose.models("ToDoSchema");

export default ToDo;