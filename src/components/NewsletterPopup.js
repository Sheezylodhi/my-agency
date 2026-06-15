'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, Loader2 } from 'lucide-react';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('idle');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

 return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-[440px] bg-[#0B101D] border border-slate-800 rounded-[2rem] p-8 shadow-2xl overflow-hidden"
          >
            {/* Ambient Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
            
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="text-center relative">
              <div className="w-14 h-14 mx-auto mb-6 bg-blue-600/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                <Sparkles className="text-blue-500" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Level Up Your Workflow</h2>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                Join 1,000+ engineers receiving weekly insights on high-performance web development.
              </p>
            </div>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="py-6 text-center flex flex-col items-center text-emerald-400 font-medium"
              >
                <CheckCircle2 size={48} className="mb-3" />
                <p>You're on the list! Check your inbox. 🎉</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  type="email" 
                  required 
                  placeholder="Enter your email" 
                  className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-white outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all" 
                />
                <button 
                  disabled={status === 'loading'}
                  className="w-full bg-white hover:bg-slate-200 text-slate-950 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="animate-spin" size={20} /> Processing...</>
                  ) : 'Get Weekly Updates'}
                </button>
                <p className="text-[11px] text-slate-600 text-center">No spam, just pure value. Unsubscribe anytime.</p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}