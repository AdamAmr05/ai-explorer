import React from 'react';
import { DiagramBlock, Arrow, PlusIcon } from '../DiagramCommon';

export const RAGDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-slate-900/50 rounded-lg text-xs">
      <DiagramBlock title="User Query" color="red-700" />
      <Arrow direction="down" />
      
      {/* Split the query into two paths */}
      <div className="flex flex-row items-start justify-center w-full space-x-8">
        {/* Left path: Original query preservation */}
        <div className="flex flex-col items-center space-y-4">
          <DiagramBlock title="User Query" color="red-700" />
        </div>

        {/* Right path: Retrieval process */}
        <div className="flex flex-col items-center space-y-4">
          <DiagramBlock title="Retriever" details="e.g., Dense Retriever, BM25" color="red-700" />
          <Arrow direction="down" label="Queries" />
          <DiagramBlock title="Knowledge Base / Vector DB" details="Documents, FAQs, Chunks" color="red-700" />
          <Arrow direction="down" label="Retrieves Relevant Context" />
          <DiagramBlock title="Retrieved Context" color="red-700" />
        </div>
      </div>

      {/* Visual connector lines to show both paths converging */}
      <div className="flex items-center justify-center w-full mt-4 mb-4">
        <div className="flex-1 h-px bg-red-400 opacity-50"></div>
        <div className="mx-4 text-red-300">⌄</div>
        <div className="flex-1 h-px bg-red-400 opacity-50"></div>
      </div>

      {/* Combine Query and Context */}
      <div className="flex items-center space-x-2">
        <DiagramBlock title="User Query" color="red-700" />
        <PlusIcon />
        <DiagramBlock title="Retrieved Context" color="red-700" />
      </div>
      <Arrow direction="down" label="Construct Augmented Prompt" />
      <DiagramBlock title="Large Language Model (Generator)" color="red-700" />
      <Arrow direction="down" />
      <DiagramBlock title="Augmented Response" details="Grounded & Contextual" color="red-700" />
    </div>
  );
};