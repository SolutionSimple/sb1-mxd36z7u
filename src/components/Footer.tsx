import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/95 backdrop-blur-lg border-t border-gold-500/10">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div>
            <img className="h-12" src="/src/assets/logo.png" alt="Solution Simple" />
            <p className="mt-4 text-sm text-gold-100/60">
              Solution Simple - Votre partenaire informatique de confiance pour tous vos besoins technologiques.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-gold-400">Services</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/support" className="text-gold-100/60 hover:text-gold-300 transition-colors">Support Informatique</Link>
              </li>
              <li>
                <Link to="/projets" className="text-gold-100/60 hover:text-gold-300 transition-colors">Gestion de Projets</Link>
              </li>
              <li>
                <Link to="/analyse" className="text-gold-100/60 hover:text-gold-300 transition-colors">Analyse et Optimisation</Link>
              </li>
              <li>
                <Link to="/ia" className="text-gold-100/60 hover:text-gold-300 transition-colors">Solutions IA</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-gold-400">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center group">
                <Mail className="h-5 w-5 mr-2 text-gold-400 group-hover:text-gold-300 transition-colors" />
                <a href="mailto:contact@solutionsimple.fr" className="text-gold-100/60 group-hover:text-gold-300 transition-colors">
                  contact@solutionsimple.fr
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-gold-400">Suivez-nous</h3>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.linkedin.com/in/louidgy-dona-755ba1144/" className="text-gold-400 hover:text-gold-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.malt.fr/profile/louidgydona" 
                className="text-gold-400 hover:text-gold-300 transition-colors"
                title="Profil Malt"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM12 19.2c-4.2 0-7.2-3-7.2-7.2s3-7.2 7.2-7.2 7.2 3 7.2 7.2-3 7.2-7.2 7.2zm0-12c-2.64 0-4.8 2.16-4.8 4.8s2.16 4.8 4.8 4.8 4.8-2.16 4.8-4.8-2.16-4.8-4.8-4.8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gold-500/10 pt-8">
          <p className="text-center text-sm text-gold-100/60">
            © {new Date().getFullYear()} Solution Simple. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}