import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCategories } from "@/components/featured-categories"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}
