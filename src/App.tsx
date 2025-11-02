import { Menu, X, Building2, Code, Wrench, Users, CheckCircle, Phone, Mail, MapPin, Sun, Moon, Hammer, LineChart, Database, Shield, Zap, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const services = [
    {
      icon: Building2,
      title: "Construction & Rénovation",
      description: "Conception et réalisation complète de vos projets de construction résidentiels et commerciaux.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Hammer,
      title: "Plans Architecturaux",
      description: "Élaboration de plans détaillés et dimensionnement structurel pour tous types de bâtiments.",
      image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Code,
      title: "Développement Web",
      description: "Création de sites web modernes, responsive et optimisés pour votre présence en ligne.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Database,
      title: "Applications de Gestion",
      description: "Solutions logicielles sur mesure pour la gestion de stocks, clients et activités.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: LineChart,
      title: "Suivi de Projet Digital",
      description: "Tableaux de bord interactifs, reporting en temps réel et gestion collaborative.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Wrench,
      title: "Études Techniques",
      description: "Assistance experte dans la planification et l'analyse de faisabilité de vos projets.",
      image: "https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const avantages = [
    "Combinaison unique du génie civil et des solutions numériques",
    "Services accessibles et adaptés aux particuliers et PME",
    "Accompagnement personnalisé et de proximité",
    "Transparence totale grâce à la technologie"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <header className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm z-50 transition-colors duration-300">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  BuildTech<span className="text-amber-700 dark:text-amber-500">Pro</span>
                </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#accueil" className="text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 transition-colors font-medium text-sm">Accueil</a>
                <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 transition-colors font-medium text-sm">Services</a>
                <a href="#apropos" className="text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 transition-colors font-medium text-sm">À Propos</a>
                <a href="#contact" className="bg-amber-700 text-white px-5 py-2 rounded-lg hover:bg-amber-800 transition-colors font-medium text-sm">Contact</a>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>
                <button
                  className="text-gray-700 dark:text-gray-300"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden py-4 space-y-3 border-t dark:border-gray-800">
                <a href="#accueil" className="block text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 transition-colors font-medium text-sm">Accueil</a>
                <a href="#services" className="block text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 transition-colors font-medium text-sm">Services</a>
                <a href="#apropos" className="block text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 transition-colors font-medium text-sm">À Propos</a>
                <a href="#contact" className="block bg-amber-700 text-white px-5 py-2 rounded-lg hover:bg-amber-800 transition-colors font-medium text-sm text-center">Contact</a>
              </div>
            )}
          </nav>
        </header>

        {/* Hero Section */}
        <section id="accueil" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4 text-amber-700 dark:text-amber-500" />
                  <span className="text-sm font-medium text-amber-900 dark:text-amber-300">Innovation & Expertise</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Génie Civil <span className="text-amber-700 dark:text-amber-500">&</span> Solutions Digitales
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Nous combinons l'expertise en construction avec les technologies modernes pour transformer vos projets en réalité. Solutions complètes pour particuliers, entreprises et organisations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="#contact" className="inline-flex items-center justify-center bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-all transform hover:scale-105 font-medium text-sm shadow-lg">
                    Démarrer un Projet
                  </a>
                  <a href="#services" className="inline-flex items-center justify-center border-2 border-amber-700 dark:border-amber-600 text-amber-700 dark:text-amber-500 px-6 py-3 rounded-lg hover:bg-amber-50 dark:hover:bg-gray-800 transition-colors font-medium text-sm">
                    Découvrir nos Services
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-700 dark:text-amber-500">150+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projets Réalisés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-700 dark:text-amber-500">98%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Satisfaction Client</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-700 dark:text-amber-500">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Support Disponible</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-amber-200 to-amber-300 dark:from-amber-900 dark:to-amber-800 rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Construction moderne"
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-2 border-amber-200 dark:border-amber-900 max-w-xs">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-10 h-10 text-amber-700 dark:text-amber-500" />
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">Qualité Garantie</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Certification professionnelle</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full mb-4">
                <Globe className="w-4 h-4 text-amber-700 dark:text-amber-500" />
                <span className="text-sm font-medium text-amber-900 dark:text-amber-300">Services Complets</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Nos Expertises</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Une gamme complète de services alliant construction traditionnelle et innovation numérique
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-amber-700 rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full">
                  <Building2 className="w-4 h-4 text-amber-700 dark:text-amber-500" />
                  <span className="text-sm font-medium text-amber-900 dark:text-amber-300">Notre Vision</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Une Référence en Innovation
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Devenir une référence parmi les entreprises locales qui associent construction et technologie pour proposer des solutions modernes, accessibles et de qualité.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Nous proposons des plans architecturaux et le dimensionnement de toutes vos structures avec un accompagnement personnalisé du début à la fin de votre projet.
                </p>

                <div className="space-y-4 pt-4">
                  {avantages.map((avantage, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white dark:bg-gray-800 p-4 rounded-xl border border-amber-100 dark:border-gray-700">
                      <CheckCircle className="w-5 h-5 text-amber-700 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{avantage}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-amber-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-amber-700 dark:text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Notre Mission</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Offrir des services pratiques, fiables et innovants qui allient savoir-faire technique et outils numériques pour répondre aux besoins du marché local.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-amber-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-amber-700 dark:text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nos Clients</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-amber-700 dark:bg-amber-500 rounded-full"></div>
                      <span className="text-sm">Particuliers</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-amber-700 dark:bg-amber-500 rounded-full"></div>
                      <span className="text-sm">Petites entreprises et commerces</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-amber-700 dark:bg-amber-500 rounded-full"></div>
                      <span className="text-sm">Associations et organisations locales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full mb-4">
                <Mail className="w-4 h-4 text-amber-700 dark:text-amber-500" />
                <span className="text-sm font-medium text-amber-900 dark:text-amber-300">Contactez-nous</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Parlons de Votre Projet</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Notre équipe est prête à vous accompagner
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-amber-50 dark:bg-gray-800 p-6 rounded-2xl border border-amber-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-amber-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Téléphone</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">+221 XX XXX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-amber-50 dark:bg-gray-800 p-6 rounded-2xl border border-amber-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-amber-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">contact@buildtechpro.sn</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-amber-50 dark:bg-gray-800 p-6 rounded-2xl border border-amber-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-amber-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Localisation</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Dakar, Sénégal</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Horaires d'ouverture</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-700 dark:text-gray-300">
                      <span>Lundi - Vendredi</span>
                      <span className="font-medium">8h - 18h</span>
                    </div>
                    <div className="flex justify-between text-gray-700 dark:text-gray-300">
                      <span>Samedi</span>
                      <span className="font-medium">9h - 14h</span>
                    </div>
                    <div className="flex justify-between text-gray-700 dark:text-gray-300">
                      <span>Dimanche</span>
                      <span className="font-medium">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom complet</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-amber-700 dark:focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-700/20 dark:focus:ring-amber-500/20 transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-amber-700 dark:focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-700/20 dark:focus:ring-amber-500/20 transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-amber-700 dark:focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-700/20 dark:focus:ring-amber-500/20 transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm"
                    placeholder="+221 XX XXX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-amber-700 dark:focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-700/20 dark:focus:ring-amber-500/20 transition-colors resize-none bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-all transform hover:scale-105 font-medium shadow-lg text-sm"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold">BuildTech<span className="text-amber-500">Pro</span></span>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm max-w-md">
                  L'alliance du génie civil et de la technologie pour des solutions modernes et accessibles. Votre partenaire de confiance pour tous vos projets.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold mb-4">Liens Rapides</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#accueil" className="text-gray-400 hover:text-amber-500 transition-colors">Accueil</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Services</a></li>
                  <li><a href="#apropos" className="text-gray-400 hover:text-amber-500 transition-colors">À Propos</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold mb-4">Nos Services</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Construction & Rénovation</li>
                  <li>Plans Architecturaux</li>
                  <li>Solutions Numériques</li>
                  <li>Suivi de Projet</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2025 BuildTechPro. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
