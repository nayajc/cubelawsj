# 김민수 변호사 웹사이트

세련된 디자인의 변호사 전문 웹사이트입니다. 상담 예약, AI 챗봇, 반응형 디자인을 포함한 완전한 웹사이트입니다.

## 🚀 주요 기능

### ✅ 완료된 기능
- **반응형 디자인**: 모바일과 데스크탑에 최적화
- **세련된 UI/UX**: 파란색 계통의 현대적 디자인
- **네비게이션**: 고정 헤더와 부드러운 스크롤
- **변호사 소개**: 경력과 전문분야 소개
- **전문분야 섹션**: 6가지 주요 법무 분야
- **상담 예약**: 구글 캘린더 연동 (설정 필요)
- **AI 챗봇**: 법률 상담 챗봇 기능
- **연락처 정보**: 주소, 전화, 이메일, 영업시간
- **애니메이션**: 스크롤 애니메이션과 인터랙션
- **통계 카운터**: 경력 연수, 성공 사례, 고객 만족도

### 🎨 디자인 특징
- **색상**: 파란색 계통 (#1e3a8a, #3b82f6, #06b6d4)
- **폰트**: Noto Sans KR (한글 최적화)
- **아이콘**: Font Awesome 6.0
- **그라디언트**: 현대적인 그라디언트 효과
- **그림자**: 부드러운 그림자 효과
- **호버 효과**: 인터랙티브한 호버 애니메이션

## 📁 파일 구조

```
cubelawsj/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 기능
├── vercel.json         # Vercel 배포 설정
└── README.md           # 프로젝트 설명서
```

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - CSS Grid & Flexbox
  - CSS Variables (Custom Properties)
  - 반응형 디자인
  - 애니메이션 & 트랜지션
- **JavaScript (ES6+)**:
  - DOM 조작
  - 이벤트 핸들링
  - Intersection Observer API
  - 챗봇 기능
- **외부 라이브러리**:
  - Font Awesome (아이콘)
  - Google Fonts (Noto Sans KR)

## 🚀 배포 방법

### Vercel 배포 (권장)

1. **GitHub에 코드 푸시**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Vercel 연결**
   - [Vercel](https://vercel.com)에 가입
   - GitHub 저장소 연결
   - 자동 배포 설정

3. **도메인 설정** (선택사항)
   - Vercel 대시보드에서 커스텀 도메인 설정

### 로컬 개발

1. **파일 다운로드**
   ```bash
   git clone [your-repository-url]
   cd cubelawsj
   ```

2. **로컬 서버 실행**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```

3. **브라우저에서 확인**
   ```
   http://localhost:8000
   ```

## ⚙️ 설정 방법

### 1. 구글 캘린더 연동

`index.html` 파일의 147-153번째 줄에서 구글 캘린더 설정을 변경하세요:

```html
<iframe 
    src="https://calendar.google.com/calendar/embed?src=YOUR-EMAIL%40gmail.com&ctz=Asia%2FSeoul&mode=WEEK&bgcolor=%23ffffff&color=%23039BE5&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
    style="border-width:0" 
    width="100%" 
    height="400" 
    frameborder="0" 
    scrolling="no">
</iframe>
```

**설정 단계:**
1. [Google Calendar](https://calendar.google.com)에 로그인
2. 설정 → 캘린더 공유 → 공개 URL 복사
3. `YOUR-EMAIL@gmail.com` 부분을 실제 이메일로 변경

### 2. 연락처 정보 수정

`index.html` 파일에서 다음 정보들을 실제 정보로 변경:

- 변호사 이름: "김민수" → 실제 이름
- 전화번호: "02-1234-5678" → 실제 전화번호
- 이메일: "contact@lawyer-kim.com" → 실제 이메일
- 주소: "서울시 강남구 테헤란로 123" → 실제 주소

### 3. 챗봇 응답 수정

`script.js` 파일의 `chatbotResponses` 객체에서 챗봇 응답을 수정할 수 있습니다.

## 📱 반응형 지원

- **데스크탑**: 1200px 이상
- **태블릿**: 768px - 1199px
- **모바일**: 767px 이하

## 🎯 성능 최적화

- **이미지 최적화**: WebP 포맷 사용 권장
- **폰트 최적화**: Google Fonts CDN 사용
- **CSS 최적화**: CSS Variables 활용
- **JavaScript 최적화**: 이벤트 위임 사용

## 🔧 커스터마이징

### 색상 변경
`styles.css` 파일의 `:root` 섹션에서 CSS 변수를 수정:

```css
:root {
    --primary-color: #1e3a8a;    /* 메인 파란색 */
    --primary-light: #3b82f6;    /* 밝은 파란색 */
    --accent-color: #06b6d4;     /* 강조색 */
    /* ... */
}
```

### 폰트 변경
`index.html`의 Google Fonts 링크를 수정:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT:wght@300;400;500;700&display=swap" rel="stylesheet">
```

## 📞 지원

문제가 있거나 추가 기능이 필요하시면 이슈를 등록해 주세요.

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

**개발자**: AI Assistant  
**최종 업데이트**: 2024년 12월
