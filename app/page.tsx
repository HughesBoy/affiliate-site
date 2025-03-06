import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronRight, Clock, ArrowRight } from "lucide-react"
import NewsletterSignup from "@/components/newsletter-signup"
import FeaturedArticle from "@/components/featured-article"
import ArticleCard from "@/components/article-card"

export default function Home() {
  return (

    <div className="flex justify-center">
        <div className="flex min-h-screen flex-col">
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
        <main className="flex-1">
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

          <section className="container py-12 md:py-16">
            <div className="rounded-lg bg-primary/5 p-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Stay Updated with Our Newsletter</h2>
                <p className="text-muted-foreground mb-6">
                  Get the latest news and insights delivered straight to your inbox. No spam, just the content you care
                  about.
                </p>
                <NewsletterSignup />
              </div>
            </div>
          </section>

          <section className="container py-8 md:py-12">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Editor's Picks</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg border">
                  <div className="aspect-[4/3] bg-muted">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Editor's+Pick+${i}`}
                      width={400}
                      height={300}
                      alt={`Editor's pick ${i}`}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-medium text-primary mb-2">
                      {i === 1 ? "ANALYSIS" : i === 2 ? "OPINION" : i === 3 ? "FEATURE" : "INTERVIEW"}
                    </div>
                    <Link href="#" className="font-semibold hover:underline line-clamp-2 mb-2">
                      {i === 1
                        ? "The Future of Remote Work: What's Next?"
                        : i === 2
                          ? "Why Sustainable Investing Matters Now"
                          : i === 3
                            ? "Digital Privacy in the Age of AI"
                            : "Leadership Lessons from Tech Innovators"}
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {i === 1
                        ? "Exploring how companies are adapting to permanent hybrid work models."
                        : i === 2
                          ? "The growing importance of ESG factors in investment decisions."
                          : i === 3
                            ? "How to protect your data in an increasingly connected world."
                            : "Key insights from the founders of today's most successful tech companies."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <footer className="border-t bg-muted/50">
          <div className="container py-8 md:py-12">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">NewsInsight</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Delivering insightful news and analysis on the topics that matter most.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">Facebook</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Politics
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Culture
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Advertise
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Press Kit
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Accessibility
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} NewsInsight. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

