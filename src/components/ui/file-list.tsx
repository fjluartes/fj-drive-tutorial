import Link from "next/link"
import { Folder, File } from "lucide-react"
import type { FileItem } from "~/lib/mock-data"

export function FileList({ files }: { files: FileItem[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="pb-2 font-semibold text-gray-400">Name</th>
            <th className="pb-2 font-semibold text-gray-400">Type</th>
            <th className="pb-2 font-semibold text-gray-400">Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.id} className="hover:bg-gray-800">
              <td className="py-2">
                {file.type === "folder" ? (
                  <Link href={`/?folder=${file.id}`} className="flex items-center space-x-2">
                    <Folder className="w-5 h-5 text-yellow-500" />
                    <span>{file.name}</span>
                  </Link>
                ) : (
                  <a
                    href={`/api/files/${file.id}`}
                    className="flex items-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <File className="w-5 h-5 text-blue-500" />
                    <span>{file.name}</span>
                  </a>
                )}
              </td>
              <td className="py-2 text-gray-400">{file.type === "folder" ? "Folder" : "File"}</td>
              <td className="py-2 text-gray-400">{file.lastModified}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

