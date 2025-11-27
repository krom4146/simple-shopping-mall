import Link from "next/link"
import { Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Maison</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              세련된 감성과 품격있는 디자인으로
              <br />
              당신의 라이프스타일을 완성합니다
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">쇼핑하기</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/new" className="text-muted-foreground hover:text-foreground transition-colors">
                  신상품
                </Link>
              </li>
              <li>
                <Link href="/clothing" className="text-muted-foreground hover:text-foreground transition-colors">
                  의류
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-muted-foreground hover:text-foreground transition-colors">
                  액세서리
                </Link>
              </li>
              <li>
                <Link href="/lifestyle" className="text-muted-foreground hover:text-foreground transition-colors">
                  리빙
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">고객지원</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  배송안내
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">
                  반품/교환
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">회사정보</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  브랜드 스토리
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-muted-foreground hover:text-foreground transition-colors">
                  매장안내
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <p className="text-sm text-muted-foreground text-center">© 2025 Maison. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
