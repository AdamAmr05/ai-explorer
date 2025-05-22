import { ArchitectureInfo, ArchitectureId } from './types';
import { TransformerDiagram } from './components/diagrams/TransformerDiagram';
import { DiffusionDiagram } from './components/diagrams/DiffusionDiagram';
import { MoEDiagram } from './components/diagrams/MoEDiagram';
import { ViTDiagram } from './components/diagrams/ViTDiagram';
import { RAGDiagram } from './components/diagrams/RAGDiagram';
import { GNNDiagram } from './components/diagrams/GNNDiagram';
import { RLHFDiagram } from './components/diagrams/RLHFDiagram';
import { GANDiagram } from './components/diagrams/GANDiagram';
import { SSLDiagram } from './components/diagrams/SSLDiagram';
import { FLDiagram } from './components/diagrams/FLDiagram';
import { NeRFDiagram } from './components/diagrams/NeRFDiagram';
import { MultimodalDiagram } from './components/diagrams/MultimodalDiagram';
import { WorldModelDiagram } from './components/diagrams/WorldModelDiagram';
import { LNNDiagram } from './components/diagrams/LNNDiagram';


export const API_KEY_INFO = "Gemini API Key not set. Please configure the API_KEY environment variable for full functionality.";
export const GEMINI_API_KEY: string | undefined = process.env.API_KEY;
export const GEMINI_CHAT_MODEL_NAME = 'gemini-2.5-flash-preview-04-17';


