export class FindAllProductsDto {
  page: number = 1;
  perPage: number = 10;
  sort: string = 'created_at:desc';
  status?: string;
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  seller?: number;
  brand?: number;
  inStock?: boolean;
  search?: string;
}
