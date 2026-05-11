export interface Producto {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tallas: string[];
  colores: string[];
  stock: number;
  imagenes: string[];
}