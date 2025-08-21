// components/InfoCard.tsx
import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string; // optional extra styles
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon, className }) => {
  return (
    <div
      className={`bg-[#1E1E1E] border border-white/20 rounded-xl p-6 flex flex-col justify-between h-60 w-full max-w-sm ${className}`}
    >
      <h3 className="text-white text-xl font-semibold mb-6">{title}</h3>

      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 flex items-center justify-center">
          {icon}
        </div>
        <p className="text-sm text-white/80 leading-snug">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;



