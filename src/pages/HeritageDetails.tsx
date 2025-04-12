import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Frame, View } from 'lucide-react';
import { heritageData } from '../data/heritage';
import { ARViewer } from '../components/ARViewer';
import { useState } from 'react';

export function HeritageDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const heritage = heritageData.find((h) => h.id === id);
  const [showAR, setShowAR] = useState(false);

  if (!heritage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">⚠️ Location not found</h2>
          <button
            onClick={() => navigate('/explore')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Return to Explore
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            {showAR && heritage.arModel ? (
              <ARViewer modelUrl={heritage.arModel} />
            ) : (
              <img
                src={heritage.image}
                alt={heritage.name}
                className="w-full rounded-lg shadow-xl"
              />
            )}
            {heritage.arModel && (
              <button
                onClick={() => setShowAR(!showAR)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
              >
                <View className="w-5 h-5" />
              </button>
            )}
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900">{heritage.name}</h1>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>{heritage.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Frame className="w-5 h-5" />
                <span className="capitalize">{heritage.category}</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{heritage.description}</p>
            </div>

            {heritage.arModel && (
              <div className="mt-8">
                <button
                  onClick={() => setShowAR(!showAR)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
                >
                  <View className="w-5 h-5" />
                  {showAR ? 'View Photo' : 'View in 3D'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}