interface Product {
  id?: number;
  title: string;
  price: string;
}

interface Category {
  category: string;
  items: Product[];
}

export type Menu = Category[];
