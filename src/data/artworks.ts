import { Artwork, Category } from '../types';

export const categories: Category[] = [
  {
    id: "paintings",
    name: "Paintings",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988f7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "sculptures",
    name: "Sculptures",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "photography",
    name: "Photography",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800",
  }
];

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    category: "paintings",
    museum: "Museum of Modern Art, New York",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    description: "The Starry Night is an oil on canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an idealized village.",
  },
  {
    id: "2",
    title: "The Scream",
    artist: "Edvard Munch",
    year: "1893",
    category: "paintings",
    museum: "National Gallery, Oslo",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
    description: "The Scream is the popular name given to a composition created by Norwegian Expressionist artist Edvard Munch in 1893. The agonized face in the painting has become one of the most iconic images of art, seen as symbolizing the anxiety of the human condition.",
  },
  {
    id: "3",
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: "1665",
    category: "paintings",
    museum: "Mauritshuis, The Hague",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
    description: "Girl with a Pearl Earring is an oil painting by Dutch Golden Age painter Johannes Vermeer, dated c. 1665. Going by various names over the centuries, it became known by its present title towards the end of the 20th century after the large pearl earring worn by the girl in the painting.",
  },
  {
    id: "4",
    title: "The Thinker",
    artist: "Auguste Rodin",
    year: "1902",
    category: "sculptures",
    museum: "Rodin Museum, Paris",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/The_Thinker%2C_Rodin.jpg/800px-The_Thinker%2C_Rodin.jpg",
    description: "The Thinker is a bronze sculpture by Auguste Rodin, usually placed on a stone pedestal. The work shows a nude male figure of heroic size sitting on a rock with his chin resting on his hand, deep in thought.",
  }
];