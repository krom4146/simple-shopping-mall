import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturedCategories() {
  const categories = [
    {
      title: "시그니처 컬렉션",
      description: "브랜드의 아이덴티티를 담은 특별한 아이템",
      image: "/elegant-fashion-collection.jpg",
      href: "/signature",
    },
    {
      title: "데일리 에센셜",
      description: "일상을 더욱 편안하게 만드는 기본 아이템",
      image: "/minimal-daily-wear.jpg",
      href: "/essentials",
    },
    {
      title: "프리미엄 리빙",
      description: "공간을 아름답게 채우는 라이프스타일 굿즈",
      image: "/luxury-home-decor.jpg",
      href: "/living",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Featured Collections</h2>
          <p className="text-muted-foreground text-lg">큐레이션된 특별한 컬렉션을 만나보세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.title} href={category.href} className="group">
              <Card className="overflow-hidden border-0 shadow-none hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-medium mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
