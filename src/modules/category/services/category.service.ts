import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  findAll(query: any) {
    // TODO: 실제 DB 연동 및 비즈니스 로직 구현
    return {
      success: true,
      data: [],
      message: '카테고리 목록을 성공적으로 조회했습니다.',
    };
  }

  findProducts(id: number, query: any) {
    // TODO: 실제 DB 연동 및 비즈니스 로직 구현
    return {
      success: true,
      data: {
        category: { id },
        items: [],
        pagination: {
          total_items: 0,
          total_pages: 0,
          current_page: 1,
          per_page: 10,
        },
      },
      message: '카테고리 상품 목록을 성공적으로 조회했습니다.',
    };
  }
}
