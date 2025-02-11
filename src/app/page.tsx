import { Breadcrumbs } from "../components/ui/breadcrumbs"
import { FileList } from "../components/ui/file-list"
import { UploadButton } from "../components/ui/upload-button"
import { Button } from "../components/ui/button"
import { getFilesByParentId } from "~/lib/mock-data"

export default function DrivePage({
  searchParams,
}: {
  searchParams: { folder?: string }
}) {
  const currentFolder = searchParams.folder ?? "root"
  const files = getFilesByParentId(currentFolder)

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Google Drive Clone</h1>
        <UploadButton />
      </div>
      <div className="space-y-4">
        <Breadcrumbs currentFolder={currentFolder} />
        <FileList files={files} />
      </div>
    </div>
  )
}

