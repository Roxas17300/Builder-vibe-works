import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Rénovation complète",
    category: "Couverture",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9453fded3ea34b43b1f59fe13d5a1967%2F86b18105bdb345b4a28654c626b156d3",
  },
  {
    id: 2,
    title: "Entretien toiture - Bezouce",
    category: "Entretien",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9453fded3ea34b43b1f59fe13d5a1967%2F129185d563914cc39495d92de2deb205",
  },
  {
    id: 3,
    title: "Entretien de gouttières",
    category: "Entretien",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9453fded3ea34b43b1f59fe13d5a1967%2F53e0f8ddd8b44975b5547494c3310975",
  },
  {
    id: 4,
    title: "Toiture traditionnelle",
    category: "Couverture",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9453fded3ea34b43b1f59fe13d5a1967%2Fa56ff7a66b3444c19e54e2b8e1b0c397",
  },
  {
    id: 5,
    title: "Réparation d'urgence - Avignon",
    category: "Dépannage",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9453fded3ea34b43b1f59fe13d5a1967%2F4b17ffcae9c447e799f2c26a658f757a",
  },
  {
    id: 6,
    title: "Isolation moderne - Montpellier",
    category: "Couverture",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9453fded3ea34b43b1f59fe13d5a1967%2F6d94b9f6f77f4fdfbbb565013a19a948",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("Tous");

  const categories = [
    "Tous",
    "Couverture",
    "Zinguerie",
    "Entretien",
    "Dépannage",
  ];

  const filteredProjects = projects.filter(
    (project) => filter === "Tous" || project.category === filter,
  );

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredProjects.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredProjects.length - 1 : selectedImage - 1,
      );
    }
  };

  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-averiaserif font-bold text-violet mb-4">
            Nos Réalisations
          </h2>
          <p className="text-lg font-lato text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez quelques-unes de nos réalisations récentes dans le Gard et
            les départements limitrophes.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-montserrat font-medium transition-colors duration-300 ${
                  filter === category
                    ? "bg-violet text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-montserrat font-semibold text-lg mb-1">
                    {project.title}
                  </h3>
                  <p className="font-lato text-sm text-gray-200">
                    {project.category}
                  </p>
                </div>
                <div className="absolute top-6 right-6">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={filteredProjects[selectedImage].image}
                alt={filteredProjects[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
                <h3 className="font-montserrat font-semibold text-xl mb-1">
                  {filteredProjects[selectedImage].title}
                </h3>
                <p className="font-lato text-gray-200">
                  {filteredProjects[selectedImage].category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
