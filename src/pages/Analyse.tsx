import { motion } from 'framer-motion';
import { LineChart, TrendingUp, Search, BarChart, ArrowUpRight, Target } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Analyse() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-dark-900 to-dark-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_65%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-500/20"
            >
              <LineChart className="h-10 w-10 text-black" />
            </motion.div>
            <motion.h1 
              className="text-5xl font-bold tracking-tight gradient-text sm:text-7xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Analyse et Optimisation
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl leading-8 text-gold-100/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Optimisez vos performances et réduisez vos coûts grâce à notre expertise en analyse de données
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-48 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-dark-900" />
      </div>

      {/* Services Section */}
      <section className="section bg-dark-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-title">Nos Services</h2>
            <p className="section-description">
              Des solutions d'analyse complètes pour optimiser votre entreprise
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Analyse des performances",
                description: "Évaluation complète des performances de vos systèmes",
                icon: LineChart,
                color: "from-blue-400 to-blue-500"
              },
              {
                title: "Optimisation des coûts",
                description: "Identification des opportunités de réduction des coûts",
                icon: TrendingUp,
                color: "from-green-400 to-green-500"
              },
              {
                title: "Audit technique",
                description: "Analyse approfondie de votre infrastructure",
                icon: Search,
                color: "from-purple-400 to-purple-500"
              },
              {
                title: "Analyse prédictive",
                description: "Anticipation des tendances et des besoins futurs",
                icon: BarChart,
                color: "from-amber-400 to-amber-500"
              },
              {
                title: "Optimisation de vos procédures",
                description: "Amélioration de vos processus métiers",
                icon: Target,
                color: "from-red-400 to-red-500"
              },
              {
                title: "Conseil",
                description: "Solutions concrètes pour améliorer vos performances",
                icon: ArrowUpRight,
                color: "from-indigo-400 to-indigo-500"
              }
            ].map((service) => (
              <motion.div
                key={service.title}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                className="card group"
              >
                <div className={`icon-container bg-gradient-to-r ${service.color}`}>
                  <service.icon className="h-6 w-6 text-black" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gold-400">{service.title}</h3>
                <p className="mt-2 text-base text-gold-100/60">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}