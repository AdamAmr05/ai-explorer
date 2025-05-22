
import React from 'react';
import { DiagramBlock, Arrow } from '../DiagramCommon';

export const GANDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-slate-900/50 rounded-lg text-xs">
      <div className="text-center mb-4 text-teal-300 font-semibold">Generative Adversarial Network (GAN)</div>
      
      {/* Generator Path */}
      <div className="flex flex-col items-center space-y-2">
        <DiagramBlock title="Latent Noise (z)" color="teal-700" />
        <Arrow direction="down" />
        <DiagramBlock title="Generator (G)" details="Neural Network" color="teal-600" />
        <Arrow direction="down" label="Generates" />
        <DiagramBlock title="Fake Data (G(z))" details="e.g., Image" color="teal-500"className="mb-4" />
      </div>

      {/* Discriminator and Real Data Path */}
      <div className="flex flex-row justify-around w-full items-center">
        {/* Path from Fake Data to Discriminator */}
        <div className="flex flex-col items-center">
          {/* Fake Data block is above, arrow implies connection */}
           <Arrow direction="down" className="mt-[-30px]"/>
        </div>
        
        <DiagramBlock title="Discriminator (D)" details="Neural Network" color="teal-600" className="mx-4" />
        
        {/* Path from Real Data to Discriminator */}
        <div className="flex flex-col items-center">
          <DiagramBlock title="Real Data (x)" details="e.g., Image" color="teal-700" />
          <Arrow direction="down" />
        </div>
      </div>
      
      {/* Connector lines to Discriminator (visual aid) */}
      <div className="relative w-full h-2 mb-2">
        <div className="absolute left-1/4 top-0 w-0.5 h-6 bg-slate-600 transform -translate-x-1/2"></div> {/* Line from fake data path */}
        <div className="absolute right-1/4 top-0 w-0.5 h-6 bg-slate-600 transform translate-x-1/2"></div> {/* Line from real data path */}
         <div className="absolute left-1/4 top-0 w-1/2 h-0.5 bg-slate-600 transform -translate-y-full"></div> {/* Horizontal line above D */}
      </div>


      {/* Output of Discriminator */}
      <Arrow direction="down" label="Classifies as Real/Fake" />
      <DiagramBlock title="Prediction" details="P(Real|Data)" color="teal-500" />

      {/* Loss Calculation and Updates */}
      <div className="flex justify-around w-full mt-4">
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