import { create } from 'zustand';

export type Product = {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  colors: string[];
  category: string;
  description: string;
};

type ProductState = {
  products: Product[];
  featuredProducts: Product[];
  isLoading: boolean;
  selectedCategory: string;
};

type ProductActions = {
  setProducts: (products: Product[]) => void;
  setFeaturedProducts: (products: Product[]) => void;
  setLoading: (loading: boolean) => void;
  setSelectedCategory: (category: string) => void;
  getProductById: (id: string) => Product | undefined;
  getProductsByCategory: (category: string) => Product[];
};

type ProductStore = ProductState & ProductActions;

// Mock data
const mockProducts: Product[] = [
  {
    id: '1',
    title: '방한용 윈드 브레이커 자켓 - 올리브',
    price: '000,000원',
    originalPrice: '000,000원',
    image: '/api/placeholder/300/300',
    rating: 4,
    reviews: 128,
    colors: ['#6B7280', '#1F2937', '#059669', '#DC2626'],
    category: 'outerwear',
    description: '스타일과 실용성을 모두 갖춘 고품질 방한 재킷입니다.'
  },
  {
    id: '2',
    title: '프리미엄 울 블렌드 코트',
    price: '000,000원',
    originalPrice: '000,000원',
    image: '/api/placeholder/300/300',
    rating: 5,
    reviews: 89,
    colors: ['#374151', '#6B7280', '#1F2937'],
    category: 'outerwear',
    description: '따뜻하고 스타일리시한 울 블렌드 코트입니다.'
  },
  {
    id: '3',
    title: '캐주얼 데일리 후드티',
    price: '000,000원',
    originalPrice: '000,000원',
    image: '/api/placeholder/300/300',
    rating: 4,
    reviews: 256,
    colors: ['#111827', '#6B7280', '#DC2626'],
    category: 'hoodies',
    description: '편안한 착용감의 데일리 후드티입니다.'
  },
  {
    id: '4',
    title: '스트리트 스타일 맨투맨',
    price: '000,000원',
    originalPrice: '000,000원',
    image: '/api/placeholder/300/300',
    rating: 4,
    reviews: 167,
    colors: ['#1F2937', '#6B7280', '#059669'],
    category: 'sweatshirts',
    description: '모던한 디자인의 스트리트 스타일 맨투맨입니다.'
  },
];

const useProductStore = create<ProductStore>((set, get) => ({
  products: mockProducts,
  featuredProducts: mockProducts.slice(0, 4),
  isLoading: false,
  selectedCategory: 'all',

  setProducts: (products) => set({ products }),
  
  setFeaturedProducts: (products) => set({ featuredProducts: products }),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  getProductById: (id) => {
    const { products } = get();
    return products.find(product => product.id === id);
  },
  
  getProductsByCategory: (category) => {
    const { products } = get();
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
  },
}));

export default useProductStore;