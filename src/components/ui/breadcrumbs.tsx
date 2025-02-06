import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { getFilePath } from "~/lib/mock-data"

export function Breadcrumbs({ currentFolder }: { currentFolder: string }) {
  const path = getFilePath(currentFolder)

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {path.map((item, index) => (
          <li key={item.id} className="inline-flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
            <Link
              href={`/?folder=${item.id}`}
              className={`inline-flex items-center text-sm font-medium text-gray-300 hover:text-blue-400 ${
                index === path.length - 1 ? "text-blue-400" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

