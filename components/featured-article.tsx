import Link from "next/link"
import Image from "next/image"
import { Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturedArticle() {
  return (
    <div className="relative overflow-hidden rounded-lg border">
      <div className="aspect-[16/9] md:aspect-[3/2] lg:aspect-[16/9]">
        <Image
          src="/placeholder.svg?height=600&width=1200&text=Featured+Article"
          alt="Featured article"
          width={1200}
          height={600}
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 p-6 flex flex-col justify-end">
        <div className="space-y-2">
          <div className="inline-block rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            FEATURED
          </div>
          <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            <Link href="#" className="hover:underline">
              The Impact of Artificial Intelligence on Modern Businesses
            </Link>
          </h1>
          <p className="text-white/90 line-clamp-2 md:line-clamp-3">
            Exploring how AI is revolutionizing industries and creating new opportunities for growth and innovation
            across sectors.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
            <div className="flex items-center text-sm text-white/80">
              <User className="mr-1 h-4 w-4" />
              <span>By John Smith</span>
            </div>
            <div className="flex items-center text-sm text-white/80">
              <Clock className="mr-1 h-4 w-4" />
              <span>March 4, 2025</span>
            </div>
          </div>
          <div className="pt-4">
            <Button>Read Full Article</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

