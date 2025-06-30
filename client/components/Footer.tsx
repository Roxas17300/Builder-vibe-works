import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-averiaserif font-bold text-copper mb-6">
              R'TOITURE
            </h3>
            <p className="font-lato text-gray-300 mb-6 leading-relaxed">
              Artisan couvreur zingueur depuis plusieurs années dans le Gard.
              Expertise, qualité et service client au cœur de notre métier.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-copper transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-copper transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-copper" />
                <div className="font-lato">06 77 06 15 35</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-copper" />
                <p className="font-lato">contact@rtoiture.fr</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-copper" />
                <div>
                  <p className="font-lato">Gard (30)</p>
                  <p className="font-lato text-sm text-gray-400">
                    et départements limitrophes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-6">
              Nos Services
            </h4>
            <ul className="space-y-3 font-lato">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-copper transition-colors"
                >
                  Couverture
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-copper transition-colors"
                >
                  Zinguerie
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-copper transition-colors"
                >
                  Entretien de toiture
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-copper transition-colors"
                >
                  Dépannage d'urgence
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-copper transition-colors"
                >
                  Devis gratuit
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Legal */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-6">
              Horaires
            </h4>
            <div className="space-y-3 font-lato text-gray-300 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-copper" />
                <div>
                  <p>Lun - Ven : 9h00 - 17h00</p>
                  <p>Sam : 9h00 - 12h00</p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-montserrat font-medium mb-3">Liens utiles</h5>
              <ul className="space-y-2 font-lato text-sm">
                <li>
                  <a
                    href="/mentions-legales"
                    className="text-gray-400 hover:text-copper transition-colors"
                  >
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a
                    href="/mentions-legales#protection-donnees"
                    className="text-gray-400 hover:text-copper transition-colors"
                  >
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a
                    href="/cgv"
                    className="text-gray-400 hover:text-copper transition-colors"
                  >
                    CGV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-lato text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 R'TOITURE - Tous droits réservés | SIRET : 944 939 560
              00016
            </p>
            <div className="flex items-center space-x-6 text-sm font-lato text-gray-400">
              <span>Assurance décennale</span>
              <span>•</span>
              <span>Qualibat</span>
              <span>•</span>
              <span>Artisan RGE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
