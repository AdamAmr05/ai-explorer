import React from 'react';
import { ArchitectureInfo } from '../types';
import GeminiInteraction from './GeminiInteraction';
import { LightBulbIcon, CodeBracketIcon, CheckCircleIcon } from './Icons';

interface ArchitectureDetailViewProps {
  architecture: ArchitectureInfo;
}

const SectionCard: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode; borderColorClass: string }> = ({ title, icon, children, borderColorClass }) => (
  <div className={`bg-slate-800 shadow-lg rounded-lg p-6 mb-6 border-l-4 ${borderColorClass}`}>
    <h3 className="text-xl font-semibold mb-3 flex items-center text-slate-100">
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </h3>
    <div className="text-slate-300 space-y-2">{children}</div>
  </div>
);

const ArchitectureDetailView: React.FC<ArchitectureDetailViewProps> = ({ architecture }) => {
  const DiagramComponent = architecture.diagram;
  const borderColor = `border-${architecture.color}`;
  const textColor = `text-${architecture.color}`;

  return (
    <div className="space-y-8">
      <header className="pb-4 border-b-2 border-slate-700">
        <h2 className={`text-4xl font-bold ${textColor}`}>{architecture.name}</h2>
        <p className="text-lg text-slate-400 mt-1">{architecture.tagline}</p>
      </header>

      <SectionCard title="Description" borderColorClass={borderColor} icon={<LightBulbIcon className={`w-6 h-6 ${textColor}`} />}>
        <p className="leading-relaxed">{architecture.description}</p>
      </SectionCard>

      <SectionCard title="Key Concepts" borderColorClass={borderColor} icon={<CheckCircleIcon className={`w-6 h-6 ${textColor}`} />}>
        <ul className="list-disc list-inside space-y-1">
          {architecture.keyConcepts.map((concept, index) => (
            <li key={index}>{concept}</li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title="Common Use Cases" borderColorClass={borderColor} icon={<CodeBracketIcon className={`w-6 h-6 ${textColor}`} />}>
        <ul className="list-disc list-inside space-y-1">
          {architecture.useCases.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </ul>
      </SectionCard>
      
      <SectionCard title="Conceptual Diagram" borderColorClass={borderColor} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${textColor}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
</svg>
}>
         <div className="p-4 bg-slate-850 rounded-md overflow-x-auto min-w-full">
           <DiagramComponent />
         </div>
      </SectionCard>

      <GeminiInteraction 
        architectureName={architecture.name} 
        accentColor={architecture.color} 
        initialPromptSuggestion={architecture.furtherReadingPrompt}
      />
    </div>
  );
};

export default ArchitectureDetailView;