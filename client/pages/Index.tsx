import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { Gallery } from "../components/Gallery";
import { Testimonials } from "../components/Testimonials";
import { Instagram } from "../components/Instagram";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        id="accueil"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2F9453fded3ea34b43b1f59fe13d5a1967%2F5609f064e8ec482e9a0bac473f6a8f26)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-averiaserif font-bold mb-6 leading-tight">
            R'TOITURE
          </h1>
          <p className="text-xl md:text-2xl font-montserrat font-semibold mb-4">
            Artisan couvreur zingueur dans le Gard
          </p>
          <p className="text-lg font-lato mb-12 max-w-3xl mx-auto leading-relaxed">
            Plus de 15 ans d'expertise au service de vos projets de toiture.
            Couverture, zinguerie, pose de Velux et dépannage d'urgence dans
            tout le département du Gard.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
            <a
              href="#services"
              className="bg-copper text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-copper-dark transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Voir nos services</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="bg-violet text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-violet-dark transition-all duration-300 flex items-center space-x-2"
            >
              <span>Devis gratuit</span>
            </a>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/rtoiture30/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg font-montserrat font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>Suivez nous</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9453fded3ea34b43b1f59fe13d5a1967%2F688dc7a51d8044ddacdf2de149c31b05"
                alt="Assurance décennale"
                className="w-20 h-20 mb-4 object-contain"
              />
              <h3 className="font-montserrat font-semibold text-lg text-gray-900 mb-2">
                Assurance décennale
              </h3>
              <p className="font-lato text-gray-600">
                Vos travaux couverts pendant 10 ans
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9453fded3ea34b43b1f59fe13d5a1967%2Fae6f0123119e4c2da0cf9c83ded4e119"
                alt="Artisan RGE Qualibat"
                className="w-20 h-20 mb-4 object-contain"
              />
              <h3 className="font-montserrat font-semibold text-lg text-gray-900 mb-2">
                Artisan RGE Qualibat
              </h3>
              <p className="font-lato text-gray-600">
                Certifications reconnues
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-violet-light rounded-full p-4 mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-gray-900 mb-2">
                Intervention rapide
              </h3>
              <p className="font-lato text-gray-600">
                Dépannage d'urgence&nbsp;
              </p>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Gallery />
      <Testimonials />
      <Instagram />
      <ContactForm />
      <Footer />
    </div>
  );
}
