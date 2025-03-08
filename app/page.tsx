
import NewsletterSignup from "@/components/newsletter-signup"
import Header from '@/components/header'
import Footer from '@/components/footer'
import LatestNewsBlock from '@/components/latest-news-block' 
import ArticlesTopicsGrid from "@/components/articles-topics-grid"
export default function Home() {
  return (

    <div className="flex justify-center">
        <div className="flex min-h-screen flex-col">
        
        <Header />
        <main className="flex-1">
         
          <LatestNewsBlock />
          
          <ArticlesTopicsGrid />
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

          
        </main>
        <Footer />
      </div>
    </div>
  )
}

