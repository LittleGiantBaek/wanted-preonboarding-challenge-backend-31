import { Module } from '@nestjs/common';
import { ProductModule } from '@/modules/product/product.module';
import { CategoryModule } from '@/modules/category/category.module';
import { BrandModule } from '@/modules/brand/brand.module';
import { TagModule } from '@/modules/tag/tag.module';
import { ReviewModule } from '@/modules/review/review.module';

@Module({
  imports: [
    ProductModule,
    CategoryModule,
    BrandModule,
    TagModule,
    ReviewModule,
  ],
})
export class AppModule {}
