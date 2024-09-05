//GET E POST
import { getToDos, createToDo } from "@/controllers/ToDoController";
import { NextResponse } from "next/server";

//GET

export async function GET(req, res) {
  try {
    const toDos = await getToDos();
    return NextResponse.json({
        success:true, data:toDos
    });
  } catch (error) {
    return NextResponse.json({success:false}, {status: 400});
  }
}

export async function POST(req, res) {
    await connectMongo();
    try {
      const data = await req.json();
      const todo = await ToDo.create(data);
      return NextResponse.json({ success: true, data: todo });
    } catch (error) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
}