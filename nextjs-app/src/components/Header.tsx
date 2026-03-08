'use client';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white bg-opacity-5 border-b border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg">
            <span className="text-xl font-bold text-white">✨</span>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              ContentFlow
            </h1>
            <p className="text-xs text-gray-400">Nettoyeur de contenu pro</p>
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-purple-400 transition-colors">Fonctionnalités</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Documentation</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Tarifs</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
            Se connecter
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            Commencer
          </button>
        </div>
      </div>
    </header>
  );
}
