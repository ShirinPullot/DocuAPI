import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Link className="flex items-center justify-center text-white" href="/">
              <span className="font-bold">DocuAPI</span>
            </Link>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="#features">
                Features
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#waitlist">
                Waitlist
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </nav>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              GitHub
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Twitter
            </Link>
          </div>
        </div>
        <div className="flex justify-center text-center text-xs mt-4">
          <p>© 2023 DocuAPI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

