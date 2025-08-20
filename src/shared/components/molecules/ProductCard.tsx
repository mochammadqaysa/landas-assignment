import BasicText from '@/shared/components/atoms/texts/BasicText';

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
}: ProductCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-3 h-3 ${
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
    <div className={`bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow ${className || ''}`}>
      <div className="aspect-[4/5] overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3">
        <BasicText
          size="xs"
          weight="normal"
          className="line-clamp-2 mb-2 text-gray-800 leading-tight"
        >
          {title}
        </BasicText>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-1">
            {renderStars(rating)}
          </div>
          <BasicText size="xs" color="muted" className="text-gray-400">
            ({reviews})
          </BasicText>
        </div>

        {colors.length > 0 && (
          <div className="flex items-center gap-1 mb-2">
            {colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <BasicText
              size="sm"
              weight="medium"
              color="primary"
              className="text-gray-800"
            >
              {price}
            </BasicText>
            {originalPrice && (
              <BasicText
                size="xs"
                color="muted"
                className="line-through text-gray-400"
              >
                {originalPrice}
              </BasicText>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}