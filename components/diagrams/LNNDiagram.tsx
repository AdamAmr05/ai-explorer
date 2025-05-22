
import React from 'react';
import { DiagramBlock, Arrow } from '../DiagramCommon';

export const LNNDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6 p-4 bg-slate-900/50 rounded-lg text-xs">
      <div className="text-center mb-2 text-emerald-300 font-semibold">Liquid Neural Network (LNN) / Neural ODE</div>

      <DiagramBlock title="Input: Streaming/Continuous Data (x(t))" details="e.g., Sensor readings, Time series" color="emerald-700" />
      <Arrow direction="down" />

      <div className="border-2 border-dashed border-emerald-400 p-4 rounded-lg w-full max-w-md">
        <div className="text-center mb-2 text-emerald-300 font-semibold">LNN Cell / Layer</div>
        <div className="flex flex-col items-center space-y-3">
          <DiagramBlock title="Hidden State h(t)" details="Represents system's current state" color="emerald-600" />
          <Arrow direction="down" label="Dynamics modeled by ODEs" />
          <DiagramBlock title="dh/dt = f(h(t), x(t), θ)" details="Parameterized Ordinary Differential Equation" color="emerald-500" className="w-auto"/>
          <div className="text-sm text-slate-400">
             <p>f: Neural network defining the derivative</p>
             <p>θ: Trainable parameters of f</p>
          </div>
          <Arrow direction="down" label="Solved by ODE Solver (e.g., Euler, RK4)" />
          <DiagramBlock title="Updated Hidden State h(t+Δt)" details="State at next time step" color="emerald-600" />
        </div>
      </div>
      <div className="text-center text-sm text-slate-400 mt-1">
            (Can be stacked or recurrently connected)
      </div>
      <Arrow direction="down" />
      <DiagramBlock title="Output Layer / Decoder" details="Processes h(t) for task" color="emerald-600" />
      <Arrow direction="down" />
      <DiagramBlock title="Output y(t)" details="e.g., Control signal, Prediction, Classification" color="emerald-700" />
      
      <div className="mt-4 text-center">
        <p className="text-emerald-200 font-medium">Key Characteristics:</p>
        <ul className="list-disc list-inside text-slate-300 text-left mx-auto max-w-xs">
            <li>Continuous-time processing</li>
            <li>Adaptive behavior to input dynamics</li>
            <li>Implicit causality and robustness</li>
            <li>Compact representation (often fewer parameters)</li>
        </ul>
      </div>
    </div>
  );
};
