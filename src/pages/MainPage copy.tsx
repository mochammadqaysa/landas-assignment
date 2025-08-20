import { useState } from 'react';
import BasicText from '@/shared/components/atoms/texts/BasicText';
import BasicButton from '@/shared/components/atoms/buttons/BasicButton';
import ProductCard from '@/shared/components/molecules/ProductCard';
import useProductStore from '@/shared/stores/productStore';

export default function MainPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { featuredProducts, products } = useProductStore();

  const heroSlides = [
    {
      image: '/api/placeholder/1200/600',
      title: 'Performance-Ready',
      subtitle: 'Apparel for Work & Beyond',
      description: '최고의 품질과 스타일을 경험하세요'
    },
    {
      image: '/api/placeholder/1200/600',
      title: 'Premium Quality',
      subtitle: 'For Every Occasion',
      description: '일상부터 비즈니스까지 완벽한 스타일'
    }
  ];

  const categories = [
    {
      title: '가볍고 편안함을 주는 시원한 상품',
      subtitle: '계절별 맞춤형 제품',
      products: [
        { image: '/api/placeholder/300/400', title: '가볍고 편안한 후드티', price: '000,000원' },
        { image: '/api/placeholder/300/400', title: '시원한 여름 티셔츠', price: '000,000원' },
        { image: '/api/placeholder/300/400', title: '편안한 조거 팬츠', price: '000,000원' },
        { image: '/api/placeholder/300/400', title: '경량 바람막이', price: '000,000원' }
      ]
    },
    {
      title: '따뜻함 바람막이 따뜻한 옷',
      subtitle: '계절에 어울리는 따뜻한 아이템',
      products: [
        { image: '/api/placeholder/300/400', title: '따뜻한 겨울 코트', price: '000,000원' },
        { image: '/api/placeholder/300/400', title: '방풍 자켓', price: '000,000원' },
        { image: '/api/placeholder/300/400', title: '플리스 후드집업', price: '000,000원' },
        { image: '/api/placeholder/300/400', title: '니트 스웨터', price: '000,000원' }
      ]
    }
  ];

  const greenJackets = Array.from({ length: 8 }, (_, i) => ({
    id: `jacket-${i}`,
    title: '윈터 아웃도어 자켓 울트라라이트 다운 파카 올리브',
    price: '000,000원',
    originalPrice: '000,000원',
    image: '/api/placeholder/300/400',
    rating: 4,
    reviews: 128,
    colors: ['#4A5D23', '#2D3748', '#1A202C', '#718096']
  }));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0">
          <img
            src={heroSlides[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-between h-full px-4 md:px-12">
          {/* Hero Content */}
          <div className="text-white max-w-2xl">
            <BasicText
              as="h1"
              size="4xl"
              weight="bold"
              className="mb-4 leading-tight"
            >
              {heroSlides[currentSlide].title}
            </BasicText>
            <BasicText
              as="h2"
              size="2xl"
              weight="medium"
              className="mb-6 text-gray-200"
            >
              {heroSlides[currentSlide].subtitle}
            </BasicText>
            <BasicText
              size="lg"
              className="mb-8 text-gray-300"
            >
              {heroSlides[currentSlide].description}
            </BasicText>
            <BasicButton
              size="lg"
              className="bg-landas-yellow text-black hover:bg-yellow-500 font-semibold px-8 py-3"
            >
              컬렉션 보기
            </BasicButton>
          </div>

          {/* Hero Image - Person */}
          <div className="hidden md:block">
            <img
              src="/api/placeholder/400/500"
              alt="Model"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-landas-yellow' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((category, index) => (
        <section key={index} className="py-16 px-4 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <BasicText
                as="h2"
                size="3xl"
                weight="bold"
                className="mb-4"
              >
                {category.title}
              </BasicText>
              <BasicText
                size="lg"
                color="secondary"
              >
                {category.subtitle}
              </BasicText>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {category.products.map((product, productIndex) => (
                <div key={productIndex} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <BasicText
                      size="sm"
                      weight="medium"
                      className="line-clamp-2 mb-2"
                    >
                      {product.title}
                    </BasicText>
                    <BasicText
                      size="lg"
                      weight="bold"
                      color="primary"
                    >
                      {product.price}
                    </BasicText>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Green Jackets Section */}
      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <BasicText
              as="h2"
              size="3xl"
              weight="bold"
              className="mb-4"
            >
              윈터 컬렉션이 업데이트 되었습니다.
            </BasicText>
            <BasicText
              size="lg"
              color="secondary"
            >
              따뜻하고 스타일리시한 겨울 아이템으로 완벽하게 준비하세요.
            </BasicText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {greenJackets.slice(0, 4).map((jacket) => (
              <ProductCard
                key={jacket.id}
                image={jacket.image}
                title={jacket.title}
                price={jacket.price}
                originalPrice={jacket.originalPrice}
                rating={jacket.rating}
                reviews={jacket.reviews}
                colors={jacket.colors}
                onAddToCart={() => console.log('Added to cart:', jacket.id)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {greenJackets.slice(4, 8).map((jacket) => (
              <ProductCard
                key={jacket.id}
                image={jacket.image}
                title={jacket.title}
                price={jacket.price}
                originalPrice={jacket.originalPrice}
                rating={jacket.rating}
                reviews={jacket.reviews}
                colors={jacket.colors}
                onAddToCart={() => console.log('Added to cart:', jacket.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="py-16 px-4 md:px-12 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <BasicText
            as="h2"
            size="3xl"
            weight="bold"
            className="mb-6"
          >
            B2B 전문 의류 주문제작!
          </BasicText>
          <BasicText
            size="xl"
            className="mb-8"
          >
            15년 이상의 노하우로 믿고 주문하세요
          </BasicText>
          <BasicText
            size="lg"
            color="secondary"
            className="mb-8"
          >
            사업자 전용 대량 주문부터 소량 주문까지 맞춤 제작이 가능합니다
          </BasicText>
          <BasicButton
            size="lg"
            className="bg-landas-yellow text-black hover:bg-yellow-500 font-semibold px-8 py-3"
          >
            B2B 문의하기
          </BasicButton>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-12 bg-landas-gray">
        <div className="max-w-4xl mx-auto text-center">
          <BasicText
            as="h2"
            size="2xl"
            weight="bold"
            className="mb-4"
          >
            뉴스레터 구독
          </BasicText>
          <BasicText
            size="lg"
            color="secondary"
            className="mb-8"
          >
            최신 컬렉션과 특별 혜택을 가장 먼저 만나보세요
          </BasicText>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-landas-yellow focus:border-transparent"
            />
            <BasicButton
              className="bg-black text-white hover:bg-gray-800 px-6 py-3"
            >
              구독하기
            </BasicButton>
          </div>
        </div>
      </section>
    </div>
  );
}