import { TextIcon as DocumentTextIcon, ImageIcon as PhotoIcon, FileMusicIcon as MusicalNoteIcon, FilmIcon, BarChartIcon as PresentationChartBarIcon, FileTypeIcon as DocumentIcon, TableCellsSplitIcon as TableCellsIcon, CodeIcon as CodeBracketIcon } from 'lucide-react'

const formats = [
  { name: 'Text', icon: DocumentTextIcon },
  { name: 'Images', icon: PhotoIcon },
  { name: 'Audio', icon: MusicalNoteIcon },
  { name: 'Video', icon: FilmIcon },
  { name: 'Presentations', icon: PresentationChartBarIcon },
  { name: 'PDFs', icon: DocumentIcon },
  { name: 'Spreadsheets', icon: TableCellsIcon },
  { name: 'Code', icon: CodeBracketIcon },
]

export default function DocumentFormats() {
  return (
    <section id="formats" className="py-24 bg-gray-900 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Store Any Document Format</h2>
          <p className="mt-4 text-lg text-gray-400">
            One unified API for all your content. Perfect for AI agents and applications.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {formats.map((format) => (
            <div key={format.name} className="flex flex-col items-center group">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                <format.icon className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-semibold">{format.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

