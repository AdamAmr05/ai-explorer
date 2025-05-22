
import React from 'react';
import { DiagramBlock, Arrow, ConnectorLine } from '../DiagramCommon';

export const FLDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6 p-4 bg-slate-900/50 rounded-lg text-xs">
      <div className="text-center mb-2 text-amber-300 font-semibold">Federated Learning (FL) Cycle</div>

      <DiagramBlock title="Central Server" details="Coordinates training, aggregates updates" color="amber-700" />
      
      <div className="flex justify-around w-full items-center my-4">
        <Arrow direction="down" label="1. Distributes Global Model" />
        <ConnectorLine type="horizontal" lengthClass="w-3/4" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"/>
        <Arrow direction="up" label="3. Send Model Updates (not raw data)" className="mt-16"/>
      </div>

      {/* Client Devices */}
      <div className="flex justify-around w-full space-x-2">
        {/* Client 1 */}
        <div className="flex flex-col items-center space-y-1 p-2 border border-dashed border-amber-500 rounded-md">
          <DiagramBlock title="Client 1" details="e.g., Mobile Device, Hospital" color="amber-600" />
          <DiagramBlock title="Local Data 1" details="(Private)" color="amber-500" />
          <Arrow direction="down" label="2. Trains Model Locally" />
          <DiagramBlock title="Local Model Update 1" color="amber-500" />
        </div>

        {/* Client 2 */}
        <div className="flex flex-col items-center space-y-1 p-2 border border-dashed border-amber-500 rounded-md">
          <DiagramBlock title="Client 2" details="e.g., Mobile Device, Hospital" color="amber-600" />
          <DiagramBlock title="Local Data 2" details="(Private)" color="amber-500" />
          <Arrow direction="down" label="2. Trains Model Locally" />
          <DiagramBlock title="Local Model Update 2" color="amber-500" />
        </div>
        
        {/* Client N */}
        <div className="flex flex-col items-center space-y-1 p-2 border border-dashed border-amber-500 rounded-md">
          <DiagramBlock title="Client N..." details="e.g., Mobile Device, Hospital" color="amber-600" />
          <DiagramBlock title="Local Data N" details="(Private)" color="amber-500" />
          <Arrow direction="down" label="2. Trains Model Locally" />
          <DiagramBlock title="Local Model Update N" color="amber-500" />
        </div>
      </div>
      
      <div className="mt-6 text-center">
         <Arrow direction="down" label="4. Server Aggregates Updates (e.g., FedAvg)" className="mt-[-20px] mb-2"/>
         <DiagramBlock title="Updated Global Model" color="amber-700" />
         <p className="text-slate-400 mt-2">Cycle Repeats</p>
      </div>
    </div>
  );
};
