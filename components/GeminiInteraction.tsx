import React, { useState, useCallback, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { GEMINI_API_KEY, GEMINI_CHAT_MODEL_NAME } from '../constants';
import { ChatMessage } from '../types';
import { SparklesIcon, ChevronDownIcon, ChevronUpIcon, AcademicCapIcon, ExclamationTriangleIcon, PaperAirplaneIcon, UserCircleIcon, CpuChipIcon } from './Icons';
import { LoadingSpinner } from './LoadingSpinner';

interface GeminiInteractionProps {
  architectureName: string;
  accentColor: string;
  initialPromptSuggestion: string;
}

// Helper to render text with **bold** markdown
const renderFormattedText = (text: string) => {
  const boldedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Add more markdown parsers here if needed (e.g., *italic*)
  return { __html: boldedText };
};

const GeminiInteraction: React.FC<GeminiInteractionProps> = ({ architectureName, accentColor, initialPromptSuggestion }) => {
  const [chatInstance, setChatInstance] = useState<Chat | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const chatContainerRef = useRef<HTMLDivElement>(null);
  // Stores the architecture name for which the current chatInstance and chatHistory are valid.
  const activeChatArchitectureRef = useRef<string | null>(null); 

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const initializeChat = useCallback(async (currentArchName: string, currentInitialPrompt: string) => {
    if (!GEMINI_API_KEY) {
      setError("Gemini API Key not configured. Please set the API_KEY environment variable.");
      setIsLoading(false);
      setChatInstance(null);
      setChatHistory([]); // Ensure history is cleared on API key error too
      activeChatArchitectureRef.current = null;
      return;
    }

    console.log(`Initializing chat for ${currentArchName}`);
    setIsLoading(true);
    setError(null);
    setChatHistory([]); // Explicitly clear history for the new chat session

    try {
      const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
      const systemInstruction = `You are a helpful and knowledgeable AI assistant specializing in AI architectures. Your current focus is the "${currentArchName}" architecture. Engage in a conversation, answer questions, explain concepts, and provide details specifically related to ${currentArchName}. Be concise yet informative. Make use of **bold text** for emphasis on key terms or concepts when appropriate.`;
      
      const newChat = ai.chats.create({
        model: GEMINI_CHAT_MODEL_NAME,
        config: { systemInstruction },
      });
      setChatInstance(newChat);
      activeChatArchitectureRef.current = currentArchName;

      const initialUserMessageText = `Tell me more about the ${currentArchName} architecture. You can start with a general overview or by addressing: "${currentInitialPrompt}"`;
      const firstUserMessageId = `user-init-${Date.now()}`;
      // Use a functional update for setChatHistory to ensure it's based on the latest state if calls are rapid
      setChatHistory([{ role: 'user', parts: [{ text: initialUserMessageText }], id: firstUserMessageId }]);
      
      const stream = await newChat.sendMessageStream({ message: initialUserMessageText });
      
      let currentResponse = "";
      const aiMessageId = `model-init-${Date.now()}`;
      setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: "" }], id: aiMessageId }]);

      for await (const chunk of stream) {
        const chunkText = chunk.text;
        if (chunkText) {
          currentResponse += chunkText;
          setChatHistory(prev => prev.map(msg => msg.id === aiMessageId ? {...msg, parts: [{text: currentResponse}]} : msg));
        }
      }

    } catch (e: any) {
      console.error("Gemini chat initialization error:", e);
      setError(`Failed to initialize chat with Gemini. ${e.message || 'Please check console for details.'}`);
      setChatInstance(null); 
      setChatHistory([]); // Clear history on error too
      activeChatArchitectureRef.current = null; 
    } finally {
      setIsLoading(false);
    }
  }, []); // Removed architectureName & initialPromptSuggestion from deps, they will be passed as args

  // Single effect to handle all chat initialization logic
  useEffect(() => {
    // If architecture changed, clear the old chat state
    if (architectureName !== activeChatArchitectureRef.current) {
      console.log(`Architecture changed from ${activeChatArchitectureRef.current} to ${architectureName}. Resetting chat state.`);
      setChatInstance(null);
      setChatHistory([]);
      setUserInput('');
      setError(null);
      setIsLoading(false); 
      activeChatArchitectureRef.current = null;
    }

    // Initialize chat if panel is open and we need a new chat instance
    if (isOpen && !isLoading) {
      const needsInitialization = 
        !chatInstance || // No chat instance exists
        architectureName !== activeChatArchitectureRef.current || // Architecture mismatch
        (error && GEMINI_API_KEY && architectureName === activeChatArchitectureRef.current); // Had error but now API key is available

      if (needsInitialization) {
        console.log(`Initializing chat for ${architectureName}. Reason: ${!chatInstance ? 'No chat instance' : architectureName !== activeChatArchitectureRef.current ? 'Architecture mismatch' : 'Recovering from error'}`);
        initializeChat(architectureName, initialPromptSuggestion);
      }
    }
  }, [isOpen, architectureName, initialPromptSuggestion, chatInstance, initializeChat, error, isLoading]);

  const handleToggleOpen = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };
  
  const handleSendMessage = async () => {
    if (!userInput.trim() || isLoading || !chatInstance) return;

    const userMessage: ChatMessage = { role: 'user', parts: [{ text: userInput }], id: `user-${Date.now()}` };
    setChatHistory(prev => [...prev, userMessage]);
    const currentInput = userInput;
    setUserInput('');
    setIsLoading(true);
    setError(null);

    try {
      const stream = await chatInstance.sendMessageStream({ message: currentInput });
      let currentResponse = "";
      const aiMessageId = `model-${Date.now()}`;
      setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: "" }], id: aiMessageId }]);

      for await (const chunk of stream) {
        const chunkText = chunk.text;
        if (chunkText) {
            currentResponse += chunkText;
             setChatHistory(prev => prev.map(msg => msg.id === aiMessageId ? {...msg, parts: [{text: currentResponse}]} : msg));
        }
      }
    } catch (e: any) {
      console.error("Gemini API error:", e);
      setError(`Failed to get response from Gemini. ${e.message || 'Please check console for details.'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const buttonBgColor = `bg-${accentColor}`;
  const buttonHoverBgColor = `hover:bg-${accentColor.split('-')[0]}-600`;
  const ringColor = `focus:ring-${accentColor}`;
  const borderColor = `border-${accentColor}`;
  const textColor = `text-${accentColor}`;

  return (
    <div className={`bg-slate-800 shadow-lg rounded-lg p-6 border-l-4 ${borderColor}`}>
      <button
        onClick={handleToggleOpen}
        className={`w-full flex justify-between items-center px-4 py-3 rounded-md ${buttonBgColor} text-white font-semibold 
                    transition-all duration-150 ease-in-out ${buttonHoverBgColor}
                    focus:outline-none focus:ring-2 ${ringColor} focus:ring-opacity-75`}
        aria-expanded={isOpen}
        aria-controls="gemini-chat-panel"
      >
        <div className="flex items-center">
          <AcademicCapIcon className="w-5 h-5 mr-2" />
          {isOpen ? `Chatting about ${architectureName}` : `Chat with Gemini about ${architectureName}`}
        </div>
        {isOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div id="gemini-chat-panel" className="mt-4">
          {!GEMINI_API_KEY && (
             <div className="text-red-400 bg-red-900/50 p-3 rounded-md flex items-start my-2">
                <ExclamationTriangleIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                <div><p className="font-semibold">API Key Error</p><p className="text-sm">{error || "Gemini API Key not configured."}</p></div>
            </div>
          )}

          {GEMINI_API_KEY && isLoading && chatHistory.length === 0 && ( 
            <div className="flex flex-col items-center justify-center text-slate-400 py-6">
              <LoadingSpinner className={`w-8 h-8 ${textColor}`} />
              <p className="mt-2">Initializing chat with Gemini about {architectureName}...</p>
            </div>
          )}

          {error && GEMINI_API_KEY && (!isLoading || chatHistory.length > 0) && ( 
             <div className="text-red-400 bg-red-900/50 p-3 rounded-md flex items-start my-2">
                <ExclamationTriangleIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                <div><p className="font-semibold">Chat Error</p><p className="text-sm">{error}</p></div>
            </div>
          )}
          
          <div ref={chatContainerRef} className="h-96 overflow-y-auto bg-slate-850 p-4 rounded-md mb-4 space-y-4 scroll-smooth" role="log">
            {chatHistory.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg shadow ${msg.role === 'user' ? `${buttonBgColor} text-white` : 'bg-slate-700 text-slate-200'}`}>
                  <div className="flex items-center mb-1">
                    {msg.role === 'user' ? <UserCircleIcon className="w-5 h-5 mr-2"/> : <CpuChipIcon className={`w-5 h-5 mr-2 ${textColor}`}/> }
                    <span className="font-semibold text-sm">{msg.role === 'user' ? 'You' : `${architectureName} Expert`}</span>
                  </div>
                  <div className="text-sm whitespace-pre-wrap" dangerouslySetInnerHTML={renderFormattedText(msg.parts[0]?.text || '')}></div>
                </div>
              </div>
            ))}
            {isLoading && chatHistory.length > 0 && chatInstance && ( 
                 <div className="flex justify-start">
                    <div className="max-w-[70%] p-3 rounded-lg bg-slate-700 text-slate-200">
                        <div className="flex items-center">
                            <LoadingSpinner className={`w-5 h-5 mr-2 ${textColor}`} />
                            <span className="text-sm italic">Expert is typing...</span>
                        </div>
                    </div>
                </div>
            )}
          </div>

          {GEMINI_API_KEY && chatInstance && (!error || (error && chatHistory.length > 0)) && ( // Allow input if there's an error but history exists (e.g. send error)
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex items-center space-x-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={`Ask about ${architectureName}...`}
                className="flex-grow p-2 rounded-md bg-slate-700 text-slate-100 focus:ring-2 focus:ring-${accentColor} focus:outline-none"
                disabled={isLoading || !chatInstance} 
                aria-label={`Message to ${architectureName} Expert`}
              />
              <button
                type="submit"
                disabled={isLoading || !userInput.trim() || !chatInstance}
                className={`p-2 rounded-md ${buttonBgColor} text-white ${buttonHoverBgColor} disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 ${ringColor}`}
                aria-label="Send message"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </form>
          )}
           {GEMINI_API_KEY && !chatInstance && error && ( // Chat instance failed to init.
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center space-x-2">
                 <input type="text" placeholder="Chat unavailable due to error" className="flex-grow p-2 rounded-md bg-slate-700 text-slate-500 italic focus:outline-none" disabled />
                 <button type="submit" disabled className={`p-2 rounded-md bg-slate-600 text-white opacity-50 cursor-not-allowed`}>
                    <PaperAirplaneIcon className="w-5 h-5" />
                </button>
            </form>
           )}
        </div>
      )}
    </div>
  );
};

export default GeminiInteraction;