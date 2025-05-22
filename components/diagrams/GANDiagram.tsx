import React from 'react';
import { DiagramBlock, Arrow } from '../DiagramCommon';

export const GANDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-slate-900/50 rounded-lg text-xs">
      <div className="text-center mb-4 text-teal-300 font-semibold">Generative Adversarial Network (GAN)</div>
      
      {/* Generator Path */}
      <DiagramBlock title="Latent Noise (z)" color="teal-700" />
      <Arrow direction="down" />
      <DiagramBlock title="Generator (G)" details="Neural Network" color="teal-600" />
      <Arrow direction="down" label="Generates" />
      <DiagramBlock title="Fake Data (G(z))" details="e.g., Image" color="teal-500" />
      
      {/* Two inputs to Discriminator */}
      <div className="flex justify-center items-end space-x-8 mt-4">
        <div className="flex flex-col items-center">
          <Arrow direction="down" />
          <p className="text-xs text-slate-400 mt-1">Fake</p>
        </div>
        
        <div className="flex flex-col items-center">
          <DiagramBlock title="Real Data (x)" details="e.g., Image" color="teal-700" />
          <Arrow direction="down" />
          <p className="text-xs text-slate-400 mt-1">Real</p>
        </div>
      </div>
      
      {/* Discriminator */}
      <DiagramBlock title="Discriminator (D)" details="Neural Network" color="teal-600" />
      <Arrow direction="down" label="Classifies as Real/Fake" />
      <DiagramBlock title="Prediction" details="P(Real|Data)" color="teal-500" />

      {/* Adversarial Training */}
      <div className="flex justify-around w-full mt-6">
        <div className="flex flex-col items-center text-center">
          <DiagramBlock title="Generator Loss" details="Penalize G for not fooling D" color="teal-400" />
          <Arrow direction="up" label="Update G" />
          <p className="text-xs text-slate-400 mt-1">Goal: min log(1-D(G(z)))</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <DiagramBlock title="Discriminator Loss" details="Penalize D for misclassifying" color="teal-400" />
          <Arrow direction="up" label="Update D" />
          <p className="text-xs text-slate-400 mt-1">Goal: max log(D(x)) + log(1-D(G(z)))</p>
        </div>
      </div>
      
      <p className="text-slate-400 text-center mt-4">The Generator and Discriminator are trained iteratively.</p>
    </div>
  );
};