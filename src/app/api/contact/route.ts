import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };
const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    await prisma.contactMessage.create({
      data: { name, email, message },
    });
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    let message = "サーバーエラー";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

export async function GET() {
  // 管理画面用: 全メッセージ取得
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(messages);
}