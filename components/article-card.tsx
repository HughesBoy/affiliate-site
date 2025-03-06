import Link from "next/link"
import Image from "next/image"
import { Clock, User, MessageSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ArticleCardProps {
  index: number
}

export default function ArticleCard({ index }: ArticleCardProps) {
  // Sample data - in a real app, this would come from your CMS or API
  const articles = [
    {
      title: "The Rise of Sustainable Investing in Global Markets",
      excerpt: "How ESG factors are becoming crucial in investment decisions and portfolio management.",
      category: "Business",
      author: "Emma Johnson",
      date: "March 3, 2025",
      comments: 24,
    },
    {
      title: "New Breakthrough in Quantum Computing Announced",
      excerpt:
        "Scientists achieve quantum supremacy with a processor that solves problems beyond classical capabilities.",
      category: "Technology",
      author: "Michael Chen",
      date: "March 2, 2025",
      comments: 42,
    },
    {
      title: "The Future of Remote Healthcare Services",
      excerpt: "Telemedicine adoption accelerates as new technologies improve patient outcomes.",
      category: "Health",
      author: "Sarah Williams",
      date: "March 1, 2025",
      comments: 18,
    },
    {
      title: "Global Supply Chain Challenges Continue to Impact Retailers",
      excerpt: "Major retailers implement new strategies to overcome persistent supply chain disruptions.",
      category: "Business",
      author: "David Rodriguez",
      date: "February 28, 2025",
      comments: 31,
    },
    {
      title: "Cybersecurity Threats Evolve as Work-From-Home Continues",
      excerpt: "Organizations face new security challenges with distributed workforce models.",
      category: "Technology",
      author: "Jennifer Lee",
      date: "February 27, 2025",
      comments: 27,
    },
    {
      title: "New Study Reveals Benefits of Intermittent Fasting",
      excerpt: "Research shows promising health outcomes for specific intermittent fasting protocols.",
      category: "Health",
      author: "Robert Kim",
      date: "February 26, 2025",
      comments: 36,
    },
  ]

  const article = articles[(index - 1) % articles.length]

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
      <div className="aspect-video overflow-hidden">
        <Image
          src={`/placeholder.svg?height=300&width=500&text=Article+${index}`}
          width={500}
          height={300}
          alt={article.title}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="outline">{article.category}</Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <MessageSquare className="mr-1 h-3 w-3" />
            <span>{article.comments}</span>
          </div>
        </div>
        <Link href="#" className="block">
          <h3 className="line-clamp-2 text-lg font-semibold group-hover:text-primary group-hover:underline">
            {article.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs">
          <div className="flex items-center text-muted-foreground">
            <User className="mr-1 h-3 w-3" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

