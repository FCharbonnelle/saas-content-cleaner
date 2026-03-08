'use client';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="p-6 rounded-xl bg-white bg-opacity-5 border border-white border-opacity-10 hover:border-opacity-20 hover:bg-opacity-10 transition-all duration-300 group">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      icon: '⚡',
      title: 'Ultra rapide',
      description: 'Traitez des milliers de caractères par seconde avec des algorithmes optimisés.',
    },
    {
      icon: '🔒',
      title: 'Sécurisé & Privé',
      description: 'Tout le contenu reste sur votre appareil. Aucune donnée envoyée aux serveurs.',
    },
    {
      icon: '🎯',
      title: 'Contrôle précis',
      description: 'Ajustez finement chaque aspect du nettoyage avec des options personnalisées.',
    },
    {
      icon: '📊',
      title: 'Analyses détaillées',
      description: 'Suivez les statistiques et analysez les performances au fil du temps.',
    },
    {
      icon: '🔄',
      title: 'Traitement par lot',
      description: 'Nettoyez plusieurs fichiers à la fois avec des paramètres cohérents.',
    },
    {
      icon: '📤',
      title: 'Export facile',
      description: 'Exportez les résultats en plusieurs formats : CSV, JSON, TXT.',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            Fonctionnalités puissantes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour nettoyer et gérer du contenu de manière professionnelle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
