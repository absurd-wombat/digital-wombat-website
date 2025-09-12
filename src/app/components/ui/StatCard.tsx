import { Stat } from '@/app/lib/types';

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
      <div className="text-gray-600">{stat.label}</div>
    </div>
  );
}

