export class UpdateProductDto {
  name?: string;
  slug?: string;
  short_description?: string;
  full_description?: string;
  seller_id?: number;
  brand_id?: number;
  status?: string;
  detail?: any;
  price?: any;
  categories?: any[];
  option_groups?: any[];
  images?: any[];
  tags?: number[];
}
