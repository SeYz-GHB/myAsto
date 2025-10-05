import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import asto_logo from '../../../../assets/logoes/asto_logo.png'

const CarouselView = ({ 
  categories,
  category_slug,
  currentIndex,
  itemsPerView,
  canGoPrevious,
  canGoNext,
  goToPrevious,
  goToNext,
  setCurrentIndex,
  whoami
}) => {
  const visibleCategories = categories.slice(currentIndex, currentIndex + itemsPerView);


  return (
    <div>
        <div className="flex items-center justify-center py-4 px-1 md:px-5">
            <button
                onClick={goToPrevious}
                disabled={!canGoPrevious}
                className={`p-2 rounded-full transition-colors duration-200 ${
                    canGoPrevious 
                    ? 'text-gray-700 hover:bg-gray-200 cursor-pointer' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
                >
                <MdChevronLeft className="text-2xl" />
            </button>
    
 
            <div className="flex justify-center gap-5 md:gap-10">
                {categories.length === 0 && (
                <p className="text-center text-gray-500">No categories found.</p>
                )}
                
                {visibleCategories.map((cat) => (
                <div 
                    className={`rounded-[15px] flex flex-col items-center transition-all cursor-pointer ${
                    category_slug === cat.slug 
                        ? "opacity-100" 
                        : "opacity-20"
                    } hover:scale-110 transform duration-300 `} 
                    key={cat.id}
                >
                    <NavLink to={(whoami?.role === 'admin' || whoami?.role === 'seller') ? `/dashboard/category/${cat.slug}/brand/first/products` : `/category/${cat.slug}/brand/first/products`}>
                    <img
                        src={cat.image_url || asto_logo}
                        alt={cat.name}
                        className="w-10 h-10 sm:w-16 sm:h-16 object-cover mb-2 rounded"
                    />
                    </NavLink>
                    <span className="font-medium text-center text-xs sm:text-sm truncate max-w-[80px]">
                    {cat.name}
                    </span>
                </div>
                ))}
          
            </div>
    
            <button
                onClick={goToNext}
                disabled={!canGoNext}
                className={`p-2 rounded-full transition-colors duration-200 ${
                    canGoNext 
                    ? 'text-gray-700 hover:bg-gray-200 cursor-pointer' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
                >
                <MdChevronRight className="text-2xl" />
            </button>
        </div>

        {categories.length > itemsPerView && (
        <div className="flex justify-center gap-2 pb-4">
        {Array.from({ 
            length: Math.ceil(categories.length / itemsPerView) 
        }).map((_, index) => {
            const isActive = Math.floor(currentIndex / itemsPerView) === index;
            return (
            <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                isActive
                    ? 'bg-green-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
                aria-label={`Go to page ${index + 1}`}
            />
            );
        })}
        </div>
        )}      
     
    </div>
  );
};

export default CarouselView;