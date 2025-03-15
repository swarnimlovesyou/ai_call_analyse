import Link from "next/link"
import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <span className="text-sm font-medium">AI Call Analyzer</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/" className="text-xs sm:text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/upload" className="text-xs sm:text-sm font-medium hover:underline underline-offset-4">
            Upload
          </Link>
          <Link href="/about" className="text-xs sm:text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/privacy" className="text-xs sm:text-sm font-medium hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
        <div className="text-xs text-gray-500">© {new Date().getFullYear()} AI Call Analyzer. All rights reserved.</div>
      </div>
    </footer>
  )
}

