import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnchorLink } from "./AnchorLink"; // <-- Import relatif ou "@/components/AnchorLink"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F9453fded3ea34b43b1f59fe13d5a1967%2Fee566d10d5ff4d1fb7ab40db58e12f91"
              alt="R'TOITURE Logo"
              className="h-[78px] w-auto mr-3"
            />
            <span className="text-2xl font-averiaserif font-bold text-violet">
              R'TOITURE
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <AnchorLink
              to="/#accueil"
              className="font-montserrat font-medium text-gray-700 hover:text-violet transition-colors"
            >
              Accueil
            </AnchorLink>
            <AnchorLink
              to="/#services"
              className="font-montserrat font-medium text-gray-700 hover:text-violet transition-colors"
            >
              Services
            </AnchorLink>
            <AnchorLink
              to="/#realisations"
              className="font-montserrat font-medium text-gray-700 hover:text-violet transition-colors"
            >
              Réalisations
            </AnchorLink>
            <AnchorLink
              to="/#avis"
              className="font-montserrat font-medium text-gray-700 hover:text-violet transition-colors"
            >
              Avis
            </AnchorLink>
            <AnchorLink
              to="/#instagram"
              className="font-montserrat font-medium text-gray-700 hover:text-violet transition-colors"
            >
              Suivez nous
            </AnchorLink>
            <AnchorLink
              to="/#contact"
              className="font-montserrat font-medium text-gray-700 hover:text-violet transition-colors"
            >
              Contact
            </AnchorLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <AnchorLink
              to="/#contact"
              className="bg-violet text-white px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-violet-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Demander un devis
            </AnchorLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-violet transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <AnchorLink
                to="/#accueil"
                className="font-montserrat font-medium text-gray-700 hover:text-violet transition-colors"
              >
                Accueil
              </AnchorLink>
              <AnchorLink
                to="/#services"
                className="font-montserrat font-medium text-gray-700 hover:text-violet transition-colors"
              >
                Services
              </AnchorLink>
              <AnchorLink
                to="/#realisations"
                className="font-montserrat font-medium text-gray-700 hover:text-violet transition-colors"
              >
                Réalisations
              </AnchorLink>
              <AnchorLink
                to="/#avis"
                className="font-montserrat font-medium text-gray-700 hover:text-violet transition-colors"
              >
                Avis
              </AnchorLink>
              <AnchorLink
                to="/#instagram"
                className="font-montserrat font-medium text-gray-700 hover:text-violet transition-colors"
              >
                Suivez nous
              </AnchorLink>
              <AnchorLink
                to="/#contact"
                className="font-montserrat font-medium text-gray-700 hover:text-violet transition-colors"
              >
                Contact
              </AnchorLink>
              <AnchorLink
                to="/#contact"
                className="bg-violet text-white px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-violet-dark transition-colors duration-300 text-center"
              >
                Demander un devis
              </AnchorLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
