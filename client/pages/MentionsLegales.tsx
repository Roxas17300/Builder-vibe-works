import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-averiaserif font-bold text-violet mb-8">
            Mentions Légales
          </h1>

          <div className="prose prose-lg max-w-none">
            {/* Identification de l'entreprise */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                1. Identification de l'entreprise
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-lato text-gray-700 mb-2">
                  <strong>Dénomination sociale :</strong> R'TOITURE
                </p>
                <p className="font-lato text-gray-700 mb-2">
                  <strong>SIRET :</strong> 944 939 560 00016
                </p>
                <p className="font-lato text-gray-700 mb-2">
                  <strong>Forme juridique :</strong> Entreprise individuelle
                </p>
                <p className="font-lato text-gray-700 mb-2">
                  <strong>Secteur d'activité :</strong> Travaux de couverture et
                  de zinguerie
                </p>
                <p className="font-lato text-gray-700 mb-2">
                  <strong>Zone d'intervention :</strong> Gard (30) et
                  départements limitrophes
                </p>
                <p className="font-lato text-gray-700 mb-2">
                  <strong>Email :</strong> contact@rtoiture.fr
                </p>
                <p className="font-lato text-gray-700">
                  <strong>Téléphone :</strong> 06 77 06 15 35
                </p>
              </div>
            </section>

            {/* Responsable de la publication */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                2. Responsable de la publication
              </h2>
              <p className="font-lato text-gray-700">
                Le responsable de la publication du site internet R'TOITURE est
                le dirigeant de l'entreprise.
              </p>
            </section>

            {/* Hébergement */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                3. Hébergement du site
              </h2>
              <p className="font-lato text-gray-700">
                Ce site est hébergé par OVHcloud.
                <br />
                2 rue Kellermann
                <br />
                59100 Roubaix
                <br />
                France
              </p>
            </section>

            {/* Assurance */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                4. Assurance responsabilité civile professionnelle
              </h2>
              <p className="font-lato text-gray-700 mb-4">
                R'TOITURE est couverte par une assurance responsabilité civile
                professionnelle et décennale conformément à la réglementation en
                vigueur.
              </p>
              <div className="bg-violet-50 p-4 rounded-lg">
                <p className="font-lato text-gray-700">
                  <strong>Assurance décennale :</strong> Garantie des travaux de
                  construction pendant 10 ans selon l'article 1792 du Code civil
                </p>
              </div>
            </section>

            {/* Qualifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                5. Qualifications professionnelles
              </h2>
              <ul className="list-disc list-inside font-lato text-gray-700 space-y-2">
                <li>
                  Artisan certifié RGE (Reconnu Garant de l'Environnement)
                </li>
                <li>Qualification Qualibat</li>
                <li>Couvreur zingueur professionnel</li>
              </ul>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                6. Propriété intellectuelle
              </h2>
              <p className="font-lato text-gray-700 mb-4">
                L'ensemble de ce site relève de la législation française et
                internationale sur le droit d'auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés, y
                compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
              <p className="font-lato text-gray-700">
                La reproduction de tout ou partie de ce site sur un support
                électronique quel qu'il soit est formellement interdite sauf
                autorisation expresse du directeur de la publication.
              </p>
            </section>

            {/* Protection des données */}
            <section id="protection-donnees" className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                7. Protection des données personnelles
              </h2>
              <p className="font-lato text-gray-700 mb-4">
                Conformément à la loi "Informatique et Libertés" du 6 janvier
                1978 modifiée et au Règlement Général sur la Protection des
                Données (RGPD), vous disposez d'un droit d'accès, de
                rectification, de suppression et d'opposition aux données
                personnelles vous concernant.
              </p>
              <p className="font-lato text-gray-700 mb-4">
                Les informations recueillies via le formulaire de contact sont
                utilisées uniquement pour répondre à votre demande et ne sont en
                aucun cas transmises à des tiers.
              </p>
              <p className="font-lato text-gray-700">
                Pour exercer vos droits, vous pouvez nous contacter à l'adresse
                : <span className="text-violet">contact@rtoiture.fr</span>
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                8. Cookies
              </h2>
              <p className="font-lato text-gray-700">
                Ce site peut utiliser des cookies techniques nécessaires à son
                bon fonctionnement. Aucun cookie de traçage ou publicitaire
                n'est utilisé sans votre consentement préalable.
              </p>
            </section>

            {/* Liens externes */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                9. Liens vers d'autres sites
              </h2>
              <p className="font-lato text-gray-700">
                Notre site peut contenir des liens vers d'autres sites internet.
                Nous ne pouvons être tenus responsables du contenu de ces sites
                externes ni de leur politique de confidentialité.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                10. Contact
              </h2>
              <p className="font-lato text-gray-700 mb-4">
                Pour toute question concernant ces mentions légales, vous pouvez
                nous contacter :
              </p>
              <div className="bg-copper-light bg-opacity-10 p-4 rounded-lg">
                <p className="font-lato text-gray-700 mb-2">
                  <strong>Email :</strong> contact@rtoiture.fr
                </p>
                <p className="font-lato text-gray-700 mb-2">
                  <strong>Téléphone :</strong> 06 77 06 15 35
                </p>
                <p className="font-lato text-gray-700">
                  <strong>Horaires :</strong> Lundi-Vendredi 9h00-17h00, Samedi
                  9h00-12h00
                </p>
              </div>
            </section>

            <div className="border-t pt-6 mt-8">
              <p className="font-lato text-gray-500 text-sm">
                Dernière mise à jour : Janvier 2025
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
