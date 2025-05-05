export class CreateProductDto {
  name: string;
  slug: string;
  short_description: string;
  full_description: string;
  seller_id: number;
  brand_id: number;
  status: string;
  detail: {
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    materials: string;
    country_of_origin: string;
    warranty_info: string;
    care_instructions: string;
    additional_info: {
      assembly_required: boolean;
      assembly_time: string;
    };
  };
  price: {
    base_price: number;
    sale_price: number;
    cost_price: number;
    currency: string;
    tax_rate: number;
  };
  categories: {
    category_id: number;
    is_primary: boolean;
  }[];
  option_groups: {
    name: string;
    display_order: number;
    options: {
      name: string;
      additional_price: number;
      sku: string;
      stock: number;
      display_order: number;
    }[];
  }[];
  images: {
    url: string;
    alt_text: string;
    is_primary: boolean;
    display_order: number;
    option_id: number | null;
  }[];
  tags: number[];
}
