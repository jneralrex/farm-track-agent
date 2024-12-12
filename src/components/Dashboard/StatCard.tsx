import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  unit: string;
  percentage: number;
  icon: LucideIcon;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  unit,
  percentage,
  icon: Icon,
  color,
}) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <div className="mt-2 flex items-baseline">
            <span className="text-2xl font-bold">{value}</span>
            <span className="text-gray-500 ml-1">{unit}</span>
          </div>
        </div>
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${color.replace('bg-', 'bg-opacity-100 bg-')}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default StatCard;