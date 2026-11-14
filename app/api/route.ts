import { NextResponse } from "next/server";

export function GET() {
  console.log("GET request received");
}

export async function POST(req: NextResponse) {
  const body = await req.json();
  console.log(body);

  console.log("POST request received");

  return NextResponse.json({ message: "POST request received" });
}
