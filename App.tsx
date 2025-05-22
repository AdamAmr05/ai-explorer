
import React, { useState, useCallback } from 'react';
import { ArchitectureId, ArchitectureInfo } from './types';
import { ARCHITECTURES, API_KEY_INFO, GEMINI_API_KEY } from './constants';
import ArchitectureSelector from './components/ArchitectureSelector';
import ArchitectureDetailView from './components/ArchitectureDetailView';
import { SparklesIcon } from './components/Icons';

const App: React.FC = () => {
  const [selectedArchitectureId, setSelectedArchitectureId] = useState<ArchitectureId | null>(ARCHITECTURES[0]?.id || null);

  const handleSelectArchitecture = useCallback((id: ArchitectureId) => {
    setSelectedArchitectureId(id);
  }, []);

  const selectedArchitecture = ARCHITECTURES.find(arch => arch.id === selectedArchitectureId);

  const isApiKeyMissing = !GEMINI_API_KEY;


  return (
    <div className="flex flex-col h-screen bg-slate-900 text-slate-100">
      <header className="bg-slate-800 p-4 shadow-lg flex items-center justify-between">
        <div className="flex items-center">
          <SparklesIcon className="h-8 w-8 text-sky-400 mr-3" />
          <h1 className="text-2xl font-bold text-sky-400">AI Architecture Explorer</h1>
        </div>
        {isApiKeyMissing && (
          <div className="text-xs text-amber-400 bg-amber-900/50 p-2 rounded-md">
            {API_KEY_INFO}
          </div>
        )}
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-1/4 xl:w-1/5 bg-slate-800 p-4 overflow-y-auto shadow-md">
          <ArchitectureSelector
            architectures={ARCHITECTURES}
            selectedId={selectedArchitectureId}
            onSelect={handleSelectArchitecture}
          />
        </aside>
        <main className="flex-1 p-6 overflow-y-auto bg-slate-900">
          {selectedArchitecture ? (
            <ArchitectureDetailView architecture={selectedArchitecture} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-xl text-slate-400">Select an architecture to learn more.</p>
            </div>
          )}
        </main>
      </div>
      <footer className="bg-slate-800 p-3 text-center text-xs text-slate-400">
        Explore Modern AI Architectures | Made by Adam Amr
      </footer>
    </div>
  );
};

export default App;