export const ARCHITECTURES: ArchitectureInfo[] = [
  {
    id: ArchitectureId.TRANSFORMER,
    name: "Transformers",
    tagline: "The engine of modern NLP and beyond, mastering sequential data with attention.",
    description: "Transformers revolutionized sequence-to-sequence tasks by introducing the attention mechanism, allowing models to weigh the importance of different parts of the input data. They process entire sequences simultaneously, enabling parallelization and capturing long-range dependencies effectively. Key components include self-attention, multi-head attention, positional encodings, and feed-forward networks stacked in an encoder-decoder structure or encoder/decoder-only variants.",
    keyConcepts: ["Self-Attention", "Multi-Head Attention", "Positional Encoding", "Encoder-Decoder Architecture", "Scaled Dot-Product Attention"],
    useCases: ["Machine Translation (e.g., Google Translate)", "Text Generation (e.g., GPT models)", "Text Summarization", "Question Answering", "Code Generation"],
    diagram: TransformerDiagram,
    furtherReadingPrompt: "Explain the Transformer architecture in detail, focusing on the role of self-attention and how it enables understanding of context in language. What are the key innovations it brought over RNNs/LSTMs?",
    color: "blue-500",
  },
  {
    id: ArchitectureId.DIFFUSION,
    name: "Diffusion Models",
    tagline: "Generating stunningly realistic images by reversing a noise process.",
    description: "Diffusion models are generative models that learn to create data, typically images, by reversing a gradual noising process. The forward process adds noise to an image until it becomes pure noise. The reverse process, learned by a neural network (often a U-Net), denoises it step-by-step to generate a new image, often conditioned on text prompts or other inputs. They are known for their high-quality sample generation.",
    keyConcepts: ["Forward (Noising) Process", "Reverse (Denoising) Process", "U-Net Architecture", "Score Matching", "Conditional Generation", "DDPMs, DDIMs"],
    useCases: ["High-fidelity Image Generation (e.g., DALL-E 2, Stable Diffusion, Imagen)", "Image Editing & Inpainting", "Video Generation", "Audio Synthesis", "Drug Discovery"],
    diagram: DiffusionDiagram,
    furtherReadingPrompt: "Describe the core mechanism of Diffusion Models. How does the forward noising process and the reverse denoising process work? Explain the role of the U-Net and how conditioning is incorporated for text-to-image generation.",
    color: "purple-500",
  },
  {
    id: ArchitectureId.MOE,
    name: "Mixture of Experts (MoE)",
    tagline: "Scaling models efficiently with sparsely activated, specialized sub-networks.",
    description: "Mixture of Experts (MoE) is an architecture that allows models to scale to trillions of parameters without proportionally increasing computational cost for each input. It consists of multiple 'expert' sub-networks and a 'gating' network that dynamically selects which experts process a given input token. This sparse activation means only a fraction of the model is used per inference, making it highly efficient for very large models.",
    keyConcepts: ["Expert Networks", "Gating Network", "Sparse Activation", "Load Balancing", "Conditional Computation"],
    useCases: ["Large Language Models (e.g., Google's Switch Transformer, Mixtral)", "Machine Translation", "Recommendation Systems", "Multi-task Learning"],
    diagram: MoEDiagram,
    furtherReadingPrompt: "Explain the Mixture of Experts (MoE) architecture. What are the roles of the gating network and the expert networks? How does sparse activation contribute to efficiency, and what are the challenges in training MoE models, such as load balancing?",
    color: "green-500",
  },
  {
    id: ArchitectureId.VIT,
    name: "Vision Transformers (ViT)",
    tagline: "Applying the power of Transformers directly to image understanding tasks.",
    description: "Vision Transformers (ViTs) adapt the Transformer architecture, originally designed for text, to computer vision tasks. They treat an image as a sequence of fixed-size patches, similar to words in a sentence. These patches are linearly embedded, position embeddings are added, and the resulting sequence is fed into a standard Transformer encoder. ViTs have shown competitive or superior performance to CNNs on many image recognition benchmarks, especially with large datasets.",
    keyConcepts: ["Image Patching", "Patch Embedding", "Positional Embedding", "Transformer Encoder for Images", "Class Token"],
    useCases: ["Image Classification", "Object Detection", "Image Segmentation", "Medical Image Analysis", "Video Understanding (with extensions)"],
    diagram: ViTDiagram,
    furtherReadingPrompt: "How do Vision Transformers (ViTs) adapt the Transformer architecture for image processing? Explain the concept of image patching, patch embedding, and the role of the Transformer encoder. What are the advantages and disadvantages of ViTs compared to CNNs?",
    color: "yellow-500",
  },
  {
    id: ArchitectureId.RAG,
    name: "Retrieval Augmented Generation (RAG)",
    tagline: "Grounding LLM responses with up-to-date, verifiable external knowledge.",
    description: "Retrieval Augmented Generation (RAG) enhances Large Language Models (LLMs) by integrating external knowledge sources. When a query is received, RAG first retrieves relevant documents or data snippets from a knowledge base (e.g., a vector database). This retrieved context is then provided to the LLM along with the original query, enabling the model to generate more accurate, factual, and contextually relevant responses, reducing hallucinations and allowing for knowledge updates without retraining the entire LLM.",
    keyConcepts: ["Retriever Component", "Generator Component (LLM)", "Vector Database", "Document Indexing", "Contextual Prompting"],
    useCases: ["Question Answering over private documents", "Fact Verification", "Customer Support Chatbots with specific knowledge", "Content creation with citations", "Reducing LLM Hallucinations"],
    diagram: RAGDiagram,
    furtherReadingPrompt: "Explain the Retrieval Augmented Generation (RAG) framework. What are the roles of the retriever and the generator? How does it help in reducing hallucinations and providing up-to-date information? Describe a typical workflow of a RAG system.",
    color: "red-500",
  },
  {
    id: ArchitectureId.GNN,
    name: "Graph Neural Networks (GNN)",
    tagline: "Unlocking insights from complex relationships in graph-structured data.",
    description: "Graph Neural Networks (GNNs) are a class of neural networks designed to operate directly on graph-structured data. They learn representations of nodes, edges, or entire graphs by iteratively aggregating information from neighboring nodes (message passing). GNNs can capture complex dependencies and patterns in relational data, making them suitable for a wide array of tasks where data is naturally represented as a graph.",
    keyConcepts: ["Node Embeddings", "Edge Embeddings", "Message Passing", "Aggregation Functions (Sum, Mean, Max)", "Graph Convolutions"],
    useCases: ["Social Network Analysis", "Recommendation Systems (e.g., product recommendations)", "Drug Discovery & Molecular Modeling", "Fraud Detection", "Knowledge Graph Reasoning", "Traffic Prediction"],
    diagram: GNNDiagram,
    furtherReadingPrompt: "What are Graph Neural Networks (GNNs) and why are they important? Explain the core concept of message passing and how nodes update their representations. Provide examples of different types of tasks GNNs can solve (node classification, link prediction, graph classification).",
    color: "cyan-500",
  },
  {
    id: ArchitectureId.RLHF,
    name: "Reinforcement Learning from Human Feedback (RLHF)",
    tagline: "Aligning LLMs with human preferences for safer and more helpful AI.",
    description: "Reinforcement Learning from Human Feedback (RLHF) is a multi-stage technique used to fine-tune language models to better align their behavior with human preferences and instructions. It involves: 1. Collecting human-written demonstrations or preference data (e.g., ranking model outputs). 2. Training a reward model that learns to predict which outputs humans would prefer. 3. Using this reward model as a reward function to fine-tune the language model using reinforcement learning algorithms (like PPO). This process helps make models more helpful, harmless, and honest.",
    keyConcepts: ["Reward Modeling", "Human Preference Data", "Reinforcement Learning (e.g., PPO)", "Alignment", "Instruction Following"],
    useCases: ["Improving chatbot helpfulness and safety (e.g., ChatGPT, Claude)", "Reducing harmful or biased outputs from LLMs", "Making LLMs better at following complex instructions", "Enhancing creativity and style in generated text"],
    diagram: RLHFDiagram,
    furtherReadingPrompt: "Explain the three main stages of Reinforcement Learning from Human Feedback (RLHF). How is human preference data collected and used to train a reward model? How does reinforcement learning then fine-tune the language model based on this reward signal? What are the benefits of RLHF?",
    color: "pink-500",
  },
  {
    id: ArchitectureId.GAN,
    name: "Generative Adversarial Networks (GANs)",
    tagline: "Learning to generate realistic data through a competitive game.",
    description: "GANs consist of two neural networks, a Generator and a Discriminator, trained simultaneously. The Generator tries to produce realistic data samples (e.g., images), while the Discriminator tries to distinguish between real and generated samples. This adversarial process drives both networks to improve, leading to highly realistic outputs.",
    keyConcepts: ["Generator Network", "Discriminator Network", "Adversarial Loss", "Latent Space", "Nash Equilibrium (Goal)", "Mode Collapse (Challenge)"],
    useCases: ["Realistic Image Synthesis (e.g., StyleGAN, BigGAN)", "Image-to-Image Translation (e.g., CycleGAN)", "Data Augmentation", "Super-resolution", "Video Generation"],
    diagram: GANDiagram,
    furtherReadingPrompt: "Explain the core components (Generator and Discriminator) and training dynamics of Generative Adversarial Networks (GANs). How does the adversarial loss function work? What are some common challenges like mode collapse?",
    color: "teal-500",
  },
  {
    id: ArchitectureId.SSL,
    name: "Self-Supervised Learning (SSL)",
    tagline: "Learning representations from unlabeled data by creating pretext tasks.",
    description: "Self-Supervised Learning enables models to learn meaningful representations from vast amounts of unlabeled data. It achieves this by creating 'pretext' tasks where parts of the input data are used to predict other parts (e.g., predicting a masked word in a sentence like BERT, or learning that augmented versions of an image are similar like SimCLR). These learned representations can then be fine-tuned for various downstream tasks with much less labeled data.",
    keyConcepts: ["Pretext Task", "Contrastive Learning (e.g., SimCLR, MoCo)", "Masked Autoencoding (e.g., BERT, MAE)", "Data Augmentation", "Representation Learning"],
    useCases: ["Pre-training Large Language Models (LLMs)", "Pre-training Vision Models", "Improving Sample Efficiency in Supervised Learning", "Domain Adaptation"],
    diagram: SSLDiagram,
    furtherReadingPrompt: "What is Self-Supervised Learning (SSL)? Describe different types of pretext tasks (e.g., contrastive, predictive/masked) and how SSL helps in learning useful representations from unlabeled data. Give examples like BERT or SimCLR.",
    color: "lime-500",
  },
  {
    id: ArchitectureId.FL,
    name: "Federated Learning (FL)",
    tagline: "Training models collaboratively across decentralized devices while keeping data local.",
    description: "Federated Learning is a machine learning paradigm where multiple client devices (e.g., mobile phones, hospitals) collaboratively train a shared model under the coordination of a central server, while keeping their training data decentralized and private. Instead of sending raw data, clients send model updates (e.g., gradients or weights) to the server for aggregation.",
    keyConcepts: ["Decentralized Data", "Model Aggregation (e.g., FedAvg, FedProx)", "Data Privacy & Security", "On-device Training", "Communication Efficiency", "Personalization"],
    useCases: ["Smart Keyboard Prediction (e.g., Gboard)", "Healthcare Model Training Across Hospitals", "Financial Fraud Detection", "Recommendation Systems with User Privacy"],
    diagram: FLDiagram,
    furtherReadingPrompt: "Describe the Federated Learning (FL) paradigm. How does it enable model training on decentralized data while preserving privacy? What are the key steps in a typical FL process (e.g., FedAvg), and what are its main challenges like system heterogeneity or communication bottlenecks?",
    color: "amber-500",
  },
  {
    id: ArchitectureId.NERF,
    name: "Neural Radiance Fields (NeRF)",
    tagline: "Synthesizing novel 3D views of a scene from a sparse set of images.",
    description: "Neural Radiance Fields (NeRF) represent a continuous 3D scene as a neural network (typically an MLP) that maps 5D input coordinates (3D location + 2D viewing direction) to volumetric density and view-dependent emitted radiance (color). By querying this network along camera rays and using volumetric rendering techniques, NeRF can synthesize photorealistic novel views of a scene from a sparse set of input images.",
    keyConcepts: ["Volumetric Rendering", "Implicit Neural Representation", "View Synthesis", "Multi-Layer Perceptron (MLP)", "Positional Encoding (for coordinates)"],
    useCases: ["3D Scene Reconstruction", "Novel View Synthesis for VR/AR", "Photorealistic Rendering", "Robotics and Simulation", "Medical Imaging"],
    diagram: NeRFDiagram,
    furtherReadingPrompt: "Explain how Neural Radiance Fields (NeRFs) work to synthesize novel views of a 3D scene. What are the inputs and outputs of the core MLP? How is volumetric rendering used to produce an image, and what is the role of positional encoding?",
    color: "orange-500",
  },
  {
    id: ArchitectureId.MULTIMODAL,
    name: "Multimodal Models",
    tagline: "Understanding and generating content across multiple data types.",
    description: "Multimodal AI models are designed to process, understand, and generate information from multiple types of data, or modalities (e.g., text, images, audio, video). They learn to find correspondences and relationships between these different data streams, often by projecting them into a shared representation space. This allows them to perform tasks that require understanding context from multiple sources.",
    keyConcepts: ["Joint Embedding Space", "Cross-Modal Attention/Fusion", "Modality Alignment", "Co-learning", "Late/Early Fusion"],
    useCases: ["Text-to-Image Generation (e.g., DALL-E, Imagen, Stable Diffusion)", "Visual Question Answering (VQA)", "Image/Video Captioning", "Speech Recognition with Visual Cues", "Retrieval across Modalities"],
    diagram: MultimodalDiagram,
    furtherReadingPrompt: "What are multimodal AI models? How do they process and integrate information from different data types like text, images, and audio? Discuss common techniques for fusing information from different modalities and some key applications.",
    color: "indigo-500",
  },
  {
    id: ArchitectureId.WORLDMODEL,
    name: "World Models (AI)",
    tagline: "Learning a simulation of an environment to enable planning and prediction.",
    description: "World Models are AI systems, often employed in reinforcement learning, that learn an internal predictive model of their environment. This learned 'world model' can be used to simulate future outcomes of potential actions, allowing an agent to 'imagine' or plan in a compact latent space. This can significantly improve sample efficiency and enable more sophisticated decision-making by training an agent within its own learned dream.",
    keyConcepts: ["Environment Modeling", "Latent Dynamics Model", "Variational Autoencoder (VAE)", "Recurrent Neural Network (RNN/MDN-RNN)", "Model-Based Reinforcement Learning", "Dreaming/Imagination"],
    useCases: ["Improving Sample Efficiency in Reinforcement Learning", "Robotics Control and Planning", "Autonomous Driving Simulation", "Game Playing Agents", "Understanding and Prediction in Complex Systems"],
    diagram: WorldModelDiagram,
    furtherReadingPrompt: "Explain the concept of World Models in AI. How do they typically learn a compressed representation and predictive dynamics of an environment? How is this learned model then used, for example, to train a controller or for planning?",
    color: "rose-500",
  },
  {
    id: ArchitectureId.LNN,
    name: "Liquid Neural Networks (LNNs)",
    tagline: "Continuous-time neural networks adapting their behavior based on input dynamics.",
    description: "Liquid Neural Networks (LNNs) are a class of recurrent neural networks that use systems of ordinary differential equations (ODEs) to model neuron dynamics, allowing for continuous-time processing. This makes them well-suited for handling streaming data and adapting to changing input patterns dynamically. They are inspired by the nervous system of small organisms and are known for their robustness and compact size.",
    keyConcepts: ["Continuous-Time Dynamics", "Ordinary Differential Equations (ODEs)", "Neural ODEs", "Causality", "Time-Series Processing", "Adaptive Behavior"],
    useCases: ["Autonomous Driving (e.g., steering control)", "Drone Navigation", "Robotics", "Time-Series Forecasting (e.g., weather, financial)", "Activity Recognition from sensor data"],
    diagram: LNNDiagram,
    furtherReadingPrompt: "What are Liquid Neural Networks (LNNs)? How do they differ from traditional RNNs, particularly in their use of continuous-time dynamics via ODEs? What are their key advantages, such as causality and robustness, and potential applications?",
    color: "emerald-500",
  },
];
