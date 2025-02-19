import { motion } from 'framer-motion';
import { Shield, Brain, LineChart, Code, Zap, Sparkles, Building, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

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

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-dark-900 to-dark-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1)_0%,transparent_65%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl font-bold tracking-tight gradient-text sm:text-7xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Solution Simple
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl leading-8 text-gold-100/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Votre partenaire technologique de confiance pour tous vos besoins informatiques.
              De l'infrastructure au développement, nous simplifions votre transformation numérique.
            </motion.p>
            <motion.div 
              className="mt-10 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/contact" className="button-primary">
                Commencer maintenant
              </Link>
            </motion.div>
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
              Des solutions complètes pour répondre à tous vos besoins informatiques
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mx-auto mt-16 grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4"
          >
            {[
              {
                title: 'Support Informatique',
                description: 'Support technique professionnel pour tous vos systèmes et applications.',
                icon: Shield,
                href: '/support',
                color: 'from-emerald-400 to-emerald-500'
              },
              {
                title: 'Gestion de Projets',
                description: 'Gestion experte de vos projets informatiques de A à Z.',
                icon: Code,
                href: '/projets',
                color: 'from-blue-400 to-blue-500'
              },
              {
                title: 'Analyse et Optimisation',
                description: 'Optimisation de vos processus et infrastructures IT.',
                icon: LineChart,
                href: '/analyse',
                color: 'from-purple-400 to-purple-500'
              },
              {
                title: 'Solutions IA',
                description: 'Intégration de solutions d\'intelligence artificielle innovantes.',
                icon: Brain,
                href: '/ia',
                color: 'from-gold-400 to-gold-500'
              }
            ].map((service) => (
              <motion.div
                key={service.title}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                className="group relative"
              >
                <Link to={service.href} className="card group block h-full">
                  <div className={`icon-container bg-gradient-to-r ${service.color}`}>
                    <service.icon className="h-6 w-6 text-black" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gold-400">{service.title}</h3>
                  <p className="mt-2 text-base text-gold-100/60">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-dark-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-title">Pourquoi Nous Choisir</h2>
            <p className="section-description">
              Notre expertise et notre approche unique font la différence
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mx-auto mt-16 grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4"
          >
            {[
              {
                title: 'Expertise Technique',
                description: 'Une équipe d\'experts passionnés et certifiés dans les dernières technologies.',
                icon: Zap
              },
              {
                title: 'Innovation Continue',
                description: 'Toujours à la pointe de l\'innovation pour vous offrir les meilleures solutions.',
                icon: Sparkles
              },
              {
                title: 'Support Dédié',
                description: 'Un accompagnement personnalisé et un support réactif pour votre réussite.',
                icon: Building
              },
              {
                title: 'Professionnalisme',
                description: 'Un engagement constant pour délivrer un travail de qualité.',
                icon: Star
              }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                className="card"
              >
                <div className="icon-container">
                  <feature.icon className="h-6 w-6 text-black" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gold-400">{feature.title}</h3>
                <p className="mt-2 text-base text-gold-100/60">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}