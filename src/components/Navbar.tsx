import { Palette, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface NavbarProps {
  onSearch: (term: string) => void;
}

export function Navbar({ onSearch }: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="px-6 py-4 shadow-md flex justify-between items-center bg-white sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <button className="lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <Palette className="w-8 h-8 text-blue-600" />
          <h1 className="text-xl font-bold hidden sm:block">Arts & Culture</h1>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-6 text-gray-600">
        <Link to="/" className="hover:text-black">Explore</Link>
        <Link to="/collections" className="hover:text-black">Collections</Link>
        <Link to="/nearby" className="hover:text-black">Nearby</Link>
      </div>

      <div className="relative">
        {isSearchOpen ? (
          <div className="absolute right-0 top-0 w-64 flex items-center bg-white rounded-md border shadow-sm">
            <input
              type="text"
              placeholder="Search artworks..."
              className="w-full px-4 py-2 rounded-l-md focus:outline-none"
              onChange={(e) => onSearch(e.target.value)}
              autoFocus
            />
            <button 
              className="p-2 hover:bg-gray-100 rounded-r-md"
              onClick={() => setIsSearchOpen(false)}
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        ) : (
          <button 
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>
    </nav>
  );
}