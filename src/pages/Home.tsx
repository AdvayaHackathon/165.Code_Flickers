import { Gallery } from '../components/Gallery';
import { Hero } from '../components/Hero';
import { artworks } from '../data/artworks';

interface HomeProps {
  searchTerm: string;
}

export function Home({ searchTerm }: HomeProps) {
  const filteredArtworks = artworks.filter((art) =>
    art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    art.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    art.museum.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {!searchTerm && <Hero />}
      <Gallery 
        filteredArtworks={filteredArtworks} 
        title={searchTerm ? 'Search Results' : 'Featured Artworks'}
      />
    </div>
  );
}