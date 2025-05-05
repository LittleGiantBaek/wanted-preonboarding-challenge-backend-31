# 프로젝트 구조 설계

## 1. 전체 폴더 구조 제안

```
src/
├── config/                 # 설정 파일들
├── modules/                # 기능별 모듈
│   ├── product/            # 상품 관련 모듈
│   ├── category/           # 카테고리 관련 모듈
│   ├── brand/              # 브랜드 관련 모듈
│   ├── tag/                # 태그 관련 모듈
│   └── common/             # 공통 모듈
├── shared/                 # 공유 유틸리티
└── main.ts                 # 애플리케이션 진입점
```

## 2. 각 모듈의 내부 구조 예시 (product 모듈)

```
modules/product/
├── dto/                    # Data Transfer Objects
├── entities/               # 데이터베이스 엔티티
├── repositories/           # 데이터베이스 리포지토리
├── services/               # 비즈니스 로직
├── controllers/            # API 엔드포인트
└── product.module.ts       # 모듈 정의
```

## 3. 주요 서비스/클래스 설계

- ProductService: 상품 CRUD
- ProductOptionService: 옵션 관리
- ProductImageService: 이미지 관리
- ProductQueryService: 복합 조회/필터/정렬
- ProductSearchService: 검색

## 4. 데이터베이스 테이블 설계 (요약)

- Product (상품)
- Product_Detail (상품 상세)
- Product_Price (상품 가격)
- Category (카테고리)
- Product_Category (상품-카테고리 매핑)
- Product_Option_Group (옵션 그룹)
- Product_Option (옵션)
- Product_Image (이미지)
- Tag (태그)
- Product_Tag (상품-태그 매핑)
- Brand (브랜드)

## 5. API 엔드포인트 예시

```
/api/v1/products
  GET    /                    # 상품 목록 조회 (필터/정렬)
  POST   /                    # 상품 등록
  GET    /:id                 # 상품 상세 조회
  PUT    /:id                 # 상품 수정
  DELETE /:id                 # 상품 삭제
  GET    /popular             # 인기 상품 조회
  GET    /new                 # 신규 상품 조회
  GET    /search              # 상품 검색

/api/v1/categories
  GET    /                    # 카테고리 목록
  GET    /:id/products        # 카테고리별 상품 목록

/api/v1/brands
  GET    /                    # 브랜드 목록
  GET    /:id/products        # 브랜드별 상품 목록
```

## 6. 성능 및 확장성 고려사항

- 페이지네이션 적용
- 캐싱 전략
- N+1 문제 방지
- 검색 인덱스 최적화

---

이 문서는 README.md의 기능 요구사항과 데이터 모델을 바탕으로 한 설계 구조 요약본입니다. 실제 구현 시 각 모듈/엔티티/서비스의 세부 내용은 프로젝트 상황에 맞게 조정할 수 있습니다. 