import { categories } from '../data/artworks';
import { CategoryCard } from './CategoryCard';

export function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Explore Art Collections</h1>
        <p className="text-xl text-gray-600 mb-8">Discover artworks from museums around the world</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}