
import React from 'react';
import { DiagramBlock, Arrow, PlusIcon } from '../DiagramCommon';

export const NeRFDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6 p-4 bg-slate-900/50 rounded-lg text-xs">
      <div className="text-center mb-2 text-orange-300 font-semibold">Neural Radiance Fields (NeRF)</div>

      <div className="flex justify-around w-full items-start">
        <DiagramBlock title="Input Images (Multiple Views)" color="orange-700" />
        <DiagramBlock title="Camera Poses (for each image)" color="orange-700" />
      </div>
      <Arrow direction="down" label="Used to sample rays & points" />

      <DiagramBlock title="For each Pixel in Novel View:" color="orange-600" className="w-auto" />
      <Arrow direction="down" />
      <DiagramBlock title="Cast Ray through Pixel" details="Sample 3D Points (x,y,z) along ray" color="orange-600" />
      <Arrow direction="down" />
      
      <div className="flex items-center space-x-2">
        <DiagramBlock title="3D Point (x,y,z)" color="orange-500" />
        <PlusIcon />
        <DiagramBlock title="Viewing Direction (θ,φ)" color="orange-500" />
      </div>
      <Arrow direction="down" label="Input to MLP (Positional Encoded)" />
      
      <DiagramBlock title="Neural Network (MLP)" details="Implicit Scene Representation" color="orange-500" />
      <Arrow direction="down" />
      
      <div className="flex justify-around w-full">
        <DiagramBlock title="Output: Color (RGB)" color="orange-600" />
        <DiagramBlock title="Output: Volume Density (σ)" color="orange-600" />
      </div>
      <Arrow direction="down" label="For all sampled points on the ray" />

      <DiagramBlock title="Volumetric Rendering" details="Integrate RGB & Density along ray" color="orange-500" />
      <Arrow direction="down" />
      <DiagramBlock title="Pixel Color for Novel View" color="orange-700" />
      <p className="text-slate-400 mt-2">Repeat for all pixels to synthesize a new image.</p>
    </div>
  );
};
