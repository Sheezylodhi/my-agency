'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
            className="relative w-full max-w-[420px] bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-3xl p-8"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-t-3xl" />
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white/40 hover:text-white">✕</button>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                <span className="text-3xl">⚡</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-2">Stay Ahead.</h2>
              <p className="text-gray-400 mb-8 text-sm">Join 500+ professionals getting exclusive updates.</p>
            </div>

            {status === 'success' ? (
              <div className="py-8 text-center text-emerald-400 font-bold border border-emerald-500/20 bg-emerald-500/10 rounded-xl">
                Successfully Subscribed! 🎉
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  type="email" 
                  required 
                  placeholder="name@company.com" 
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-blue-500" 
                />
                <button 
                  disabled={status === 'loading'}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold transition"
                >
                  {status === 'loading' ? 'Processing...' : 'Get Access Now'}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}