import { Artwork } from '../types';
import { ArtworkCard } from './ArtworkCard';

interface GalleryProps {
  filteredArtworks: Artwork[];
  title?: string;
}

export function Gallery({ filteredArtworks, title }: GalleryProps) {
  return (
    <div className="px-6 py-8">
      {title && (
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredArtworks.map((art) => (
          <ArtworkCard key={art.id} art={art} />
        ))}
      </div>
      {filteredArtworks.length === 0 && (
        <div className="text-center text-gray-500 py-12">
          No artworks found. Try adjusting your search terms.
        </div>
      )}
    </div>
  );
}