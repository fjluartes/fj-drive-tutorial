export type FileType = "folder" | "file"

export interface FileItem {
  id: string
  name: string
  type: FileType
  parentId: string | null
  lastModified: string
}

export const mockFiles: FileItem[] = [
  { id: "root", name: "My Drive", type: "folder", parentId: null, lastModified: "2023-07-01" },
  { id: "1", name: "Documents", type: "folder", parentId: "root", lastModified: "2023-07-05" },
  { id: "2", name: "Images", type: "folder", parentId: "root", lastModified: "2023-07-10" },
  { id: "3", name: "resume.pdf", type: "file", parentId: "1", lastModified: "2023-07-15" },
  { id: "4", name: "project-proposal.docx", type: "file", parentId: "1", lastModified: "2023-07-20" },
  { id: "5", name: "vacation.jpg", type: "file", parentId: "2", lastModified: "2023-07-25" },
  { id: "6", name: "profile-picture.png", type: "file", parentId: "2", lastModified: "2023-07-30" },
]

export function getFilesByParentId(parentId: string | null): FileItem[] {
  return mockFiles.filter((file) => file.parentId === parentId)
}

export function getFilePath(fileId: string): FileItem[] {
  const path: FileItem[] = []
  let currentFile = mockFiles.find((file) => file.id === fileId)

  while (currentFile) {
    path.unshift(currentFile)
    currentFile = mockFiles.find((file) => file.id === currentFile?.parentId)
  }

  return path
}

