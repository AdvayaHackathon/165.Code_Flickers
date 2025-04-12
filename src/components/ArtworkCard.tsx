import { Link } from 'react-router-dom';
import { Artwork } from '../types';

interface ArtworkCardProps {
  art: Artwork;
}

export function ArtworkCard({ art }: ArtworkCardProps) {
  return (
    <Link to={`/artwork/${art.id}`}>
      <div className="group">
        <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
          <img
            src={art.image}
            alt={art.title}
            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="mt-3">
          <h2 className="font-semibold text-lg group-hover:text-blue-600 transition">{art.title}</h2>
          <p className="text-sm text-gray-600">{art.artist}, {art.year}</p>
          <p className="text-xs text-gray-500 mt-1">{art.museum}</p>
        </div>
      </div>
    </Link>
  );
}