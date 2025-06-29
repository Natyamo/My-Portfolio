import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { username, password } = await request.json();
    if (
        username === process.env.ADMIN_USER &&
        password === process.env.ADMIN_PASS
    ) {
        return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: false, message: "認証失敗" }, { status: 401 });
}