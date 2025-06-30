import { Instagram as InstagramIcon, ExternalLink } from "lucide-react";

export function Instagram() {
  return (
    <section id="instagram" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-averiaserif font-bold text-violet mb-4">
            Suivez nos réalisations
          </h2>
          <p className="text-lg font-lato text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez nos derniers chantiers et actualités sur Instagram
          </p>

          <a
            href="https://www.instagram.com/rtoiture30/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:shadow-xl transition-all duration-300 space-x-3"
          >
            <InstagramIcon className="w-6 h-6" />
            <span>@rtoiture30</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Instagram embed placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 text-center border-2 border-dashed border-gray-300">
            <InstagramIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-montserrat font-semibold text-gray-700 mb-2">
              Flux Instagram
            </h3>
            <p className="font-lato text-gray-500 mb-6">
              Nos dernières réalisations et actualités en direct d'Instagram
            </p>

            {/* Grid of placeholder posts */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-lg opacity-20"
                />
              ))}
            </div>

            <div className="mt-6">
              <a
                href="https://www.instagram.com/rtoiture30/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet hover:text-violet-dark font-montserrat font-medium transition-colors"
              >
                Voir plus sur Instagram →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
