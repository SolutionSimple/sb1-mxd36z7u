import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'support'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-screen pt-24 bg-dark-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-dark-900 to-dark-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1)_0%,transparent_65%)]" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight gradient-text sm:text-4xl">Contactez-nous</h2>
            <p className="mt-6 text-lg leading-8 text-gold-100/80">
              Nous sommes là pour vous aider. Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-16 max-w-xl"
          >
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gold-400">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 bg-dark-800 py-2 px-3.5 text-gold-100 shadow-sm ring-1 ring-inset ring-gold-500/10 focus:ring-2 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gold-400">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 bg-dark-800 py-2 px-3.5 text-gold-100 shadow-sm ring-1 ring-inset ring-gold-500/10 focus:ring-2 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gold-400">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 bg-dark-800 py-2 px-3.5 text-gold-100 shadow-sm ring-1 ring-inset ring-gold-500/10 focus:ring-2 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gold-400">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 bg-dark-800 py-2 px-3.5 text-gold-100 shadow-sm ring-1 ring-inset ring-gold-500/10 focus:ring-2 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gold-400">
                    Service concerné
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 bg-dark-800 py-2 px-3.5 text-gold-100 shadow-sm ring-1 ring-inset ring-gold-500/10 focus:ring-2 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6"
                  >
                    <option value="support">Support Informatique</option>
                    <option value="projets">Gestion de Projets</option>
                    <option value="analyse">Analyse et Optimisation</option>
                    <option value="ia">Solutions IA</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gold-400">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 bg-dark-800 py-2 px-3.5 text-gold-100 shadow-sm ring-1 ring-inset ring-gold-500/10 focus:ring-2 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="button-primary w-full flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}