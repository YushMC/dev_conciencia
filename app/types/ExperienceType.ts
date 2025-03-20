export interface Experience {
  id?: number;
  flyer?: string;
  id_experience_status?: number;
  description: string;
  slug?: string;
  isPublic?: boolean;
  isActive?: boolean;
  isAuthorized?: boolean;
  initDate?: string;
  city?: string;
  state?: string;
  country?: string;
  address?: string;
  phone?: string;
  persons_promo?: number;
  single_price?: number;
  promo_price?: number;
  init_date?: Date;
  lat?: number;
  lng?: number;
  // Agrega otras propiedades si existen en la API
}
