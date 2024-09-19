import { NextRequest, NextResponse } from 'next/server';
import { Task } from '../../types/index';

const tasks: Task[] = [
  { id: 1, title: 'Lavar as mãos', completed: false },
  { id: 2, title: 'Fazer um bolo', completed: false },
  { id: 3, title: 'Lavar a louça', completed: false },
  { id: 4, title: 'Limpar o banheiro', completed: true },
];

export async function GET() {
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const newTask: Task = { id: Date.now(), ...data, completed: false };
  tasks.push(newTask);
  return NextResponse.json(newTask, { status: 201 });
}