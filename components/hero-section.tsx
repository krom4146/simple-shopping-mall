import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center min-h-[600px] md:min-h-[700px] text-center py-12">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-balance leading-tight">
              당신의 일상을
              <br />
              특별하게 만드는 순간
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              세련된 감성과 프리미엄 품질이 만나
              <br />
              당신만의 라이프스타일을 완성합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/new">신상품 보기</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent text-slate-600 border-popover-foreground">
                <Link href="/collections">컬렉션 둘러보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
