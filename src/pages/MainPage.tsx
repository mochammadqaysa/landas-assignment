import { useState } from 'react';
import BasicText from '@/shared/components/atoms/texts/BasicText';
import ProductCard from '@/shared/components/molecules/ProductCard';

export default function MainPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/assets/images/hero.png',
      title: 'Performance-Ready',
      subtitle: 'Apparel for Work & Beyond',
      description: '스타일리시한 아우터 재킷을 경험해보세요'
    },
    {
      image: '/assets/images/hero.png',
      title: 'Premium Quality',
      subtitle: 'For Every Occasion',
      description: '일상부터 비즈니스까지 완벽한 스타일'
    }
  ];

  const categories = [
    {
      title: '가벼고 편안함을 주는 시원한 상품',
      subtitle: '계절별 맞춤형 제품',
      products: [
        { image: '/assets/images/model1.png', title: '카테고리명 카테고리명 줄 카테고리명', price: '' },
        { image: '/assets/images/model2.png', title: '카테고리명 카테고리명 줄 카테고리명', price: '' },
        { image: '/assets/images/model3.png', title: '카테고리명 카테고리명 줄 카테고리명', price: '' },
        { image: '/assets/images/hero-model.png', title: '카테고리명 카테고리명 줄 카테고리명', price: '' }
      ]
    }
  ];

  const greenJackets = Array.from({ length: 8 }, (_, i) => ({
    id: `jacket-${i}`,
    title: '윈터 아웃도어 자켓 울트라라이트 다운 파카 올리브',
    price: '000,000원',
    originalPrice: '000,000원',
    image: '/assets/images/catalog.png',
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
      <section className="relative h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroSlides[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 flex items-center h-full w-full px-6 md:px-16">
          {/* Hero Content - Right side */}
          <div className="text-white max-w-lg ml-auto text-right">
            <BasicText
              as="h1"
              size="4xl"
              weight="bold"
              className="mb-2 leading-tight text-gray-200 font-zen-dots"
            >
              Performance-Ready
            </BasicText>
            <BasicText
              as="h2"
              size="2xl"
              weight="normal"
              className="mb-6 text-white font-zen-dots"
            >
              Apparel for Work & Beyond
            </BasicText>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-2 transition-all"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators - Line style */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 transition-all ${
                currentSlide === index 
                  ? 'w-8 bg-landas-yellow' 
                  : 'w-6 bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* First Category Section */}
      <section className="py-12 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <BasicText
              as="h2"
              size="xl"
              weight="normal"
              className="mb-2 text-gray-800"
            >
              가벼고 편안함을 주는 시원한 상품
            </BasicText>
          </div>

          {/* Products Grid - 3 regular + 1 large */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* First 3 products */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 flex-1">
              {categories[0].products.slice(0, 3).map((product, productIndex) => (
                <div key={productIndex} className="bg-white rounded-lg overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <BasicText
                      size="sm"
                      weight="normal"
                      className="mb-1 text-gray-800"
                    >
                      {product.title}
                    </BasicText>
                    <BasicText
                      size="sm"
                      weight="normal"
                      color="primary"
                      className="text-gray-600"
                    >
                      {product.price}
                    </BasicText>
                  </div>
                </div>
              ))}
            </div>

            {/* 4th Product - Larger */}
            <div className="lg:w-80">
              <div className="bg-gray-50 rounded-lg overflow-hidden h-full flex flex-col">
                <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-gray-100 flex-1">
                  <img
                    src="/assets/images/hero-model.png"
                    alt="편리한 바람막 아우터"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <BasicText
                    size="sm"
                    weight="medium"
                    className="mb-2 text-gray-800"
                  >
                    쌀쌀한 바람이 부는
                  </BasicText>
                  <BasicText
                    size="xs"
                    color="secondary"
                    className="text-gray-600 mb-2"
                  >
                    가을에 입기 좋은 자켓
                  </BasicText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Jackets Section - First Row */}
      <section className="py-8 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <BasicText
                as="h2"
                size="xl"
                weight="normal"
                className="mb-2 text-gray-800"
              >
                윈터 컬렉션이 업데이트 되었습니다.
              </BasicText>
              <BasicText
                size="sm"
                color="secondary"
                className="text-gray-500"
              >
                따뜻하고 스타일리시한 겨울 아이템으로 완벽하게 준비하세요.
              </BasicText>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
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
                className="shadow-sm"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Green Jackets Section - Second Row */}
      <section className="py-0 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="text-center mb-8">
              <BasicText
                as="h2"
                size="xl"
                weight="normal"
                className="mb-2 text-gray-800"
              >
                윈터 컬렉션이 업데이트 되었습니다.
              </BasicText>
              <BasicText
                size="sm"
                color="secondary"
                className="text-gray-500"
              >
                따뜻하고 스타일리시한 겨울 아이템으로 완벽하게 준비하세요.
              </BasicText>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
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
                className="shadow-sm"
              />
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="py-12 px-4 md:px-12 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <BasicText
            as="h2"
            size="2xl"
            weight="bold"
            className="mb-4 text-white"
          >
            B2B 전문 의류 주문제작!
          </BasicText>
          <BasicText
            size="lg"
            className="mb-6 text-white"
          >
            15년 이상의 노하우로 믿고 주문하세요
          </BasicText>
          <BasicText
            size="sm"
            color="secondary"
            className="mb-8 text-gray-300"
          >
            사업자 전용 대량 주문부터 소량 주문까지 맞춤 제작이 가능합니다
          </BasicText>
        </div>

        {/* Yellow Chat Button */}
        <div className="fixed bottom-6 right-6">
          <button className="bg-landas-yellow text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 4c-1.1 0-2 .9-2 2v4h4v-4c0-1.1-.9-2-2-2z"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 px-4 md:px-12 bg-landas-gray">
        <div className="max-w-4xl mx-auto text-center">
        </div>
      </section>
    </div>
  );
}