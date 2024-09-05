import { getToDos, createToDo } from "@/controllers/ToDoController";
import connectMongo from "@/utils/dbConnect";
import closeConnectionMongo from "@/utils/dbCloseConnect";
import { NextResponse } from "next/server";

// GET
export async function GET(req) {
  try {
    await connectMongo();
    const toDos = await getToDos();
    await closeConnectionMongo();
    return NextResponse.json({ success: true, data: toDos });
  } catch (error) {
    console.error("Erro ao buscar ToDos:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST
export async function POST(req) {
  try {
    await connectMongo();
    const data = await req.json();
    const todo = await createToDo(data);
    await closeConnectionMongo();
    return NextResponse.json({ success: true, data: todo });
  } catch (error) {
    console.error("Erro ao criar ToDo:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
