import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "실크 블렌드 블라우스",
      price: "198,000",
      image: "/elegant-silk-blouse.png",
      category: "의류",
    },
    {
      id: 2,
      name: "미니멀 레더 백",
      price: "325,000",
      image: "/minimal-leather-handbag.jpg",
      category: "가방",
    },
    {
      id: 3,
      name: "캐시미어 니트",
      price: "278,000",
      image: "/cashmere-knit-sweater.jpg",
      category: "의류",
    },
    {
      id: 4,
      name: "골드 체인 목걸이",
      price: "145,000",
      image: "/gold-chain-necklace.jpg",
      category: "주얼리",
    },
    {
      id: 5,
      name: "테일러드 팬츠",
      price: "189,000",
      image: "/tailored-pants-women.jpg",
      category: "의류",
    },
    {
      id: 6,
      name: "세라믹 티 세트",
      price: "98,000",
      image: "/ceramic-tea-set.png",
      category: "리빙",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">신상품</h2>
          <p className="text-muted-foreground text-lg">이번 시즌을 위한 새로운 아이템</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group">
              <Card className="overflow-hidden border-0 shadow-none hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden bg-card">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="text-base font-medium mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm font-medium">{product.price}원</p>
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
