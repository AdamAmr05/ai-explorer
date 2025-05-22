
import React from 'react';
import { DiagramBlock, Arrow, PlusIcon, ConnectorLine } from '../DiagramCommon';

export const SSLDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6 p-4 bg-slate-900/50 rounded-lg text-xs">
      <div className="text-center mb-2 text-lime-300 font-semibold">Self-Supervised Learning (SSL)</div>
      
      <DiagramBlock title="Unlabeled Data" details="Large Corpus (Images, Text, etc.)" color="lime-700" />
      <Arrow direction="down" label="Design Pretext Task" />

      {/* Two main branches for pretext tasks */}
      <div className="flex flex-col md:flex-row justify-around w-full items-stretch md:space-x-4 space-y-4 md:space-y-0">
        {/* Contrastive Learning Path */}
        <div className="flex-1 flex flex-col items-center space-y-2 p-3 border border-dashed border-lime-500 rounded-md">
          <div className="font-medium text-lime-400 mb-1 text-center">Contrastive Learning<br/>(e.g., SimCLR, MoCo)</div>
          <DiagramBlock title="Input Sample" color="lime-600" />
          <Arrow direction="down" label="Create Two Augmented Views"/>
          <div className="flex justify-around w-full space-x-2">
            <DiagramBlock title="View A" color="lime-550"/>
            <DiagramBlock title="View B" color="lime-550"/>
          </div>
          <div className="flex justify-around w-full space-x-2">
            <Arrow direction="down" />
            <Arrow direction="down" />
          </div>
          <div className="flex justify-around w-full space-x-2">
            <DiagramBlock title="Encoder (Shared)" color="lime-500" />
            <DiagramBlock title="Encoder (Shared)" color="lime-500" />
          </div>
           <div className="flex justify-around w-full space-x-2">
            <Arrow direction="down" />
            <Arrow direction="down" />
          </div>
          <div className="flex justify-around w-full space-x-2">
            <DiagramBlock title="Representation A" color="lime-500" />
            <DiagramBlock title="Representation B" color="lime-500" />
          </div>
          <Arrow direction="down" label="Contrastive Loss (Attract A & B, Repel from others)" />
           <DiagramBlock title="Learned Encoder" color="lime-600"/>
        </div>

        {/* Masked/Predictive Learning Path */}
        <div className="flex-1 flex flex-col items-center space-y-2 p-3 border border-dashed border-lime-500 rounded-md">
          <div className="font-medium text-lime-400 mb-1 text-center">Masked/Predictive Learning<br/>(e.g., BERT, MAE)</div>
          <DiagramBlock title="Input Sample" color="lime-600" />
          <Arrow direction="down" label="Mask/Corrupt Part" />
          <DiagramBlock title="Masked/Corrupted Sample" details="e.g., [MASK] token, masked patches" color="lime-550" />
          <Arrow direction="down" />
          <DiagramBlock title="Encoder" color="lime-500" />
          <Arrow direction="down" />
           <DiagramBlock title="Decoder (Optional)" color="lime-500" />
           <Arrow direction="down" label="Predict Masked Part / Reconstruct Original" />
          <DiagramBlock title="Prediction Loss" color="lime-500" />
           <Arrow direction="down" />
          <DiagramBlock title="Learned Encoder/Model" color="lime-600"/>
        </div>
      </div>
      
      <div className="relative w-full h-8 my-2">
        <ConnectorLine type="vertical" lengthClass="h-4" className="absolute top-[-16px] left-[25%] md:left-1/4 -translate-x-1/2"/>
        <ConnectorLine type="vertical" lengthClass="h-4" className="absolute top-[-16px] left-[75%] md:left-3/4 -translate-x-1/2"/>
        <ConnectorLine type="horizontal" lengthClass="w-1/2 md:w-1/2" className="absolute top-[0px] left-1/2 -translate-x-1/2"/>
        <ConnectorLine type="vertical" lengthClass="h-4" className="absolute top-[0px] left-1/2 -translate-x-1/2"/>
      </div>

      <DiagramBlock title="Powerful Feature Representations" color="lime-650" />
      <Arrow direction="down" label="Fine-tune or use for" />
      <DiagramBlock title="Downstream Tasks" details="Classification, Detection, etc. (with less labeled data)" color="lime-700" />
    </div>
  );
};