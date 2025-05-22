
import React from 'react';
import { DiagramBlock, Arrow } from '../DiagramCommon';

export const DiffusionDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-slate-900/50 rounded-lg text-xs">
      <div className="text-center mb-2 text-purple-300 font-semibold">Forward Process (Training)</div>
      <div className="flex items-center space-x-2">
        <DiagramBlock title="Clean Image (x0)" color="purple-700" />
        <Arrow direction="right" label="Add Noise (t steps)" />
        <DiagramBlock title="Noisy Image (xt)" color="purple-600" />
      </div>
      
      <div className="w-full border-t-2 border-dashed border-slate-600 my-6"></div>

      <div className="text-center mb-2 text-purple-300 font-semibold">Reverse Process (Generation/Inference)</div>
      <div className="flex flex-col items-center space-y-2">
         <DiagramBlock title="Random Noise (zT)" color="purple-600" />
         <Arrow direction="down" />
         <div className="border-2 border-dashed border-purple-400 p-4 rounded-lg text-center">
            <div className="text-purple-300 font-semibold mb-2">Denoising Loop (T steps)</div>
            <DiagramBlock title="Denoising Network (U-Net)" details="Predicts noise / x(t-1)" color="purple-500" />
            <Arrow direction="down" label="Subtract predicted noise" />
             <DiagramBlock title="Less Noisy Image x(t-1)" color="purple-500" />
             <div className="text-sm text-slate-400 my-1">(Repeated T times)</div>
         </div>
         <Arrow direction="down" />
         <DiagramBlock title="Generated Image (x0)" details="Conditioned on Text Prompt (Optional)" color="purple-700" />
      </div>
    </div>
  );
};
    