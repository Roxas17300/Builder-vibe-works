import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function CGV() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-averiaserif font-bold text-violet mb-8">
            Conditions Générales de Vente
          </h1>

          <div className="prose prose-lg max-w-none">
            {/* Préambule */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                Préambule
              </h2>
              <p className="font-lato text-gray-700 mb-4">
                Les présentes Conditions Générales de Vente (CGV) régissent les
                relations contractuelles entre R'TOITURE (SIRET : 944 939 560
                00016) et ses clients dans le cadre de la fourniture de services
                de couverture, zinguerie, pose de Velux et dépannage.
              </p>
              <p className="font-lato text-gray-700">
                Toute commande implique l'acceptation sans réserve des présentes
                conditions générales de vente.
              </p>
            </section>

            {/* Article 1 - Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                Article 1 - Services proposés
              </h2>
              <p className="font-lato text-gray-700 mb-4">
                R'TOITURE propose les services suivants :
              </p>
              <ul className="list-disc list-inside font-lato text-gray-700 space-y-2 mb-4">
                <li>Travaux de couverture (pose, rénovation, réparation)</li>
                <li>
                  Travaux de zinguerie (gouttières, chéneaux, évacuations)
                </li>
                <li>Installation et pose de fenêtres de toit (Velux)</li>
                <li>Dépannage d'urgence</li>
                <li>Entretien et maintenance de toiture</li>
              </ul>
              <p className="font-lato text-gray-700">
                Zone d'intervention : Gard (30) et départements limitrophes dans
                un rayon de 50 km autour de Nîmes.
              </p>
            </section>

            {/* Article 2 - Devis */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                Article 2 - Devis et commandes
              </h2>
              <p className="font-lato text-gray-700 mb-4">
                Tout devis établi par R'TOITURE est gratuit et valable 30 jours
                à compter de sa date d'émission, sauf mention contraire.
              </p>
              <p className="font-lato text-gray-700 mb-4">
                Le devis signé et retourné par le client vaut bon de commande.
                Aucun travail ne sera entrepris sans l'accord écrit du client.
              </p>
              <div className="bg-violet-50 p-4 rounded-lg">
                <p className="font-lato text-gray-700">
                  <strong>Important :</strong> Tout devis non signé dans les
                  délais impartis devra faire l'objet d'une nouvelle étude
                  tarifaire.
                </p>
              </div>
            </section>

            {/* Article 3 - Prix */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                Article 3 - Prix et modalités de paiement
              </h2>
              <h3 className="text-xl font-montserrat font-medium text-gray-800 mb-3">
                3.1 Prix
              </h3>
              <p className="font-lato text-gray-700 mb-4">
                Les prix sont exprimés en euros toutes taxes comprises (TTC).
                Ils comprennent la fourniture des matériaux, la main-d'œuvre et
                les frais de déplacement dans la zone d'intervention.
              </p>

              <h3 className="text-xl font-montserrat font-medium text-gray-800 mb-3">
                3.2 Modalités de paiement
              </h3>
              <ul className="list-disc list-inside font-lato text-gray-700 space-y-2 mb-4">
                <li>
                  Un acompte de 30% pourra être demandé à la signature du devis
                </li>
                <li>
                  Le solde est payable à la fin des travaux, sur présentation de
                  la facture
                </li>
                <li>
                  Délai de paiement : 30 jours à compter de la date de facture
                </li>
                <li>
                  Moyens de paiement acceptés : chèque, virement, espèces (dans
                  la limite légale)
                </li>
              </ul>

              <div className="bg-copper-light bg-opacity-10 p-4 rounded-lg">
                <p className="font-lato text-gray-700">
                  <strong>Pénalités de retard :</strong> En cas de retard de
                  paiement, des pénalités au taux de 3 fois le taux d'intérêt
                  légal seront appliquées.
                </p>
              </div>
            </section>

            {/* Article 4 - Exécution */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                Article 4 - Exécution des travaux
              </h2>
              <p className="font-lato text-gray-700 mb-4">
                Les délais d'exécution sont donnés à titre indicatif et peuvent
                varier en fonction des conditions météorologiques, de la
                disponibilité des matériaux ou de circonstances exceptionnelles.
              </p>
              <p className="font-lato text-gray-700 mb-4">
                R'TOITURE s'engage à informer le client de tout retard
                prévisible et à convenir de nouvelles dates d'intervention.
              </p>
              <p className="font-lato text-gray-700">
                L'accès au chantier doit être libre et dégagé. Le client doit
                s'assurer que les conditions d'accès permettent la réalisation
                des travaux en toute sécurité.
              </p>
            </section>

            {/* Article 5 - Garanties */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                Article 5 - Garanties et assurances
              </h2>
              <h3 className="text-xl font-montserrat font-medium text-gray-800 mb-3">
                5.1 Garanties légales
              </h3>
              <ul className="list-disc list-inside font-lato text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>Garantie décennale :</strong> 10 ans à compter de la
                  réception des travaux pour les dommages compromettant la
                  solidité de l'ouvrage
                </li>
                <li>
                  <strong>Garantie biennale :</strong> 2 ans pour les éléments
                  d'équipement dissociables
                </li>
                <li>
                  <strong>Garantie de parfait achèvement :</strong> 1 an pour
                  tous les désordres signalés
                </li>
              </ul>

              <h3 className="text-xl font-montserrat font-medium text-gray-800 mb-3">
                5.2 Assurances
              </h3>
              <p className="font-lato text-gray-700">
                R'TOITURE est couvert par une assurance responsabilité civile
                professionnelle et décennale. Les attestations peuvent être
                fournies sur demande.
              </p>
            </section>

            {/* Article 6 - Réception */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                Article 6 - Réception des travaux
              </h2>
              <p className="font-lato text-gray-700 mb-4">
                À la fin des travaux, une visite de réception est organisée en
                présence du client. Un procès-verbal de réception est établi,
                mentionnant d'éventuelles réserves.
              </p>
              <p className="font-lato text-gray-700">
                En l'absence du client, les travaux sont réputés réceptionnés
                sans réserve si aucune contestation n'est formulée par écrit
                dans les 8 jours suivant la fin des travaux.
              </p>
            </section>

            {/* Article 7 - Réclamations */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                Article 7 - Réclamations et litiges
              </h2>
              <p className="font-lato text-gray-700 mb-4">
                Toute réclamation doit être adressée par écrit à R'TOITURE dans
                les plus brefs délais :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-lato text-gray-700 mb-2">
                  <strong>Email :</strong>{" "}
                  <span className="text-violet">contact@rtoiture.fr</span>
                </p>
                <p className="font-lato text-gray-700">
                  <strong>Téléphone :</strong> 06 77 06 15 35
                </p>
              </div>
              <p className="font-lato text-gray-700">
                En cas de litige, les parties s'efforceront de trouver une
                solution amiable. À défaut, le tribunal compétent sera celui du
                siège social de R'TOITURE.
              </p>
            </section>

            {/* Article 8 - Force majeure */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                Article 8 - Force majeure
              </h2>
              <p className="font-lato text-gray-700">
                R'TOITURE ne pourra être tenu responsable de tout retard ou
                inexécution consécutif à la survenance d'un cas de force majeure
                habituellement reconnu par la jurisprudence française
                (conditions météorologiques exceptionnelles, catastrophes
                naturelles, grèves, etc.).
              </p>
            </section>

            {/* Article 9 - Données personnelles */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                Article 9 - Protection des données personnelles
              </h2>
              <p className="font-lato text-gray-700">
                Les données personnelles collectées sont utilisées uniquement
                dans le cadre de l'exécution du contrat et de la relation
                commerciale. Conformément au RGPD, vous disposez d'un droit
                d'accès, de rectification et de suppression de vos données.
              </p>
            </section>

            {/* Article 10 - Droit applicable */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                Article 10 - Droit applicable
              </h2>
              <p className="font-lato text-gray-700">
                Les présentes conditions générales de vente sont soumises au
                droit français. En cas de litige, et après tentative de
                résolution amiable, les tribunaux français seront seuls
                compétents.
              </p>
            </section>

            <div className="border-t pt-6 mt-8">
              <div className="bg-violet-50 p-6 rounded-lg">
                <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-4">
                  Contact
                </h3>
                <p className="font-lato text-gray-700 mb-2">
                  <strong>R'TOITURE</strong>
                </p>
                <p className="font-lato text-gray-700 mb-2">
                  SIRET : 944 939 560 00016
                </p>
                <p className="font-lato text-gray-700 mb-2">
                  Email :{" "}
                  <span className="text-violet">contact@rtoiture.fr</span>
                </p>
                <p className="font-lato text-gray-700 mb-4">
                  Téléphone : 06 77 06 15 35
                </p>
                <p className="font-lato text-gray-500 text-sm">
                  CGV en vigueur au 1er janvier 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
