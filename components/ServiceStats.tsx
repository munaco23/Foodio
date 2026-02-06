
import React from 'react';

const ServiceStats: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <StatItem label="Seated (six tables)" value="20" />
          <StatItem label="Seated (one table)" value="40" />
          <StatItem label="Standing" value="80" />
          <StatItem label="Menus to choose from" value="11" />
        </div>
      </div>
    </section>
  );
};

const StatItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-[14px] md:text-[16px] font-[900] text-gray-800 uppercase tracking-tighter mb-4">{label}</span>
    <span className="text-[80px] md:text-[110px] font-[900] text-[#FF1A4D] leading-none drop-shadow-sm">{value}</span>
  </div>
);

export default ServiceStats;
