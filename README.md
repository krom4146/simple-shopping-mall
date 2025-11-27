[README.md](https://github.com/user-attachments/files/23784775/README.md)
# 🛍️ Simple Shopping Mall

세련된 감성과 품격있는 디자인의 프리미엄 쇼핑몰 프로젝트입니다. Next.js와 TypeScript를 기반으로 제작되었으며, 현대적인 UI/UX를 제공합니다.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ 주요 기능

- 🎨 **모던한 UI/UX**: shadcn/ui 기반의 세련된 디자인
- 🛒 **의류 페이지**: 카테고리별 상품 탐색
- 🔍 **고급 필터 기능**: 
  - 정렬 (기본순, 가격순, 이름순)
  - 서브카테고리 필터 (상의, 하의, 아우터, 원피스)
  - 가격 범위 슬라이더
  - 실시간 필터링
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 지원
- 🌓 **다크 모드**: next-themes를 활용한 테마 전환
- ⚡ **빠른 성능**: Next.js App Router 기반의 최적화된 렌더링

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm, yarn, 또는 pnpm

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/krom4146/simple-shopping-mall.git
   cd simple-shopping-mall
   ```

2. **의존성 설치**
   
   npm을 사용하는 경우:
   ```bash
   npm install
   ```
   
   또는 pnpm을 사용하는 경우:
   ```bash
   pnpm install
   ```
   
   또는 yarn을 사용하는 경우:
   ```bash
   yarn install
   ```

3. **개발 서버 실행**
   
   npm을 사용하는 경우:
   ```bash
   npm run dev
   ```
   
   또는 pnpm을 사용하는 경우:
   ```bash
   pnpm dev
   ```
   
   또는 yarn을 사용하는 경우:
   ```bash
   yarn dev
   ```

4. **브라우저에서 확인**
   
   [http://localhost:3000](http://localhost:3000)을 열어 프로젝트를 확인하세요.

## 📜 사용 가능한 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# ESLint 실행
npm run lint
```

## 📁 프로젝트 구조

```
simple-shopping-mall/
├── app/                      # Next.js App Router
│   ├── clothing/           # 의류 페이지
│   │   └── page.tsx        # 의류 페이지 컴포넌트 (필터 기능 포함)
│   ├── globals.css         # 전역 스타일
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 홈페이지
│
├── components/              # React 컴포넌트
│   ├── ui/                 # shadcn/ui 컴포넌트 (50+ 개)
│   ├── featured-categories.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── product-grid.tsx
│   └── theme-provider.tsx
│
├── hooks/                   # 커스텀 훅
│   ├── use-mobile.ts
│   └── use-toast.ts
│
├── lib/                     # 유틸리티 함수
│   └── utils.ts
│
├── public/                  # 정적 파일 (이미지, 아이콘 등)
│
└── styles/                  # 추가 스타일 파일
```

## 🛠️ 기술 스택

### 프론트엔드
- **Next.js 16.0.3** - React 프레임워크 (App Router)
- **React 19.2.0** - UI 라이브러리
- **TypeScript 5.0** - 타입 안정성
- **Tailwind CSS 4.1.9** - 유틸리티 기반 CSS 프레임워크

### UI 컴포넌트
- **shadcn/ui** - Radix UI 기반의 고품질 컴포넌트 라이브러리
- **Lucide React** - 아이콘 라이브러리
- **next-themes** - 다크 모드 지원

### 주요 라이브러리
- **react-hook-form** - 폼 관리
- **zod** - 스키마 검증
- **date-fns** - 날짜 처리
- **recharts** - 차트 라이브러리
- **sonner** - 토스트 알림

## 🎯 주요 페이지

### 홈페이지 (`/`)
- 히어로 섹션
- 추천 카테고리
- 신상품 그리드

### 의류 페이지 (`/clothing`)
- 의류 카테고리 상품 목록
- 고급 필터 기능:
  - 정렬 옵션 (기본순, 가격 낮은순, 가격 높은순, 이름순)
  - 서브카테고리 필터 (상의, 하의, 아우터, 원피스)
  - 가격 범위 슬라이더 (0원 ~ 50만원)
- 반응형 그리드 레이아웃
- 모바일: Sheet 사이드바 필터
- 데스크톱: 인라인 필터 UI

## 🎨 디자인 시스템

이 프로젝트는 **shadcn/ui**의 "New York" 스타일을 사용하며, 다음 특징을 가지고 있습니다:

- **기본 색상**: Neutral
- **CSS 변수**: 활성화됨
- **아이콘 라이브러리**: Lucide React
- **폰트**: Cormorant Garamond (Google Fonts)

## 📦 의존성 관리

이 프로젝트는 **pnpm**을 사용하지만, npm과 yarn도 지원합니다.

- `pnpm-lock.yaml` - pnpm 잠금 파일
- `package-lock.json` - npm 잠금 파일

## 🔧 환경 설정

프로젝트는 추가적인 환경 변수 설정 없이 바로 실행 가능합니다.

## 📝 라이선스

이 프로젝트는 개인 프로젝트입니다.

## 🤝 기여하기

이슈나 개선 사항이 있으시면 언제든지 Pull Request를 보내주세요!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.

---

**Made with ❤️ using Next.js and TypeScript**

