import { NextRequest, NextResponse } from "next/server";

const basicAuth = (req: NextRequest) => {
  const auth = req.headers.get("authorization");
  const user = process.env.ADMIN_USER || "admin";
  const pass = process.env.ADMIN_PASS || "password";
  const valid = "Basic " + Buffer.from(`${user}:${pass}`).toString("base64");
  return auth === valid;
};

export function middleware(req: NextRequest) {
  // /admin/messages配下のみ認証
  if (req.nextUrl.pathname.startsWith("/admin/messages")) {
    if (!basicAuth(req)) {
      return new NextResponse("認証が必要です", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
      });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/messages/:path*"],
};