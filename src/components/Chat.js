'use client';
import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles } from 'lucide-react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: 'ai', content: data.reply }]);
    } catch (error) {
      console.error("Chat Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* TRIGGER BUTTON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-2xl hover:scale-105 transition-all flex items-center justify-center z-[999]"
        >
          <Bot size={28} />
        </button>
      )}

      {/* CHAT WINDOW - Fully Responsive */}
      <div
        className={`fixed z-[9999] transition-all duration-300 ease-out origin-bottom-right
          ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
          bottom-0 right-0 w-full h-[100dvh] md:bottom-8 md:right-8 md:w-[380px] md:h-[600px] 
          bg-[#09090b]/95 backdrop-blur-2xl border border-zinc-800 md:rounded-[2rem] shadow-2xl flex flex-col overflow-hidden`}
      >
        {/* HEADER */}
        <div className="p-5 flex items-center justify-between border-b border-zinc-800/50 bg-[#09090b]/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500">
              <Bot size={20} />
            </div>
            <div>
              <h2 className="text-white font-semibold text-sm">Customer Support</h2>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-zinc-400 font-medium tracking-wide">ONLINE</span>
              </div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-white p-2 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-3">
              <Sparkles size={40} strokeWidth={1} />
              <p className="text-sm">How can I assist you today?</p>
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] px-4 py-2.5 text-[14px] rounded-2xl ${m.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-zinc-800 text-zinc-200 rounded-bl-none'}`}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && <div className="text-xs text-zinc-500 animate-pulse px-2">AI is typing...</div>}
          <div ref={bottomRef} />
        </div>

        {/* INPUT AREA */}
        <div className="p-4 bg-[#09090b] border-t border-zinc-800/50">
          <form onSubmit={sendMessage} className="relative flex items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full bg-zinc-900 border border-zinc-800 text-sm py-3.5 pl-4 pr-12 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
            <button type="submit" className="absolute right-2 p-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-colors">
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}