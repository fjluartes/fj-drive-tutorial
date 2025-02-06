import { NextResponse } from "next/server"
import { mockFiles } from "~/lib/mock-data"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const file = mockFiles.find((f) => f.id === params.id && f.type === "file")

  if (!file) {
    return new NextResponse("File not found", { status: 404 })
  }

  // In a real application, you would stream the file content here
  // For this example, we'll just return a text response
  return new NextResponse(`This is the content of ${file.name}`, {
    headers: {
      "Content-Disposition": `attachment; filename="${file.name}"`,
      "Content-Type": "text/plain",
    },
  })
}

