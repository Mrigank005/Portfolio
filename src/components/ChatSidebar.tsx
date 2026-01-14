import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, Bot, User, Sparkles, Lightbulb, FileText } from "lucide-react";
import { useChat } from "@/context/ChatContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { API_URL } from "@/config/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: number;
}

// Preprocess text to fix markdown list formatting issues
const preprocessText = (text: string): string => {
  // Ensure double newline before lists (fixes common LLM formatting issues)
  return text.replace(/([^\n])\n(\*|-|\d+\.)/g, '$1\n\n$2');
};

// Markdown component styling
const markdownComponents = {
  ul: ({ children }: any) => (
    <ul className="list-disc pl-6 mb-2 text-white/90">{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal pl-6 mb-2 text-white/90">{children}</ol>
  ),
  li: ({ children }: any) => (
    <li className="mb-1 pl-1 marker:text-sunset-coral">{children}</li>
  ),
  strong: ({ children }: any) => (
    <strong className="font-bold text-sunset-coral">{children}</strong>
  ),
  p: ({ children }: any) => (
    <p className="mb-2 last:mb-0">{children}</p>
  ),
};

// Typing effect component with markdown support
const TypingMessage = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const processedText = preprocessText(text);
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < processedText.length) {
        setDisplayedText((prev) => prev + processedText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
        onComplete?.();
      }
    }, 15); // 15ms delay per character

    return () => clearInterval(timer);
  }, [processedText, onComplete]);

  return (
    <div className="text-sm leading-relaxed">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        components={markdownComponents}
      >
        {displayedText}
      </ReactMarkdown>
    </div>
  );
};

