import { Button } from '@/components/ui/button'

import { ArrowRight } from "lucide-react"
import ArticleCard from "@/components/article-card"
export default function ArticlesTopicsGrid(){
  return(
    <section className="bg-muted py-8">
                <div className="container">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold tracking-tight">Trending Topics</h2>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Business
                      </Button>
                      <Button variant="outline" size="sm">
                        Technology
                      </Button>
                      <Button variant="outline" size="sm">
                        Health
                      </Button>
                      <Button variant="outline" size="sm">
                        All
                      </Button>
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <ArticleCard key={i} index={i} />
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <Button variant="outline" className="gap-2">
                      Load More Articles <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
      </section>
  )
}