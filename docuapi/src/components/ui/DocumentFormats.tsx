import { 
    DocumentTextIcon, 
    PhotoIcon,
    MusicalNoteIcon,
    FilmIcon, 
    PresentationChartBarIcon,
    DocumentIcon,
    TableCellsIcon,
    CodeBracketIcon
  } from '@heroicons/react/24/outline'
  
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
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Store Any Document Format</h2>
            <p className="mt-4 text-lg text-gray-600">
              One unified API for all your content. Perfect for AI agents and applications.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {formats.map((format) => (
              <div key={format.name} className="flex flex-col items-center group">
                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-blue-100 text-blue-700 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <format.icon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{format.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  