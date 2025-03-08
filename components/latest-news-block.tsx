import Link from "next/link"
import { ChevronRight, Clock } from "lucide-react"
import FeaturedArticle from "@/components/featured-article"

import Image from "next/image"
export default function LatestNewsBlock(){
  return(
    <section className="container py-8 md:py-12">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
      <FeaturedArticle />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Latest News</h2>
          <Link href="#" className="flex items-center text-sm font-medium text-primary">
            View All <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-4">
              <Image
                src={`/placeholder.svg?height=80&width=120&text=News+${i}`}
                width={120}
                height={80}
                alt={`News article ${i}`}
                className="rounded-md object-cover"
              />
              <div className="space-y-1">
                <Link href="#" className="font-medium hover:underline line-clamp-2">
                  {i === 1
                    ? "Global Markets React to New Economic Policies"
                    : i === 2
                      ? "Tech Giants Announce Breakthrough in AI Research"
                      : "Healthcare Innovations Changing Patient Outcomes"}
                </Link>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{i === 1 ? "2 hours ago" : i === 2 ? "5 hours ago" : "1 day ago"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}