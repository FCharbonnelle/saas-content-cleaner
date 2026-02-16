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
            <p className="text-sm text-gray-400">Professional content cleaning for modern teams.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} ContentFlow. All rights reserved.
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
