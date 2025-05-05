import { Controller, Get, Param, Query } from '@nestjs/common';
import { CategoryService } from '../services/category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll(@Query() query: any) {
    return this.categoryService.findAll(query);
  }

  @Get(':id/products')
  findProducts(@Param('id') id: string, @Query() query: any) {
    return this.categoryService.findProducts(+id, query);
  }
}
