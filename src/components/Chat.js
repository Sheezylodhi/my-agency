'use client';
import { useState, useRef, useEffect } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const bottomRef = useRef(null);
  const chatRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input, time: new Date() }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
        const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      { role: 'ai', content: data.reply, time: new Date() }
    ]);
    // Keep your existing fetch logic here...
    // const res = await fetch('/api/chat', ...);
    
    setLoading(false);
  };

  return (
    <>
      {/* FLOATING BUTTON - More refined pulse effect */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 flex items-center justify-center text-xl hover:scale-105 active:scale-95"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </button>
      )}

      {/* CHAT WINDOW - Enhanced glassmorphism */}
      <div
        ref={chatRef}
        className={`fixed bottom-6 right-6 z-[99999] w-[380px] h-[550px] bg-zinc-950/80 backdrop-blur-xl text-white rounded-3xl shadow-2xl border border-white/10 flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right ${open ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* HEADER - Modern gradient strip */}
        <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
            <div>
              <h1 className="text-sm font-bold tracking-tight">AI Support</h1>
              <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Active Now</p>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        {/* MESSAGES - Custom Scrollbar */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] px-4 py-3 text-[14px] leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-blue-600 rounded-2xl rounded-tr-sm' : 'bg-zinc-800/50 border border-white/5 rounded-2xl rounded-tl-sm'}`}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800/50 px-4 py-3 rounded-2xl text-xs text-zinc-400 italic">Thinking...</div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* INPUT - Sleek modern footer */}
        <form onSubmit={sendMessage} className="p-4 bg-zinc-950/50">
          <div className="relative flex items-center">
            <input
              className="w-full bg-zinc-900 border border-zinc-800 text-sm p-3.5 pr-12 rounded-2xl outline-none focus:border-blue-500/50 transition-all placeholder:text-zinc-600"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
            />
            <button className="absolute right-2 p-2 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}