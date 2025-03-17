import { NextRequest, NextResponse } from "next/server";
import db from "../../../../../db/init";


export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const stmt = db.prepare("SELECT * FROM users WHERE username = ? AND password = ?");
  const user = stmt.get(username, password);

  if (!user) {
    return NextResponse.json({ error: "Неверные данные" }, { status: 401 });
  }

  return NextResponse.json({ message: "Вход успешен", user });
}
