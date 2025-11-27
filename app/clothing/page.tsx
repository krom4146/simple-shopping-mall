"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Filter, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type Product = {
  id: number
  name: string
  price: string
  priceNum: number
  image: string
  category: string
  subCategory: string
  description: string
}

export default function ClothingPage() {
  // 의류 카테고리 제품 데이터
  const allProducts: Product[] = [
    {
      id: 1,
      name: "실크 블렌드 블라우스",
      price: "198,000",
      priceNum: 198000,
      image: "/elegant-silk-blouse.png",
      category: "의류",
      subCategory: "상의",
      description: "우아한 실크 블렌드 소재의 세련된 블라우스",
    },
    {
      id: 3,
      name: "캐시미어 니트",
      price: "278,000",
      priceNum: 278000,
      image: "/cashmere-knit-sweater.jpg",
      category: "의류",
      subCategory: "상의",
      description: "부드럽고 따뜻한 프리미엄 캐시미어 니트",
    },
    {
      id: 5,
      name: "테일러드 팬츠",
      price: "189,000",
      priceNum: 189000,
      image: "/tailored-pants-women.jpg",
      category: "의류",
      subCategory: "하의",
      description: "완벽한 핏의 클래식 테일러드 팬츠",
    },
    {
      id: 7,
      name: "미니멀 데일리 웨어",
      price: "165,000",
      priceNum: 165000,
      image: "/minimal-daily-wear.jpg",
      category: "의류",
      subCategory: "상의",
      description: "일상 속 편안함을 담은 미니멀 데일리 웨어",
    },
    {
      id: 8,
      name: "엘레강트 패션 컬렉션",
      price: "245,000",
      priceNum: 245000,
      image: "/elegant-fashion-collection.jpg",
      category: "의류",
      subCategory: "원피스",
      description: "시그니처 컬렉션의 엘레강트한 디자인",
    },
    {
      id: 9,
      name: "클래식 트렌치 코트",
      price: "385,000",
      priceNum: 385000,
      image: "/elegant-fashion-collection.jpg",
      category: "의류",
      subCategory: "아우터",
      description: "시즌리스한 클래식 트렌치 코트",
    },
    {
      id: 10,
      name: "베이직 티셔츠",
      price: "89,000",
      priceNum: 89000,
      image: "/minimal-daily-wear.jpg",
      category: "의류",
      subCategory: "상의",
      description: "편안한 착용감의 베이직 티셔츠",
    },
    {
      id: 11,
      name: "슬림핏 슬랙스",
      price: "195,000",
      priceNum: 195000,
      image: "/tailored-pants-women.jpg",
      category: "의류",
      subCategory: "하의",
      description: "모던한 실루엣의 슬림핏 슬랙스",
    },
  ]

  // 필터 상태
  const [sortBy, setSortBy] = useState<string>("default")
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // 서브카테고리 목록
  const subCategories = ["상의", "하의", "아우터", "원피스"]

  // 가격 범위 포맷팅
  const formatPrice = (price: number) => {
    return price.toLocaleString("ko-KR")
  }

  // 필터링 및 정렬된 제품
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts]

    // 서브카테고리 필터
    if (selectedSubCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedSubCategories.includes(product.subCategory)
      )
    }

    // 가격 범위 필터
    filtered = filtered.filter(
      (product) => product.priceNum >= priceRange[0] && product.priceNum <= priceRange[1]
    )

    // 정렬
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.priceNum - b.priceNum)
        break
      case "price-high":
        filtered.sort((a, b) => b.priceNum - a.priceNum)
        break
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name, "ko"))
        break
      default:
        // 기본순 (원래 순서)
        break
    }

    return filtered
  }, [sortBy, selectedSubCategories, priceRange])

  // 서브카테고리 토글
  const toggleSubCategory = (subCategory: string) => {
    setSelectedSubCategories((prev) =>
      prev.includes(subCategory)
        ? prev.filter((cat) => cat !== subCategory)
        : [...prev, subCategory]
    )
  }

  // 필터 초기화
  const resetFilters = () => {
    setSortBy("default")
    setSelectedSubCategories([])
    setPriceRange([0, 500000])
  }

  const hasActiveFilters =
    sortBy !== "default" || selectedSubCategories.length > 0 || priceRange[0] !== 0 || priceRange[1] !== 500000

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 페이지 헤더 섹션 */}
        <section className="py-12 md:py-16 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">의류</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                세련된 감성과 품격있는 디자인의 의류 컬렉션을 만나보세요
              </p>
            </div>
          </div>
        </section>

        {/* 필터 및 정렬 섹션 */}
        <section className="py-8 border-b bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-wrap">
                {/* 모바일 필터 버튼 */}
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="md:hidden">
                      <Filter className="h-4 w-4 mr-2" />
                      필터
                      {hasActiveFilters && (
                        <span className="ml-2 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                          {selectedSubCategories.length +
                            (priceRange[0] !== 0 || priceRange[1] !== 500000 ? 1 : 0)}
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                      <SheetTitle>필터</SheetTitle>
                      <SheetDescription>원하는 조건으로 상품을 필터링하세요</SheetDescription>
                    </SheetHeader>
                    <div className="mt-6 space-y-6">
                      {/* 서브카테고리 필터 */}
                      <div>
                        <h3 className="text-sm font-medium mb-3">카테고리</h3>
                        <div className="space-y-2">
                          {subCategories.map((subCategory) => (
                            <div key={subCategory} className="flex items-center space-x-2">
                              <Checkbox
                                id={subCategory}
                                checked={selectedSubCategories.includes(subCategory)}
                                onCheckedChange={() => toggleSubCategory(subCategory)}
                              />
                              <label
                                htmlFor={subCategory}
                                className="text-sm cursor-pointer"
                              >
                                {subCategory}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 가격 범위 필터 */}
                      <div>
                        <h3 className="text-sm font-medium mb-3">
                          가격 범위
                        </h3>
                        <div className="px-2">
                          <Slider
                            value={priceRange}
                            onValueChange={(value) => setPriceRange(value as [number, number])}
                            min={0}
                            max={500000}
                            step={10000}
                            className="mb-4"
                          />
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{formatPrice(priceRange[0])}원</span>
                            <span>{formatPrice(priceRange[1])}원</span>
                          </div>
                        </div>
                      </div>

                      {/* 필터 초기화 */}
                      {hasActiveFilters && (
                        <Button
                          variant="outline"
                          onClick={resetFilters}
                          className="w-full"
                        >
                          <X className="h-4 w-4 mr-2" />
                          필터 초기화
                        </Button>
                      )}
                    </div>
                  </SheetContent>
                </Sheet>

                {/* 데스크톱 필터 */}
                <div className="hidden md:flex items-center gap-4">
                  <span className="text-sm font-medium">카테고리:</span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {subCategories.map((subCategory) => (
                      <Button
                        key={subCategory}
                        variant={selectedSubCategories.includes(subCategory) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleSubCategory(subCategory)}
                      >
                        {subCategory}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* 가격 범위 (데스크톱) */}
                <div className="hidden md:flex items-center gap-4">
                  <span className="text-sm font-medium">가격:</span>
                  <div className="flex items-center gap-2 w-64">
                    <Slider
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                      min={0}
                      max={500000}
                      step={10000}
                    />
                    <div className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                      {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}원
                    </div>
                  </div>
                </div>
              </div>

              {/* 정렬 선택 */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">정렬:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="정렬 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">기본순</SelectItem>
                    <SelectItem value="price-low">가격 낮은순</SelectItem>
                    <SelectItem value="price-high">가격 높은순</SelectItem>
                    <SelectItem value="name">이름순</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* 활성 필터 표시 및 초기화 (데스크톱) */}
            {hasActiveFilters && (
              <div className="hidden md:flex items-center gap-2 mt-4 pt-4 border-t">
                <span className="text-xs text-muted-foreground">적용된 필터:</span>
                {selectedSubCategories.map((cat) => (
                  <Button
                    key={cat}
                    variant="outline"
                    size="sm"
                    onClick={() => toggleSubCategory(cat)}
                    className="h-6 text-xs"
                  >
                    {cat}
                    <X className="h-3 w-3 ml-1" />
                  </Button>
                ))}
                {(priceRange[0] !== 0 || priceRange[1] !== 500000) && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPriceRange([0, 500000])}
                    className="h-6 text-xs"
                  >
                    가격: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}원
                    <X className="h-3 w-3 ml-1" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="h-6 text-xs ml-auto"
                >
                  모두 초기화
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* 제품 그리드 섹션 */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                총 {filteredProducts.length}개의 상품
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
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
                          <p className="text-xs text-muted-foreground mb-1">
                            {product.subCategory}
                          </p>
                          <h3 className="text-base font-medium mb-2 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                            {product.description}
                          </p>
                          <p className="text-sm font-medium">{product.price}원</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">조건에 맞는 상품이 없습니다.</p>
                <Button variant="outline" onClick={resetFilters}>
                  필터 초기화
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

