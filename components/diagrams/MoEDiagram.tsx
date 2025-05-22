import React from 'react';
import { DiagramBlock, Arrow, ConnectorLine } from '../DiagramCommon';

export const MoEDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-slate-900/50 rounded-lg text-xs">
      <DiagramBlock title="Input Token" color="green-700" />
      <Arrow direction="down" />
      <DiagramBlock title="Gating Network" color="green-700" />
      
      {/* Connecting Gating Network to Experts */}
      <div className="relative w-full h-8 my-2">
        {/* Main vertical line down from Gating Network */}
        <ConnectorLine type="vertical" lengthClass="h-4" className="absolute top-[-16px] left-1/2 -translate-x-1/2"/>
        {/* Horizontal dispatch line */}
        <ConnectorLine type="horizontal" lengthClass="w-4/5 max-w-xs" className="absolute top-[0px] left-1/2 -translate-x-1/2"/>
        {/* Branching lines to where experts will be */}
        <ConnectorLine type="vertical" lengthClass="h-4" className="absolute top-[0px] left-[20%] -translate-x-1/2 transform rotate-0"/>
        <ConnectorLine type="vertical" lengthClass="h-4" className="absolute top-[0px] left-1/2 -translate-x-1/2 transform rotate-0"/>
        <ConnectorLine type="vertical" lengthClass="h-4" className="absolute top-[0px] left-[80%] -translate-x-1/2 transform rotate-0"/>
      </div>

      <div className="flex justify-around w-full space-x-2">
        <DiagramBlock title="Expert 1" color="green-700" />
        <DiagramBlock title="Expert 2" color="green-700" />
        <DiagramBlock title="Expert N" color="green-700" />
      </div>

      {/* Connecting Experts to Weighted Sum */}
       <div className="relative w-full h-8 my-2">
        <ConnectorLine type="vertical" lengthClass="h-4" className="absolute top-[-16px] left-[20%] -translate-x-1/2 transform rotate-0"/>
        <ConnectorLine type="vertical" lengthClass="h-4" className="absolute top-[-16px] left-1/2 -translate-x-1/2 transform rotate-0"/>
        <ConnectorLine type="vertical" lengthClass="h-4" className="absolute top-[-16px] left-[80%] -translate-x-1/2 transform rotate-0"/>
        <ConnectorLine type="horizontal" lengthClass="w-4/5 max-w-xs" className="absolute top-[0px] left-1/2 -translate-x-1/2"/>
        <ConnectorLine type="vertical" lengthClass="h-4" className="absolute top-[0px] left-1/2 -translate-x-1/2"/>
      </div>
      
      <Arrow direction="down" label="Combine Outputs (Weighted by Gating Network)" />
      <DiagramBlock title="Output Token Representation" color="green-700" />
    </div>
  );
};