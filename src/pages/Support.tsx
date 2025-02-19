import { motion } from 'framer-motion';
import { Shield, Clock, ShieldCheck, Mail, Server, HardDrive, HeadphonesIcon, MessageSquare, CheckCircle2, Phone, Key } from 'lucide-react';

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

export default function Support() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-dark-900 to-dark-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_65%)]" />
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
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-lg shadow-emerald-500/20"
            >
              <Shield className="h-10 w-10 text-black" />
            </motion.div>
            <motion.h1 
              className="text-5xl font-bold tracking-tight gradient-text sm:text-7xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Support Informatique
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl leading-8 text-gold-100/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Une équipe d'experts disponible 24/7 pour assurer le bon fonctionnement de vos systèmes
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
                <span>Support 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
                <span>Temps de réponse &lt; 1h</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
                <span>Satisfaction garantie</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-48 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-dark-900" />
      </div>

      {/* Services Grid */}
      <section className="section bg-dark-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-title">Nos Services de Support</h2>
            <p className="section-description">
              Des solutions complètes pour tous vos besoins en support informatique
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
                title: "Support 24/7",
                description: "Une équipe disponible jour et nuit pour répondre à vos besoins",
                icon: Clock,
                color: "from-blue-400 to-blue-500"
              },
              {
                title: "Sécurité des équipements",
                description: "Configuration et administration de vos EDR",
                icon: ShieldCheck,
                color: "from-purple-400 to-purple-500"
              },
              {
                title: "Messagerie",
                description: "Gestion de vos services de messagerie\nMigration & configuration domaines",
                icon: Mail,
                color: "from-emerald-400 to-emerald-500"
              },
              {
                title: "Maintenance serveurs",
                description: "Gestion et maintenance de vos infrastructures serveur",
                icon: Server,
                color: "from-red-400 to-red-500"
              },
              {
                title: "Sauvegarde données",
                description: "Protection et récupération de vos données critiques",
                icon: HardDrive,
                color: "from-amber-400 to-amber-500"
              },
              {
                title: "Gestion des identités",
                description: "Configuration et administration de vos IAM",
                icon: Key,
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
                <p className="mt-2 text-base text-gold-100/60 whitespace-pre-line">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-dark-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-lg shadow-emerald-500/20">
              <HeadphonesIcon className="h-8 w-8 text-black" />
            </div>
            <h2 className="section-title">Besoin d'assistance ?</h2>
            <p className="section-description">
              Notre équipe est disponible 24/7 pour vous aider
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2"
          >
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              }}
              className="relative overflow-hidden rounded-3xl bg-dark-900 p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent" />
              <div className="relative">
                <MessageSquare className="h-8 w-8 text-emerald-400" />
                <h3 className="mt-4 text-xl font-semibold text-gold-400">Support en ligne</h3>
                <p className="mt-2 text-gold-100/60">Support par email avec suivi détaillé</p>
                <a href="mailto:contact@solutionsimple.fr" className="mt-4 inline-flex items-center text-lg font-medium text-emerald-400">
                  contact@solutionsimple.fr
                </a>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gold-100/60">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Réponse sous 30 minutes
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gold-100/60">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Suivi personnalisé
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gold-100/60">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Documentation détaillée
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              }}
              className="relative overflow-hidden rounded-3xl bg-dark-900 p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent" />
              <div className="relative">
                <Phone className="h-8 w-8 text-emerald-400" />
                <h3 className="mt-4 text-xl font-semibold text-gold-400">Support WhatsApp</h3>
                <p className="mt-2 text-gold-100/60">Support instantané via WhatsApp</p>
                <a href="https://wa.me/33123456789" className="mt-4 inline-flex items-center text-lg font-medium text-emerald-400">
                  Démarrer une conversation
                </a>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gold-100/60">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Réponse immédiate
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gold-100/60">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Support en français et anglais
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gold-100/60">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Partage facile de captures d'écran
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}