import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    location: "Nîmes",
    rating: 5,
    text: "Excellent travail de R'TOITURE ! Très professionnel, ponctuel et à l'écoute. La rénovation de notre toit s'est parfaitement déroulée. Je recommande vivement !",
    service: "Rénovation complète",
  },
  {
    id: 2,
    name: "Jean-Pierre Martin",
    location: "Alès",
    rating: 5,
    text: "Intervention rapide pour une fuite d'urgence. Travail soigné et prix correct. Nous avons fait appel à eux une seconde fois pour l'installation de Velux.",
    service: "Dépannage et Velux",
  },
  {
    id: 3,
    name: "Sophie Leclerc",
    location: "Uzès",
    rating: 5,
    text: "Pose de gouttières impeccable ! L'équipe est très compétente et respectueuse. Délais respectés et chantier propre. Parfait du début à la fin.",
    service: "Zinguerie",
  },
  {
    id: 4,
    name: "Michel Rousseau",
    location: "Bagnols-sur-Cèze",
    rating: 5,
    text: "Artisan de confiance ! Devis détaillé, conseils avisés et exécution parfaite. Nous recommandons R'TOITURE les yeux fermés.",
    service: "Couverture",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section id="avis" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-averiaserif font-bold text-violet mb-4">
            Avis Clients
          </h2>
          <p className="text-lg font-lato text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients pensent de nos services. Leur
            satisfaction est notre priorité.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-copper opacity-20" />

            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-xl font-lato text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author info */}
              <div className="border-t pt-6">
                <h4 className="font-montserrat font-semibold text-lg text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="font-lato text-gray-600">
                  {testimonials[currentIndex].location} •{" "}
                  {testimonials[currentIndex].service}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-violet" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="font-lato text-gray-600 mb-6">
            Rejoignez nos clients satisfaits
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-copper text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-copper-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Demander votre devis
          </a>
        </div>
      </div>
    </section>
  );
}
