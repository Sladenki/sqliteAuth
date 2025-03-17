import { NextRequest, NextResponse } from "next/server";
import db from "../../../../../db/init";


export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Заполните все поля" }, { status: 400 });
  }

  try {
    const stmt = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    stmt.run(username, password);
    return NextResponse.json({ message: "Регистрация успешна" });
  } catch (error) {
    return NextResponse.json({ error: "Имя пользователя уже занято" }, { status: 400 });
  }
}
