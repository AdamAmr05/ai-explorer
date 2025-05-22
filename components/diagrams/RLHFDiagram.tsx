
import React from 'react';
import { DiagramBlock, Arrow } from '../DiagramCommon';

export const RLHFDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6 p-4 bg-slate-900/50 rounded-lg text-xs">
      {/* Stage 1: Supervised Fine-Tuning (Optional, but common) */}
      <div className="w-full p-3 border border-pink-600 rounded-md">
        <div className="text-center mb-2 text-pink-300 font-semibold">Stage 1: Supervised Fine-Tuning (SFT)</div>
        <div className="flex flex-col items-center space-y-2">
          <DiagramBlock title="Pretrained LM" color="pink-700" />
          <Arrow direction="down" label="Fine-tune on high-quality demonstrations" />
          <DiagramBlock title="SFT Model" color="pink-600" />
        </div>
      </div>

      {/* Stage 2: Reward Modeling */}
      <div className="w-full p-3 border border-pink-600 rounded-md">
        <div className="text-center mb-2 text-pink-300 font-semibold">Stage 2: Reward Model Training</div>
        <div className="flex flex-col items-center space-y-2">
          <DiagramBlock title="SFT Model (or Pretrained LM)" color="pink-600" />
          <Arrow direction="down" label="Generate multiple responses to prompts" />
          <DiagramBlock title="Human Annotators Rank Responses" color="pink-500" />
          <Arrow direction="down" label="Comparison Data" />
          <DiagramBlock title="Train Reward Model (RM)" details="Predicts human preference" color="pink-600" />
        </div>
      </div>

      {/* Stage 3: RL Fine-Tuning */}
      <div className="w-full p-3 border border-pink-600 rounded-md">
        <div className="text-center mb-2 text-pink-300 font-semibold">Stage 3: RL Fine-Tuning (e.g., PPO)</div>
        <div className="flex flex-col items-center space-y-2">
          <DiagramBlock title="SFT Model (Policy)" color="pink-600" />
          <Arrow direction="down" label="Generates response to new prompt" />
          <div className="flex items-center">
             <DiagramBlock title="Response" color="pink-500" />
             <Arrow direction="right" />
             <DiagramBlock title="Reward Model (RM)" details="Scores response" color="pink-600" />
          </div>
          <Arrow direction="down" label="Reward Signal" />
          <DiagramBlock title="Update SFT Model via RL (PPO)" color="pink-500" />
          <Arrow direction="down" />
          <DiagramBlock title="Aligned LLM (RLHF Model)" color="pink-700" />
        </div>
      </div>
    </div>
  );
};
    