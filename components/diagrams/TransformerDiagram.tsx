
import React from 'react';
import { DiagramBlock, Arrow, PlusIcon } from '../DiagramCommon';

export const TransformerDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-slate-900/50 rounded-lg text-xs">
      <DiagramBlock title="Input Sequence" details="e.g., Text" color="blue-700" />
      <Arrow direction="down" />
      <div className="flex items-center space-x-2">
        <DiagramBlock title="Input Embeddings" color="blue-600" />
        <PlusIcon />
        <DiagramBlock title="Positional Encoding" color="blue-600" />
      </div>
      <Arrow direction="down" />
      <div className="border-2 border-dashed border-blue-400 p-4 rounded-lg">
        <div className="text-center mb-2 text-blue-300 font-semibold">Encoder Layer (Nx)</div>
        <div className="flex flex-col items-center space-y-3">
          <DiagramBlock title="Multi-Head Self-Attention" color="blue-500" />
          <div className="flex items-center">
            <Arrow direction="down" label="Add & Norm" />
          </div>
          <DiagramBlock title="Feed Forward Network" color="blue-500" />
           <div className="flex items-center">
            <Arrow direction="down" label="Add & Norm" />
          </div>
        </div>
      </div>
       {/* Simplified: Not showing full Encoder-Decoder for brevity, assuming encoder-only for tasks like classification/generation */}
      <Arrow direction="down" />
      <DiagramBlock title="Output" details="e.g., Class logits, Generated sequence" color="blue-700" />
    </div>
  );
};
    