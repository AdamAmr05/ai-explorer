import React from 'react';

export enum ArchitectureId {
  TRANSFORMER = 'transformer',
  DIFFUSION = 'diffusion',
  MOE = 'moe',
  VIT = 'vit',
  RAG = 'rag',
  GNN = 'gnn',
  RLHF = 'rlhf',
  GAN = 'gan',
  SSL = 'ssl',
  FL = 'fl',
  NERF = 'nerf',
  MULTIMODAL = 'multimodal',
  WORLDMODEL = 'worldmodel',
  LNN = 'lnn',
}

export interface ArchitectureInfo {
  id: ArchitectureId;
  name: string;
  tagline: string;
  description: string;
  keyConcepts: string[];
  useCases: string[];
  diagram: React.FC;
  furtherReadingPrompt: string; // Kept for potential future use or if chat init needs a seed question
  color: string; // Tailwind color class for accents, e.g., 'blue-500'
}

export interface DiagramBlockProps {
  title: string;
  details?: string;
  className?: string;
  color?: string; // Tailwind color class for border/bg
}

export interface ArrowProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  label?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
  id: string;
}