import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { Gallery } from "../components/Gallery";
import { Testimonials } from "../components/Testimonials";
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
              "linear-gradient(rgba(114, 35, 122, 0.7), rgba(114, 35, 122, 0.5)), url('https://images.unsplash.com/photo-1558618047-3c8c76c60e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
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

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#services"
              className="bg-copper text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-copper-dark transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Voir nos services</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-white hover:text-violet transition-all duration-300 flex items-center space-x-2"
            >
              <span>Devis gratuit</span>
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
              <div className="bg-violet-light rounded-full p-4 mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-gray-900 mb-2">
                Assurance décennale
              </h3>
              <p className="font-lato text-gray-600">
                Vos travaux couverts pendant 10 ans
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-copper rounded-full p-4 mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
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
                Dépannage d'urgence 7j/7
              </p>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
