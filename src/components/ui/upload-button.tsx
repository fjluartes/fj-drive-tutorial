"use client"

import { Button } from "~/components/ui/button"
import { Upload } from "lucide-react"

export function UploadButton() {
  const handleUpload = () => {
    alert("Upload functionality not implemented in this demo.")
  }

  return (
    <Button onClick={handleUpload} variant="outline">
      <Upload className="mr-2 h-4 w-4" /> Upload
    </Button>
  )
}

