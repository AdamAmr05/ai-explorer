import React from 'react';
import { DiagramBlock, Arrow, PlusIcon } from '../DiagramCommon';

export const MoEDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-slate-900/50 rounded-lg text-xs">
      <DiagramBlock title="Input Token" color="green-700" />
      <Arrow direction="down" />
      <DiagramBlock title="Gating Network" details="Selects Top K Experts" color="green-700" />
      
      {/* Branching lines from Gating Network to Experts */}
      <div className="relative w-full h-6 flex items-center justify-center">
        <div className="w-px h-4 bg-slate-400"></div>
        <div className="absolute top-4 w-3/5 h-px bg-slate-400"></div>
        <div className="absolute top-4 left-[20%] w-px h-2 bg-slate-400"></div>
        <div className="absolute top-4 left-1/2 w-px h-2 bg-slate-400 -translate-x-1/2"></div>
        <div className="absolute top-4 left-[80%] w-px h-2 bg-slate-400"></div>
      </div>
      
      <div className="flex justify-around w-full space-x-4">
        <DiagramBlock title="Expert 1" details="e.g., FFN" color="green-500" />
        <DiagramBlock title="Expert 2" details="e.g., FFN" color="green-500" />
        <DiagramBlock title="Expert N" details="e.g., FFN" color="green-500" />
      </div>

      {/* Converging lines from Experts to Output */}
      <div className="relative w-full h-6 flex items-center justify-center">
        <div className="absolute top-0 left-[20%] w-px h-2 bg-slate-400"></div>
        <div className="absolute top-0 left-1/2 w-px h-2 bg-slate-400 -translate-x-1/2"></div>
        <div className="absolute top-0 left-[80%] w-px h-2 bg-slate-400"></div>
        <div className="absolute top-2 w-3/5 h-px bg-slate-400"></div>
        <div className="absolute bottom-0 w-px h-4 bg-slate-400"></div>
      </div>

      <Arrow direction="down" label="Weighted Combination" />
      <DiagramBlock title="Output Token Representation" color="green-700" />
    </div>
  );
};