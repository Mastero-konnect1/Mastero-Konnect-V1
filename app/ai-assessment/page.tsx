'use client'

import Link from 'next/link'
import { ArrowRight, Send,Sparkles, Users, Clock, Target, Award, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from "react"

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
    // Preload quick options for the first question
    setQuickOptions(["Technology & AI", "Business & Marketing", "Design & Creativity", "Data & Analytics"]);
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
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined;

      if (!supabaseUrl || !supabaseAnonKey) {
        toast.error("Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
        setIsStreaming(false);
        return;
      }

      const endpoint = `${supabaseUrl}/functions/v1/ai-assessment`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream',
          'Authorization': `Bearer ${supabaseAnonKey}`,
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

      const body = response.body;
      if (!body) {
        throw new Error('Stream not available');
      }
      const reader = body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      // Add empty assistant message that will be updated as we stream
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      if (reader) {
        let textBuffer = '';
        let streamDone = false;

        while (!streamDone) {
          const { done, value } = await reader.read();
          if (done) break;

          textBuffer += decoder.decode(value, { stream: true });

          let newlineIndex: number;
          while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
            let line = textBuffer.slice(0, newlineIndex);
            textBuffer = textBuffer.slice(newlineIndex + 1);

            if (line.endsWith('\r')) line = line.slice(0, -1); // handle CRLF
            if (line.startsWith(':') || line.trim() === '') continue; // SSE comments/keepalive
            if (!line.startsWith('data: ')) continue;

            const dataStr = line.slice(6).trim();
            if (dataStr === '[DONE]') {
              setIsComplete(checkIfComplete(updatedMessages.length + 1));
              generateQuickOptions([...updatedMessages, { role: 'assistant', content: assistantMessage }]);
              streamDone = true;
              break;
            }

            try {
              const parsed = JSON.parse(dataStr);
              const content = parsed.choices?.[0]?.delta?.content as string | undefined;
              if (content) {
                assistantMessage += content;
                setMessages(prev => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1] = {
                    role: 'assistant',
                    content: assistantMessage,
                  };
                  return newMessages;
                });
              }
            } catch {
              // Incomplete JSON split across chunks: put it back and wait for more data
              textBuffer = line + '\n' + textBuffer;
              break;
            }
          }
        }

        // Final flush in case remaining buffered lines arrived without trailing newline
        if (textBuffer.trim()) {
          for (let raw of textBuffer.split('\n')) {
            if (!raw) continue;
            if (raw.endsWith('\r')) raw = raw.slice(0, -1);
            if (raw.startsWith(':') || raw.trim() === '') continue;
            if (!raw.startsWith('data: ')) continue;
            const dataStr = raw.slice(6).trim();
            if (dataStr === '[DONE]') continue;
            try {
              const parsed = JSON.parse(dataStr);
              const content = parsed.choices?.[0]?.delta?.content as string | undefined;
              if (content) {
                assistantMessage += content;
                setMessages(prev => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1] = {
                    role: 'assistant',
                    content: assistantMessage,
                  };
                  return newMessages;
                });
              }
            } catch {
              // ignore partial leftovers
            }
          }
          // After final flush, ensure quick options are generated
          generateQuickOptions([...updatedMessages, { role: 'assistant', content: assistantMessage }]);
          setIsComplete(checkIfComplete(updatedMessages.length + 1));
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to get response. Please try again.");
    } finally {
      setIsStreaming(false);
    }
  };

  const generateQuickOptions = (allMessages: Message[]) => {
    const userMessages = allMessages.filter((m) => m.role === 'user');
    const step = userMessages.length; // 0: interests, 1: goal, 2: style, 3: challenge, 4: mentor pref
    const interest = (userMessages[0]?.content || '').toLowerCase();

    const set = (opts: string[]) => setQuickOptions(opts);

    if (step === 0) {
      set(["Technology & AI", "Business & Marketing", "Design & Creativity", "Data & Analytics"]);
      return;
    }

    if (step === 1) {
      if (interest.includes('data') || interest.includes('analytics')) {
        set(["Data Scientist", "Data Analyst", "ML Engineer", "BI Analyst"]);
      } else if (interest.includes('design') || interest.includes('ux') || interest.includes('ui')) {
        set(["UI/UX Designer", "Product Designer", "UX Researcher", "Design Strategist"]);
      } else if (interest.includes('business') || interest.includes('marketing')) {
        set(["Product Manager", "Growth Marketer", "Brand Strategist", "BizOps Analyst"]);
      } else if (interest.includes('ai') || interest.includes('software') || interest.includes('code') || interest.includes('tech') || interest.includes('engineering')) {
        set(["Software Engineer", "AI Engineer", "Full-Stack Dev", "Mobile Developer"]);
      } else {
        set(["Product Manager", "Software Engineer", "Data Scientist", "UI/UX Designer"]);
      }
      return;
    }

    if (step === 2) {
      set(["Hands-on projects", "Structured courses", "Reading & research", "Mentorship & guidance"]);
      return;
    }

    if (step === 3) {
      set(["Lack of experience", "Skills gap", "Career direction", "Networking opportunities"]);
      return;
    }

    if (step === 4) {
      set(["Industry experience mentor", "Academic background mentor"]);
      return;
    }

    setQuickOptions([]);
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
    <div className="min-h-screen relative" style={{ minHeight: '100vh' }}>
      {/* Background: diagonal gradient as specified */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, rgb(64, 142, 216), rgb(220, 218, 231), rgb(90, 56, 136))",
          backgroundAttachment: "fixed",
        }}
      />
      {/* subtle vignette for depth */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at -10% 110%, rgba(16,24,40,0.08), transparent 60%)",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="container mx-auto px-4 pt-48 md:pt-48 pb-8" style={{ minHeight: '100vh' }}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent"
                style={{ textShadow: "0 6px 24px rgba(71,85,105,0.5)" }}
              >
                AI Career Assessment
              </h1>
            </div>
            <p className="text-slate-800 text-lg font-medium">
              Let's find your perfect mentor match in just 4-5 questions
            </p>
            {/* Decorative gradient accent */}
            <div className="mx-auto mt-4 h-1.5 w-32 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 blur-[0.2px] shadow-[0_0_24px_rgba(251,191,36,0.6)]" />
          </div>

          {/* Chat Container */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Messages */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-6">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex items-start gap-3 max-w-[80%]">
                      {/* Assistant Avatar Gradient */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-md">
                        <Sparkles className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="bg-slate-50 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm border border-slate-200">
                        <p className="text-slate-800 leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  )}
                  {message.role === 'user' && (
                    <div className="max-w-[80%] bg-gradient-to-r from-blue-100 to-indigo-100 text-slate-800 rounded-2xl rounded-br-sm px-5 py-4 shadow-md border border-blue-200">
                      <p className="leading-relaxed">{message.content}</p>
                    </div>
                  )}
                </motion.div>
              ))}
              {isStreaming && (
                <div className="flex justify-start animate-fade-in">
                  <div className="flex items-start gap-3 max-w-[80%]">
                    {/* Streaming Avatar Gradient */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-md">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="bg-slate-50 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm border border-slate-200">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-100 p-4 bg-slate-50">
              {/* Quick Options */}
              {quickOptions.length > 0 && !isStreaming && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {quickOptions.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(option)}
                      className="px-4 py-2 bg-white border-2 border-blue-200 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:border-blue-500 transition-all duration-200 shadow-sm"
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
                  className="flex-1 h-12 rounded-full border-gray-200 focus-visible:ring-2 focus-visible:ring-blue-500/40 bg-white shadow-sm text-slate-800"
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={isStreaming || !input.trim()}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center shadow-lg"
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
                className="px-8 py-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-xl hover:shadow-indigo-400/50 transition-all duration-300 text-lg font-semibold text-white"
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