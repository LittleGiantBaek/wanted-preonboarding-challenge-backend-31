export class ProductResponseDto {
  id: number;
  name: string;
  slug: string;
  short_description: string;
  full_description: string;
  seller: {
    id: number;
    name: string;
    description: string;
    logo_url: string;
    rating: number;
    contact_email: string;
    contact_phone: string;
  };
  brand: {
    id: number;
    name: string;
    description: string;
    logo_url: string;
    website: string;
  };
  status: string;
  created_at: string;
  updated_at: string;
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
}
