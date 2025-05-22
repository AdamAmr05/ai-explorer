
import React from 'react';
import { ArchitectureInfo, ArchitectureId } from '../types';

interface ArchitectureSelectorProps {
  architectures: ArchitectureInfo[];
  selectedId: ArchitectureId | null;
  onSelect: (id: ArchitectureId) => void;
}

const ArchitectureSelector: React.FC<ArchitectureSelectorProps> = ({ architectures, selectedId, onSelect }) => {
  return (
    <nav>
      <h2 className="text-lg font-semibold mb-3 text-sky-400">Architectures</h2>
      <ul>
        {architectures.map((arch) => (
          <li key={arch.id} className="mb-2">
            <button
              onClick={() => onSelect(arch.id)}
              className={`w-full text-left px-4 py-2 rounded-md transition-all duration-150 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                selectedId === arch.id
                  ? `bg-${arch.color} text-white shadow-lg transform scale-105`
                  : `bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white focus:ring-${arch.color}`
              }`}
            >
              {arch.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ArchitectureSelector;
    