import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("sessionId")

  // Protect /tours routes
  if (request.nextUrl.pathname.startsWith("/tours") && !currentUser) {
    return NextResponse.redirect(new URL("/signup", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/tours/:path*",
}
