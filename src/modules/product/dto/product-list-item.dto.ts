export class ProductListItemDto {
  id: number;
  name: string;
  slug: string;
  short_description: string;
  base_price: number;
  sale_price: number;
  currency: string;
  primary_image: {
    url: string;
    alt_text: string;
  };
  brand: {
    id: number;
    name: string;
  };
  seller: {
    id: number;
    name: string;
  };
  rating: number;
  review_count: number;
  in_stock: boolean;
  status: string;
  created_at: string;
}
