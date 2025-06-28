import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Rénovation complète - Nîmes",
    category: "Couverture",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76c60e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Installation Velux - Alès",
    category: "Velux",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Zinguerie moderne - Uzès",
    category: "Zinguerie",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "Toiture traditionnelle - Bagnols",
    category: "Couverture",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Réparation d'urgence - Avignon",
    category: "Dépannage",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "Isolation moderne - Montpellier",
    category: "Couverture",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("Tous");

  const categories = ["Tous", "Couverture", "Zinguerie", "Velux", "Dépannage"];

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
