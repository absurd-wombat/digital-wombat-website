import { Stat } from '@/app/lib/types';
import { colors } from '@/app/lib/colors';

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div className="text-center">
      <div className={`text-4xl font-bold ${colors.text.cardTitle} mb-2`}>{stat.value}</div>
      <div className={`${colors.text.cardDescription}`}>{stat.label}</div>
    </div>
  );
}