const ChatSidebar = () => {
  const { isSidebarOpen, closeSidebar } = useChat();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTypingId, setActiveTypingId] = useState<string | null>(null);
  const scrollEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    setTimeout(() => {
      scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      scrollToBottom();
    }
  }, [messages, activeTypingId, isSidebarOpen]);

  // Load from sessionStorage on mount
  useEffect(() => {
    const saved = sessionStorage.getItem("chat_history");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (error) {
        console.error("Failed to parse chat history:", error);
      }
    }
  }, []);

  // Save to sessionStorage when messages change
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem("chat_history", JSON.stringify(messages));
    }
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      text: text,
      sender: "user",
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      // 60 second timeout
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 60000)
      );

      // API fetch promise
      const fetchPromise = fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const response = (await Promise.race([fetchPromise, timeoutPromise])) as Response;

      if (!response.ok) throw new Error("API Error");

      const data = await response.json();
      
      const botMsgId = `bot-${Date.now()}`;
      const botMsg: Message = {
        id: botMsgId,
        text: data.response || data.message || data.reply || "I didn't quite catch that.",
        sender: "bot",
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setActiveTypingId(botMsgId); // Trigger typing animation
    } catch (error: any) {
      const errorText = error.message === "Timeout" 
        ? "The server is busy right now please return in 2 to 3 minutes."
        : "Sorry, I'm having trouble connecting right now.";

      const errorMsg: Message = {
        id: `bot-${Date.now()}`,
        text: errorText,
        sender: "bot",
        timestamp: Date.now(),
      };
      
      setMessages((prev) => [...prev, errorMsg]);
      setActiveTypingId(errorMsg.id);
    } finally {
      setIsLoading(false);
    }
  };

  const predefinedQuestions = [
    {
      icon: Lightbulb,
      text: "Tell me about his 3 Patents 💡",
      value: "Tell me about his 3 Patents"
    },
    {
      icon: FileText,
      text: "How does the DASES project work? 📝",
      value: "How does the DASES project work?"
    }
  ];

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          {/* Backdrop - visible on mobile only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2147483646] lg:hidden"
          />

          {/* Sidebar/Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
              "fixed z-[2147483647] flex flex-col shadow-2xl backdrop-blur-md border-white/10",
              // Mobile: Bottom Sheet
              "bottom-0 left-0 right-0 h-[85vh] rounded-t-3xl bg-deep-charcoal/95 border-t",
              // Desktop: Right Sidebar
              "lg:top-0 lg:right-0 lg:bottom-0 lg:left-auto lg:h-screen lg:w-[400px] lg:rounded-none lg:border-l lg:border-t-0 lg:bg-deep-charcoal/90"
            )}
          >
            {/* Drag handle for mobile */}
            <div className="lg:hidden w-full flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 rounded-full bg-white/20"></div>
            </div>

            {/* Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-start shrink-0">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  Hello There !!! 👋
                </h1>
                <h2 className="text-sm text-warm-light-gray/60">
                  What would you like to know about Mrigank Today?
                </h2>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={closeSidebar} 
                className="text-white hover:bg-white/10 -mt-1 -mr-2"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Chat Content Area */}
            <ScrollArea className="flex-1 px-4 py-4">
              <div className="space-y-4 pb-4">
                {messages.length === 0 ? (
                  <div className="flex flex-col gap-4 mt-8">
                    {/* Welcome Message */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5 backdrop-blur-md text-center">
                      <Sparkles className="w-10 h-10 text-sunset-coral mx-auto mb-3" />
                      <p className="text-sm text-warm-light-gray">
                        I'm Mrigank's AI assistant. Ask me anything about his projects, skills, or experience!
                      </p>
                    </div>

                    {/* Pre-defined Questions */}
                    <div className="space-y-3">
                      <p className="text-xs text-warm-light-gray/50 px-1">Suggested questions:</p>
                      {predefinedQuestions.map((q, i) => {
                        const Icon = q.icon;
                        return (
                          <button
                            key={i}
                            onClick={() => handleSendMessage(q.value)}
                            disabled={isLoading}
                            className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-sunset-coral/50 transition-all text-sm text-warm-light-gray flex items-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <span className="p-2 rounded-lg bg-sunset-coral/10 text-sunset-coral group-hover:scale-110 transition-transform">
                              <Icon size={16} />
                            </span>
                            {q.text}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <>
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={cn(
                          "flex gap-3",
                          msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                        )}
                      >
                        {/* Avatar */}
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
                            msg.sender === "user"
                              ? "bg-sunset-coral/20 border-sunset-coral/50 text-sunset-coral"
                              : "bg-purple-500/20 border-purple-500/50 text-purple-400"
                          )}
                        >
                          {msg.sender === "user" ? <User size={14} /> : <Bot size={14} />}
                        </div>

                        {/* Message Bubble */}
                        <div
                          className={cn(
                            "max-w-[80%] rounded-2xl px-4 py-3 shadow-sm border",
                            msg.sender === "user"
                              ? "bg-sunset-coral/10 border-sunset-coral/20 text-warm-light-gray rounded-tr-sm"
                              : "bg-deep-charcoal/50 border-white/10 text-warm-light-gray/90 rounded-tl-sm"
                          )}
                        >
                          {msg.sender === "bot" && activeTypingId === msg.id ? (
                            <TypingMessage
                              text={msg.text}
                              onComplete={() => setActiveTypingId(null)}
                            />
                          ) : (
                            <div className="text-sm leading-relaxed">
                              <ReactMarkdown 
                                remarkPlugins={[remarkGfm]} 
                                components={markdownComponents}
                              >
                                {preprocessText(msg.text)}
                              </ReactMarkdown>
                            </div>
                          )}
                          <span className="text-[10px] opacity-40 mt-2 block text-right">
                            {new Date(msg.timestamp).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Loading Indicator */}
                    {isLoading && (
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-purple-400">
                          <Bot size={14} />
                        </div>
                        <div className="bg-deep-charcoal/50 border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-1">
                          <span className="w-2 h-2 bg-warm-light-gray/40 rounded-full animate-bounce"></span>
                          <span className="w-2 h-2 bg-warm-light-gray/40 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                          <span className="w-2 h-2 bg-warm-light-gray/40 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        </div>
                      </div>
                    )}
                  </>
                )}
                <div ref={scrollEndRef} />
              </div>
            </ScrollArea>

            {/* Footer - Input Area */}
            <div className="p-4 border-t border-white/10 bg-black/20 backdrop-blur-xl shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex gap-2 relative"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask anything..."
                  disabled={isLoading}
                  className="bg-white/5 border-white/10 focus-visible:ring-sunset-coral/50 text-white placeholder:text-warm-light-gray/30 pr-12"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-1 top-1 h-8 w-8 bg-sunset-coral hover:bg-sunset-coral/80 text-white disabled:opacity-50"
                >
                  <Send size={14} />
                </Button>
              </form>
              
              {/* Disclaimer */}
              <p className="text-[10px] text-center text-warm-light-gray/30 mt-3 select-none">
                The answer may take a couple of seconds to appear due to traffic or the server being cool.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ChatSidebar;
