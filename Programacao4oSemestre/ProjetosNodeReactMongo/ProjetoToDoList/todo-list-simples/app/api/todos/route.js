import connectMongo from '@/lib/mongodb';
import ToDo from '@/models/ToDo';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectMongo();
  try {
    const todos = await ToDo.find({});
    return NextResponse.json({ success: true, data: todos });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(req) {
  await connectMongo();
  try {
    const data = await req.json();
    const todo = await ToDo.create(data);
    return NextResponse.json({ success: true, data: todo });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
