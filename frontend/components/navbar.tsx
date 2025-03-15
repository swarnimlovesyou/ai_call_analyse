import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Phone } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Phone className="h-6 w-6" />
          <span className="text-xl font-bold">AI Call Analyzer</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/upload" className="text-sm font-medium hover:underline underline-offset-4">
            Upload
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/upload">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

