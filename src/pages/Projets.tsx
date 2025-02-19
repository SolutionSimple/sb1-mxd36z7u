import { motion } from 'framer-motion';
import { Code, Users, Layout, Rocket, GraduationCap } from 'lucide-react';

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

export default function Projets() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-dark-900 to-dark-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_65%)]" />
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
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg shadow-blue-500/20"
            >
              <Code className="h-10 w-10 text-black" />
            </motion.div>
            <motion.h1 
              className="text-5xl font-bold tracking-tight gradient-text sm:text-7xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Gestion de Projets
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl leading-8 text-gold-100/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              De la conception au déploiement, nous gérons vos projets informatiques avec expertise et précision
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-48 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-dark-900" />
      </div>

      {/* Process Section */}
      <section className="section bg-dark-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-title">Notre Processus</h2>
            <p className="section-description">
              Une approche méthodique pour garantir le succès de vos projets
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5"
          >
            {[
              {
                title: "Analyse des besoins",
                description: "Étude approfondie de vos besoins et objectifs",
                icon: Users,
                step: "01",
                color: "from-purple-400 to-purple-500"
              },
              {
                title: "Conception",
                description: "Élaboration d'une solution sur mesure",
                icon: Layout,
                step: "02",
                color: "from-blue-400 to-blue-500"
              },
              {
                title: "Développement",
                description: "Réalisation technique selon les meilleures pratiques",
                icon: Code,
                step: "03",
                color: "from-emerald-400 to-emerald-500"
              },
              {
                title: "Déploiement",
                description: "Mise en production et accompagnement",
                icon: Rocket,
                step: "04",
                color: "from-amber-400 to-amber-500"
              },
              {
                title: "Formation des utilisateurs",
                description: "Accompagnement et transfert de compétences",
                icon: GraduationCap,
                step: "05",
                color: "from-red-400 to-red-500"
              }
            ].map((phase) => (
              <motion.div
                key={phase.title}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                className="card group relative"
              >
                <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-black font-bold shadow-lg`}>
                  {phase.step}
                </div>
                <div className={`icon-container bg-gradient-to-r ${phase.color}`}>
                  <phase.icon className="h-6 w-6 text-black" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gold-400">{phase.title}</h3>
                <p className="mt-2 text-base text-gold-100/60">{phase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}