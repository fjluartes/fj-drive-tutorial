"use client"

import { Button } from "~/components/ui/button"
import { Upload } from "lucide-react"

export function UploadButton() {
  const handleUpload = () => {
    alert("Upload functionality not implemented in this demo.")
  }

  return (
    <Button onClick={handleUpload} className="bg-blue-600 hover:bg-blue-700 text-white">
      <Upload className="mr-2 h-4 w-4" /> Upload
    </Button>
  )
}

