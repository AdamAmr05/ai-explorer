import React from 'react';
import { DiagramBlock, Arrow, PlusIcon } from '../DiagramCommon';

export const MoEDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-slate-900/50 rounded-lg text-xs">
      <DiagramBlock title="Input Token" color="green-700" />
      <Arrow direction="down" />
      <DiagramBlock title="Gating Network" details="Selects Top K Experts" color="green-700" />
      
      <Arrow direction="down" label="Routes to Selected Experts" />
      
      <div className="flex justify-around w-full space-x-4">
        <DiagramBlock title="Expert 1" details="e.g., FFN" color="green-500" />
        <DiagramBlock title="Expert 2" details="e.g., FFN" color="green-500" />
        <DiagramBlock title="Expert N" details="e.g., FFN" color="green-500" />
      </div>

      <Arrow direction="down" label="Weighted Combination" />
      <DiagramBlock title="Output Token Representation" color="green-700" />
    </div>
  );
};