import Link from "next/link"
import { ShoppingBag, Search, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-semibold tracking-tight">Maison</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/new" className="text-sm font-medium transition-colors hover:text-primary">
            NEW
          </Link>
          <Link href="/clothing" className="text-sm font-medium transition-colors hover:text-primary">
            의류
          </Link>
          <Link href="/accessories" className="text-sm font-medium transition-colors hover:text-primary">
            액세서리
          </Link>
          <Link href="/lifestyle" className="text-sm font-medium transition-colors hover:text-primary">
            리빙
          </Link>
          <Link href="/sale" className="text-sm font-medium text-accent transition-colors hover:text-accent/80">
            SALE
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
