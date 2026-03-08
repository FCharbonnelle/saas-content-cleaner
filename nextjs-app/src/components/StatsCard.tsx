'use client';

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

export function StatsCard({ label, value, icon, bgColor, borderColor, textColor }: StatsCardProps) {
  return (
    <div className={`p-4 rounded-xl border-2 ${borderColor} ${bgColor} backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 shadow-lg`}>
      <div className="flex items-center gap-3 mb-2">
        <div className="text-2xl">{icon}</div>
        <p className={`text-sm font-medium ${textColor}`}>{label}</p>
      </div>
      <p className={`text-3xl font-bold ${textColor}`}>{value}</p>
    </div>
  );
}
