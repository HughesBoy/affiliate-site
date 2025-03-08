import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function Header(){

  return(
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            NewsInsight
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            news
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            sports betting
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            online casinos
          </Link>
          
        </nav>
        <div className="flex items-center gap-4">
          <form className="hidden lg:flex relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search articles..." className="w-[200px] pl-8 bg-background" />
          </form>
          <Button>Subscribe</Button>
        </div>
      </div>
    </header>
  )
}