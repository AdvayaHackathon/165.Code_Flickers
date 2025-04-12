import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link to={`/category/${category.id}`}>
      <div className="relative group overflow-hidden rounded-lg">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-white text-xl font-semibold p-4">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
}