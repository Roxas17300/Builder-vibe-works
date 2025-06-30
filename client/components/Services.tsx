import { Home, Wrench, Sun, AlertCircle } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Couverture",
    description:
      "Installation et rénovation de toitures en tuiles, ardoises, et matériaux modernes. Expertise reconnue dans le Gard.",
  },
  {
    icon: Wrench,
    title: "Zinguerie",
    description:
      "Pose et entretien de gouttières, chéneaux, et évacuations. Travail de précision du zinc et cuivre.",
  },
  {
    icon: Sun,
    title: "Pose de Velux",
    description:
      "Installation de fenêtres de toit pour apporter lumière naturelle et aération à vos combles.",
  },
  {
    icon: AlertCircle,
    title: "Dépannage",
    description:
      "Intervention rapide 7j/7 pour réparations d'urgence. Service de qualité et tarifs transparents.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 flex flex-col">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-averiaserif font-bold text-violet mb-4">
            Nos Services
          </h2>
          <p className="text-lg font-lato text-gray-600 max-w-2xl mx-auto">
            Artisan couvreur zingueur depuis plus de 15 ans, nous mettons notre
            expertise au service de vos projets de toiture dans le Gard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-copper-light rounded-lg mb-6 group-hover:bg-copper transition-colors duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center bg-copper text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-copper-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Obtenir un devis gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
