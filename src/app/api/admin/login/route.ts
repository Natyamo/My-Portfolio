import { NextResponse } from "next/server";

export async function POST(request: Request) {
    // デバッグ: 環境変数の値を確認
    if (!process.env.ADMIN_USER || !process.env.ADMIN_PASS) {
        return NextResponse.json(
            { success: false, message: "環境変数が設定されていません" },
            { status: 500 }
        );
    }

    const { username, password } = await request.json();
    if (
        username === process.env.ADMIN_USER &&
        password === process.env.ADMIN_PASS
    ) {
        return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: false, message: "認証失敗" }, { status: 401 });
}