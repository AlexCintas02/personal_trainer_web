// src/components/ProgramCard.tsx
import React from 'react';

interface ProgramCardProps {
  title: string;
  duration: string;
  price: string;
  features: string[];
}

export default function ProgramCard({ title, duration, price, features }: ProgramCardProps) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 p-8 flex flex-col h-full hover:border-neutral-500 transition-all duration-300">
      <div className="mb-6 border-b border-neutral-800 pb-6 text-center">
        <h3 className="text-3xl font-black uppercase text-white tracking-wider mb-2">{title}</h3>
        <p className="text-neutral-500 uppercase text-sm font-bold tracking-widest">{duration}</p>
      </div>
      
      <div className="text-center mb-8">
        <span className="text-5xl font-black text-white">{price}</span>
      </div>

      <ul className="grow space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-neutral-400 text-sm">
            <span className="text-white mr-2 mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-neutral-300 transition-colors mt-auto">
        Lo quiero
      </button>
    </div>
  );
}