import { motion } from 'framer-motion';
import { Notebook, Globe, Building } from 'lucide-react';

export default function IA() {
  return (
    <div className="pt-24 bg-gradient-to-b from-black via-zinc-900 to-black min-h-screen">
      {/* Hero Section */}
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 bg-clip-text text-transparent sm:text-6xl">
              Solutions IA
            </h1>
            <p className="mt-6 text-lg leading-8 text-gold-100/80">
              Transformez votre entreprise grâce à l'intelligence artificielle et au machine learning
            </p>
          </motion.div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "No-Code & Automatisation",
                description: "Configuration des solutions : Make, Zapier et Airtable pour automatiser vos processus avec des workflows personnalisés",
                icon: Notebook
              },
              {
                title: "Création de Sites Web IA",
                description: "Sites web intelligents générés par IA avec personnalisation avancée",
                icon: Globe
              },
              {
                title: "Gestion Airbnb IA",
                description: "Assistant IA pour optimiser la gestion de vos locations",
                icon: Building
              }
            ].map((solution) => (
              <motion.div
                key={solution.title}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                className="card group"
              >
                <div className="icon-container">
                  <solution.icon className="h-6 w-6 text-black" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gold-400">{solution.title}</h3>
                <p className="mt-2 text-base text-gold-100/60">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}