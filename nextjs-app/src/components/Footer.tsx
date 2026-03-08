'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white border-opacity-10 bg-gradient-to-t from-purple-900 to-transparent py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <span className="text-lg font-bold text-white">✨</span>
              </div>
              <span className="font-bold text-white">ContentFlow</span>
            </div>
            <p className="text-sm text-gray-400">Nettoyage professionnel du contenu pour les équipes modernes.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Produit</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Tarifs</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Sécurité</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Emplois</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Conditions</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Politique cookies</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">RGPD</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} ContentFlow. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
