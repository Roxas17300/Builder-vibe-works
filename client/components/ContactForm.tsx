import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email content
      const emailBody = `
Nouvelle demande de devis R'TOITURE

Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}
      `;

      // Create mailto link
      const mailtoLink = `mailto:contact@rtoiture.fr?subject=Demande de devis - ${formData.name}&body=${encodeURIComponent(emailBody)}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      alert(
        "Merci pour votre demande ! Votre client email va s'ouvrir pour envoyer le message.",
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      alert(
        "Une erreur est survenue. Veuillez réessayer ou nous contacter directement.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-violet">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-averiaserif font-bold text-white mb-4">
            Demandez votre devis gratuit
          </h2>
          <p className="text-lg font-lato text-white max-w-2xl mx-auto">
            Contactez-nous pour obtenir un devis personnalisé et sans engagement
            pour vos travaux de couverture et de zinguerie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="text-white">
            <h3 className="text-2xl font-montserrat font-semibold mb-8">
              Nos coordonnées
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-2">
                    Téléphone
                  </h4>
                  <p className="font-lato text-white">06 77 06 15 35</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-2">Email</h4>
                  <p className="font-lato text-white">contact@rtoiture.fr</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-2">
                    Zone d'intervention
                  </h4>
                  <p className="font-lato text-white">50 km autour de Nîmes</p>
                  <p className="font-lato text-sm text-white">
                    Nîmes, Alès, Uzès, Bagnols-sur-Cèze...
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-2">
                    Horaires
                  </h4>
                  <p className="font-lato text-white">
                    Lun - Ven : 9h00 - 17h00
                  </p>
                  <p className="font-lato text-white">Sam : 9h00 - 12h00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-2">
                    Notre localisation
                  </h4>
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.538558243872!2d4.353896976580353!3d43.84466494002585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ba20036abdf4985%3A0xf455fb13db7b9452!2sR%27toiture!5e0!3m2!1sfr!2sfr!4v1751270211684!5m2!1sfr!2sfr"
                      width="300"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-montserrat font-medium text-gray-700 mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-lato focus:ring-2 focus:ring-violet focus:border-transparent transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-montserrat font-medium text-gray-700 mb-2"
                  >
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-lato focus:ring-2 focus:ring-violet focus:border-transparent transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block font-montserrat font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-lato focus:ring-2 focus:ring-violet focus:border-transparent transition-colors"
                  placeholder="votre@email.fr"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="service"
                  className="block font-montserrat font-medium text-gray-700 mb-2"
                >
                  Type de service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-lato focus:ring-2 focus:ring-violet focus:border-transparent transition-colors"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="couverture">Couverture</option>
                  <option value="zinguerie">Zinguerie</option>
                  <option value="velux">Pose de Velux</option>
                  <option value="depannage">Dépannage</option>
                  <option value="devis">Devis général</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block font-montserrat font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-lato focus:ring-2 focus:ring-violet focus:border-transparent transition-colors resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-copper text-white py-4 px-6 rounded-lg font-montserrat font-semibold hover:bg-copper-dark transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Envoi en cours...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer ma demande</span>
                  </>
                )}
              </button>

              <p className="text-sm font-lato text-gray-500 mt-4 text-center">
                * Champs obligatoires - Nous nous engageons à vous répondre dans
                les 24h
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
