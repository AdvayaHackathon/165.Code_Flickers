import { useState } from 'react';
import { heritageData } from '../data/heritage';
import { Link } from 'react-router-dom';

export function Explore() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredHeritage = selectedCategory === 'all' 
    ? heritageData 
    : heritageData.filter(h => h.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Explore Karnataka</h1>
        <p className="text-xl text-gray-600 mb-8">Discover the rich cultural heritage of Karnataka</p>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('place')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'place' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Places
          </button>
          <button
            onClick={() => setSelectedCategory('culture')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'culture' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Culture
          </button>
          <button
            onClick={() => setSelectedCategory('festival')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'festival' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Festivals
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHeritage.map((item) => (
            <Link 
              key={item.id} 
              to={`/heritage/${item.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-white text-xl font-semibold">{item.name}</h2>
                  <p className="text-white/80 text-sm">{item.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}