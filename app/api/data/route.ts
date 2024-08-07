import { auth } from "@/auth";
import { NextResponse } from "next/server";

// protecting API routes
export const GET = auth(function GET(req) {
    // now we detect is user is logged in. If logged in, user can see "not authenticated" message, else will return logged in user data in json
  if (req.auth) return NextResponse.json(req.auth);
  return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
});