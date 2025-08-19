import BasicText from '@/shared/components/atoms/texts/BasicText';
import BasicButton from '@/shared/components/atoms/buttons/BasicButton';

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  colors?: string[];
  className?: string;
  onAddToCart?: () => void;
};

export default function ProductCard({
  image,
  title,
  price,
  originalPrice,
  rating,
  reviews,
  colors = [],
  className,
  onAddToCart,
}: ProductCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className || ''}`}>
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <BasicText
          size="sm"
          weight="medium"
          className="line-clamp-2 mb-2"
        >
          {title}
        </BasicText>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-2">
            {renderStars(rating)}
          </div>
          <BasicText size="xs" color="muted">
            ({reviews})
          </BasicText>
        </div>

        {colors.length > 0 && (
          <div className="flex items-center gap-2 mb-3">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BasicText
              size="lg"
              weight="bold"
              color="primary"
            >
              {price}
            </BasicText>
            {originalPrice && (
              <BasicText
                size="sm"
                color="muted"
                className="line-through"
              >
                {originalPrice}
              </BasicText>
            )}
          </div>
          <BasicButton
            size="sm"
            variant="primary"
            onClick={onAddToCart}
          >
            장바구니
          </BasicButton>
        </div>
      </div>
    </div>
  );
}