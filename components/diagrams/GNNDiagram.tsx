
import React from 'react';
import { DiagramBlock, Arrow } from '../DiagramCommon';

export const GNNDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-slate-900/50 rounded-lg text-xs">
      <DiagramBlock title="Input Graph" details="Nodes, Edges, Features" color="cyan-700" />
      <Arrow direction="down" />
      <div className="border-2 border-dashed border-cyan-400 p-4 rounded-lg w-full max-w-md">
        <div className="text-center mb-2 text-cyan-300 font-semibold">GNN Layer (Lx)</div>
        <div className="flex flex-col items-center space-y-3">
          <DiagramBlock title="Message Passing" details="Nodes gather info from neighbors" color="cyan-500" />
          <Arrow direction="down" />
          <DiagramBlock title="Aggregation" details="e.g., Sum, Mean, Max" color="cyan-500" />
          <Arrow direction="down" />
          <DiagramBlock title="Update Function" details="e.g., MLP, GRU" color="cyan-500" />
        </div>
         <div className="text-center mt-2 text-sm text-slate-400">(Repeated L times)</div>
      </div>
      <Arrow direction="down" />
      <DiagramBlock title="Node/Edge/Graph Embeddings" color="cyan-600" />
      <Arrow direction="down" />
      <DiagramBlock title="Task-Specific Head" details="e.g., Classifier, Regressor" color="cyan-700" />
      <Arrow direction="down" />
      <DiagramBlock title="Output" details="Predictions, Classifications" color="cyan-700" />
    </div>
  );
};
    