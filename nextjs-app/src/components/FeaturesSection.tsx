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
      title: 'Lightning Fast',
      description: 'Process thousands of characters per second with optimized algorithms.',
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'All content stays on your device. No data sent to servers.',
    },
    {
      icon: '🎯',
      title: 'Precise Control',
      description: 'Fine-tune every aspect of content cleaning with custom options.',
    },
    {
      icon: '📊',
      title: 'Detailed Analytics',
      description: 'Track statistics and analyze cleaning performance over time.',
    },
    {
      icon: '🔄',
      title: 'Batch Processing',
      description: 'Clean multiple files at once with consistent settings.',
    },
    {
      icon: '📤',
      title: 'Easy Export',
      description: 'Export results in multiple formats: CSV, JSON, TXT.',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need for professional content cleaning and management.
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
