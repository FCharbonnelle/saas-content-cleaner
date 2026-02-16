'use client';

interface StatItemProps {
  label: string;
  value: string;
  icon: string;
}

function StatItem({ label, value, icon }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-1">
        {value}
      </p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

export default function StatsOverview() {
  return (
    <section className="py-16 border-y border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <StatItem icon="🚀" label="Active Users" value="50K+" />
          <StatItem icon="📝" label="Characters Cleaned" value="2.5B+" />
          <StatItem icon="⏱️" label="Avg Response Time" value="&lt;100ms" />
          <StatItem icon="⭐" label="User Satisfaction" value="4.9/5" />
        </div>
      </div>
    </section>
  );
}
