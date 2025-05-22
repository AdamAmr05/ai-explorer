
import React from 'react';
import { DiagramBlockProps, ArrowProps } from '../types';

export const DiagramBlock: React.FC<DiagramBlockProps> = ({ title, details, className, color = 'slate-700' }) => {
  const bgColor = `bg-${color}`;
  const borderColor = `border-${color.split('-')[0]}-500`; // e.g., border-blue-500 from blue-700

  return (
    <div className={`p-3 rounded-md shadow-md text-center min-w-[120px] max-w-[200px] ${bgColor} ${borderColor} border-2 ${className}`}>
      <p className="font-semibold text-sm text-white">{title}</p>
      {details && <p className="text-xs text-slate-300 mt-1">{details}</p>}
    </div>
  );
};

export const Arrow: React.FC<ArrowProps> = ({ direction = 'right', className, label }) => {
  let path;
  let transform = '';
  let viewBox = "0 0 24 24";
  let svgClass = "w-8 h-8 text-slate-400"; // Default size

  switch (direction) {
    case 'right':
      path = "M5 12h14m-7-7l7 7-7 7";
      if (label) svgClass = "w-16 h-8 text-slate-400"; // Wider for label
      break;
    case 'left':
      path = "M19 12H5m7 7l-7-7 7-7";
      if (label) svgClass = "w-16 h-8 text-slate-400";
      break;
    case 'down':
      path = "M12 5v14m-7-7l7 7 7-7";
      transform = 'rotate(0)'; // SVG path is already vertical
      if (label) svgClass = "w-8 h-16 text-slate-400"; // Taller for label
      break;
    case 'up':
      path = "M12 19V5m7 7l-7-7-7 7";
      if (label) svgClass = "w-8 h-16 text-slate-400";
      break;
    default:
      path = "M5 12h14m-7-7l7 7-7 7";
  }

  return (
    <div className={`flex flex-col items-center justify-center mx-2 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={viewBox} strokeWidth="1.5" stroke="currentColor" className={svgClass} style={{ transform }}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
      {label && <span className="text-xs text-slate-400 mt-1">{label}</span>}
    </div>
  );
};

export const PlusIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-slate-400" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export const ConnectorLine: React.FC<{ type?: 'horizontal' | 'vertical', lengthClass?: string, className?: string }> = ({ type = 'horizontal', lengthClass, className }) => {
  const baseClasses = "bg-slate-600";
  const sizeClasses = type === 'horizontal' 
    ? `h-0.5 ${lengthClass || 'w-8'}` 
    : `w-0.5 ${lengthClass || 'h-8'}`;
  return <div className={`${baseClasses} ${sizeClasses} ${className}`}></div>;
};
    