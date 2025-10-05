'use client'

import { useState, useEffect, useRef } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIAssessment() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [quickOptions, setQuickOptions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [userProfile, setUserProfile] = useState({
    interests: "",
    careerGoal: "",
    learningStyle: "",
    challenge: "",
    mentorPreference: ""
  });

  useEffect(() => {
    // Start with AI greeting
    const greeting: Message = {
      role: 'assistant',
      content: "Hey there! 👋 I'm your AI career guide. I'll ask you just 4-5 quick questions to find your perfect mentor match. Ready to get started? What subject, field, or topic excites you the most right now?"
    };
    setMessages([greeting]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend || isStreaming) return;

    const userMessage: Message = { role: 'user', content: textToSend };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setQuickOptions([]);
    setIsStreaming(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-assessment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          toast.error("Rate limit exceeded. Please wait a moment.");
          setIsStreaming(false);
          return;
        }
        if (response.status === 402) {
          toast.error("Service limit reached. Please contact support.");
          setIsStreaming(false);
          return;
        }
        throw new Error('Failed to get AI response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = "";

      // Add empty assistant message that will be updated
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      if (reader) {
        let buffer = "";
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (!line.trim() || line.startsWith(':')) continue;
            if (!line.startsWith('data: ')) continue;

            const data = line.slice(6);
            if (data === '[DONE]') {
              setIsComplete(checkIfComplete(updatedMessages.length));
              generateQuickOptions(updatedMessages.length + 1);
              continue;
            }

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                assistantMessage += content;
                setMessages(prev => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1] = {
                    role: 'assistant',
                    content: assistantMessage
                  };
                  return newMessages;
                });
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to get response. Please try again.");
    } finally {
      setIsStreaming(false);
    }
  };

  const generateQuickOptions = (messageCount: number) => {
    // Generate contextual quick options based on question number
    if (messageCount === 2) {
      // After first question about interests
      setQuickOptions(["Technology & AI", "Business & Marketing", "Design & Creativity", "Data & Analytics"]);
    } else if (messageCount === 4) {
      // After career goal question
      setQuickOptions(["Software Engineer", "Product Manager", "Data Scientist", "UI/UX Designer"]);
    } else if (messageCount === 6) {
      // After learning style question
      setQuickOptions(["Hands-on projects", "Structured courses", "Reading & research", "Mentorship & guidance"]);
    } else if (messageCount === 8) {
      // After challenge question
      setQuickOptions(["Lack of experience", "Skills gap", "Career direction", "Networking opportunities"]);
    }
  };

  const checkIfComplete = (messageCount: number) => {
    // After 8-10 messages (4-5 Q&A pairs), assessment is complete
    return messageCount >= 8;
  };

  const handleFinishAssessment = () => {
    // Extract user profile from conversation
    const profile = {
      interests: messages.find((m, i) => i === 1)?.content || "",
      careerGoal: messages.find((m, i) => i === 3)?.content || "",
      learningStyle: messages.find((m, i) => i === 5)?.content || "",
      challenge: messages.find((m, i) => i === 7)?.content || "",
      mentorPreference: messages.find((m, i) => i === 9)?.content || ""
    };
    
    const profileParam = encodeURIComponent(JSON.stringify(profile));
    router.push(`/ai-recommendation?profile=${profileParam}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-blue-50/30">
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                AI Career Assessment
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Let's find your perfect mentor match in just 4-5 questions
            </p>
          </div>

          {/* Chat Container */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Messages */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex items-start gap-3 max-w-[80%]">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-md">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-gray-50 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm">
                        <p className="text-gray-800 leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  )}
                  {message.role === 'user' && (
                    <div className="max-w-[80%] bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl rounded-br-sm px-5 py-4 shadow-md">
                      <p className="leading-relaxed">{message.content}</p>
                    </div>
                  )}
                </div>
              ))}
              {isStreaming && (
                <div className="flex justify-start animate-fade-in">
                  <div className="flex items-start gap-3 max-w-[80%]">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-md">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-gray-50 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-100 p-4 bg-gray-50">
              {/* Quick Options */}
              {quickOptions.length > 0 && !isStreaming && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {quickOptions.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(option)}
                      className="px-4 py-2 bg-white border-2 border-blue-200 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 hover:border-blue-400 transition-all duration-200 shadow-sm"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
              
              <div className="flex items-center gap-3">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Type your response..."
                  disabled={isStreaming}
                  className="flex-1 h-12 rounded-full border-gray-200 focus-visible:ring-2 focus-visible:ring-primary/40 bg-white shadow-sm"
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={isStreaming || !input.trim()}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* See Matches Button */}
          {isComplete && (
            <div className="mt-8 text-center animate-fade-in">
              <Button
                onClick={handleFinishAssessment}
                size="lg"
                className="px-8 py-6 rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:shadow-xl transition-all duration-300 text-lg font-semibold"
              >
                🎯 See My Perfect Matches
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
