
import React from 'react';
import { DiagramBlock, Arrow, PlusIcon, ConnectorLine } from '../DiagramCommon';

export const MultimodalDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6 p-4 bg-slate-900/50 rounded-lg text-xs">
      <div className="text-center mb-2 text-indigo-300 font-semibold">Multimodal AI Model</div>

      {/* Input Modalities */}
      <div className="flex justify-around w-full space-x-4">
        <div className="flex flex-col items-center space-y-2">
          <DiagramBlock title="Modality 1: Text" details="e.g., Sentence, Document" color="indigo-700" />
          <Arrow direction="down" />
          <DiagramBlock title="Text Encoder" details="e.g., Transformer" color="indigo-600" />
          <Arrow direction="down" />
          <DiagramBlock title="Text Representation" color="indigo-500" />
        </div>
        
        <div className="flex flex-col items-center space-y-2">
          <DiagramBlock title="Modality 2: Image" details="e.g., Photograph, Frame" color="indigo-700" />
          <Arrow direction="down" />
          <DiagramBlock title="Image Encoder" details="e.g., ViT, CNN" color="indigo-600" />
          <Arrow direction="down" />
          <DiagramBlock title="Image Representation" color="indigo-500" />
        </div>

        <div className="flex flex-col items-center space-y-2">
          <DiagramBlock title="Modality 3: Audio" details="e.g., Speech, Sound" color="indigo-700" />
          <Arrow direction="down" />
          <DiagramBlock title="Audio Encoder" details="e.g., Wav2Vec, Spectrogram CNN" color="indigo-600" />
          <Arrow direction="down" />
          <DiagramBlock title="Audio Representation" color="indigo-500" />
        </div>
      </div>

      {/* Fusion Layer */}
      <div className="flex w-full justify-center items-center my-2">
          <ConnectorLine type="vertical" lengthClass="h-4" className="absolute top-[-16px] left-[20%]" />
          <ConnectorLine type="vertical" lengthClass="h-4" className="absolute top-[-16px] left-1/2 transform -translate-x-1/2" />
          <ConnectorLine type="vertical" lengthClass="h-4" className="absolute top-[-16px] left-[80%]" />
          <ConnectorLine type="horizontal" lengthClass="w-3/5" className="absolute top-[-16px] left-1/2 transform -translate-x-1/2" />
      </div>
      <Arrow direction="down" label="Combine/Align Information" />
      <DiagramBlock title="Fusion Mechanism / Shared Embedding Space" details="e.g., Cross-Attention, Concatenation, Gated Fusion, Joint Projection" color="indigo-500" className="w-auto max-w-lg"/>
      <Arrow direction="down" />
      <DiagramBlock title="Unified Multimodal Representation" color="indigo-600" />
      <Arrow direction="down" />

      {/* Output / Downstream Tasks */}
      <DiagramBlock title="Downstream Task Head" details="e.g., Classifier, Generator, Regressor" color="indigo-700" />
      <Arrow direction="down" />
      <DiagramBlock title="Output" details="e.g., VQA Answer, Image Caption, Generated Image/Audio, Classification Label" color="indigo-700" className="w-auto max-w-md"/>
    </div>
  );
};
