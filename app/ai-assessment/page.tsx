'use client'

import { useState, useEffect } from "react";
import { Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

interface Message {
  id: number;
  text: string;
  isAI: boolean;
  timestamp: Date;
}

export default function AIAssessment() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Maestro, your AI guide. I'll ask a few questions to understand your goals and strengths better. This helps us find your perfect mentor match. What brings you to Mastero Konnect today?",
      isAI: true,
      timestamp: new Date()
    }
  ]);
  
  const [currentInput, setCurrentInput] = useState("");
  const [quickOptions, setQuickOptions] = useState([
    "Career transition",
    "Skill development",
    "Leadership growth",
    "Industry insights"
  ]);
  const [questionCount, setQuestionCount] = useState(0);
  const [strengths, setStrengths] = useState<string[]>([]);
  const [areasToExplore, setAreasToExplore] = useState<string[]>([]);
  const [networkNodes, setNetworkNodes] = useState<number[]>([]);

  const aiQuestions = [
    "What's your current role and what would you like to achieve in the next 1-2 years?",
    "What skills are you most confident in right now?",
    "What challenges are you facing in your career that you'd like guidance on?",
    "How do you prefer to learn new things?",
    "What type of mentor relationship are you looking for?"
  ];

  const quickResponseSets = [
    ["Career transition", "Skill development", "Leadership growth", "Industry insights"],
    ["Technical skills", "Communication", "Problem-solving", "Project management"],
    ["Work-life balance", "Imposter syndrome", "Career direction", "Skill gaps"],
    ["Hands-on practice", "Reading/Research", "1-on-1 discussions", "Group sessions"],
    ["Regular check-ins", "Project-based", "Occasional advice", "Long-term guidance"]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkNodes(prev => {
        const newNodes = [...prev];
        const randomIndex = Math.floor(Math.random() * 10);
        if (newNodes.includes(randomIndex)) {
          newNodes.splice(newNodes.indexOf(randomIndex), 1);
        } else {
          newNodes.push(randomIndex);
        }
        return newNodes.slice(0, 5);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text,
      isAI: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentInput("");

    processUserResponse(text);

    setTimeout(() => {
      generateAIResponse();
    }, 1500);
  };

  const processUserResponse = (text: string) => {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('technical') || lowerText.includes('programming') || lowerText.includes('coding')) {
      setStrengths(prev => Array.from(new Set([...prev, 'Technical Skills'])));
    }
    if (lowerText.includes('communication') || lowerText.includes('presentation')) {
      setStrengths(prev => Array.from(new Set([...prev, 'Communication'])));
    }
    if (lowerText.includes('leadership') || lowerText.includes('manage')) {
      setStrengths(prev => Array.from(new Set([...prev, 'Leadership'])));
    }

    if (lowerText.includes('transition') || lowerText.includes('change')) {
      setAreasToExplore(prev => Array.from(new Set([...prev, 'Career Transition'])));
    }
    if (lowerText.includes('network') || lowerText.includes('connect')) {
      setAreasToExplore(prev => Array.from(new Set([...prev, 'Professional Networking'])));
    }
    if (lowerText.includes('strategy') || lowerText.includes('planning')) {
      setAreasToExplore(prev => Array.from(new Set([...prev, 'Strategic Planning'])));
    }
  };

  const generateAIResponse = () => {
    if (questionCount < aiQuestions.length - 1) {
      const nextQuestion = aiQuestions[questionCount + 1];
      const aiMessage: Message = {
        id: messages.length + 2,
        text: nextQuestion,
        isAI: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setQuestionCount(prev => prev + 1);
      setQuickOptions(quickResponseSets[questionCount + 1] || []);
    } else {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: "Perfect! I have enough information to find great mentor matches for you. Let's see your personalized recommendations!",
        isAI: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setQuickOptions([]);
    }
  };

  const handleFinishAssessment = () => {
    router.push("/ai-recommendation");
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(47,107,174,0.18), rgba(255,255,255,1), rgba(90,141,200,0.18))'
      }}
    >
      <div className="container mx-auto px-4 pt-24 pb-16 flex flex-col items-center justify-start">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-semibold text-mastero-dark tracking-tight">AI-Powered Profile Assessment</h1>
            <p className="mt-3 text-gray-600">Let's understand your goals and find the perfect mentor match</p>
          </div>

          {/* Messages Container */}
          <div className="w-full mb-8">
            <div className="px-1 space-y-6">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}>
                  {message.isAI ? (
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-mastero-blue to-mastero-blue-end text-white flex items-center justify-center text-sm font-semibold shadow-sm">M</div>
                      <div className="max-w-xs sm:max-w-md md:max-w-lg p-4 rounded-2xl rounded-tl-none bg-slate-50 text-gray-800 shadow-sm transition-all duration-200">
                        {message.text}
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-xs sm:max-w-md md:max-w-lg p-4 rounded-2xl rounded-br-none bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white shadow-sm transition-all duration-200">
                      {message.text}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {quickOptions.length > 0 && (
            <div className="mb-8">
              <p className="text-sm text-mastero-text-medium text-center mb-3">Quick responses:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {quickOptions.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSendMessage(option)}
                    className="border-mastero-blue text-mastero-blue hover:bg-mastero-blue/10 transition-all duration-200"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="w-full">
            <div className="flex items-center gap-3">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Type your response..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSendMessage(currentInput);
                  }
                }}
                className="h-12 rounded-full border-gray-200 focus-visible:ring-2 focus-visible:ring-mastero-blue/40 shadow-sm"
              />
              <Button
                onClick={() => handleSendMessage(currentInput)}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white shadow hover:shadow-md transition-all duration-200 flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {questionCount >= 4 && (
            <div className="mt-12 flex justify-center">
              <Button
                onClick={handleFinishAssessment}
                className="px-6 py-6 rounded-xl bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white shadow-md hover:shadow-lg transition-all duration-200"
                size="lg"
              >
                See My Matches <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}