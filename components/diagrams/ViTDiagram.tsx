
import React from 'react';
import { DiagramBlock, Arrow, PlusIcon } from '../DiagramCommon';

export const ViTDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-slate-900/50 rounded-lg text-xs">
      <DiagramBlock title="Input Image" color="yellow-700" />
      <Arrow direction="down" />
      <DiagramBlock title="Split into Patches" details="e.g., 16x16 pixels" color="yellow-600" />
      <Arrow direction="down" />
      <DiagramBlock title="Linear Projection of Patches (Embeddings)" color="yellow-600" />
      <Arrow direction="down" />
      <div className="flex items-center space-x-2">
        <DiagramBlock title="Patch Embeddings" color="yellow-500" />
        <PlusIcon />
        <DiagramBlock title="Positional Embeddings" color="yellow-500" />
         <PlusIcon />
        <DiagramBlock title="[CLS] Token" details="(Optional)" color="yellow-500" />
      </div>
      <Arrow direction="down" />
      <div className="border-2 border-dashed border-yellow-400 p-4 rounded-lg w-full max-w-md">
        <div className="text-center mb-2 text-yellow-300 font-semibold">Transformer Encoder (Nx)</div>
        {/* Simplified representation of Transformer Encoder from TransformerDiagram */}
        <div className="flex flex-col items-center space-y-3">
          <DiagramBlock title="Multi-Head Self-Attention" color="yellow-400" />
          <Arrow direction="down" label="Add & Norm" />
          <DiagramBlock title="Feed Forward Network (MLP)" color="yellow-400" />
          <Arrow direction="down" label="Add & Norm" />
        </div>
      </div>
      <Arrow direction="down" />
      <DiagramBlock title="MLP Head" details="For Classification" color="yellow-600" />
      <Arrow direction="down" />
      <DiagramBlock title="Class Prediction" color="yellow-700" />
    </div>
  );
};
    