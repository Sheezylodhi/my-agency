'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, Loader2, Mail } from 'lucide-react';

export default function VIPNewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('idle');
  const [email, setEmail] = useState('');

  // Open popup after delay
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Function to close popup
  const closePopup = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    try {
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
    } catch (error) {
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
          transition={{ duration: 0.3 }}
          onClick={closePopup} // Close on backdrop click
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-md"
        >
          {/* Popup Container */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 30 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            className="relative w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-gray-800 bg-[#030712] p-8 shadow-[0_0_60px_-15px_rgba(59,130,246,0.4)]"
          >
            {/* Premium Subtle Background Light Effect */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
             <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Close Button (VIP Style) */}
            <button 
              onClick={closePopup} 
              className="absolute top-5 right-5 z-10 text-gray-500 hover:text-white transition-colors bg-gray-900/50 p-1 rounded-full backdrop-blur-sm border border-gray-700"
            >
              <X size={20} />
            </button>
            
            {/* Content Wrapper */}
            <div className="relative z-10 text-center flex flex-col items-center">
              {/* Icon Container with Gradient Pulse */}
              <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full bg-blue-500/10 border border-blue-500/30 animate-pulse"></div>
                {/* Inner Gradient Box */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/50 border border-blue-500">
                   <Mail className="text-white" size={28} strokeWidth={1.5}/>
                </div>
              </div>
              
              {/* Headline */}
              <h2 className="text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
                Stay Ahead of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Curve</span>
              </h2>
              
              {/* Description */}
              <p className="text-gray-400 mb-8 text-base leading-normal px-1">
                Join WebMash Labs elite crew. Get high-impact web dev insights, frontend strategies, and performance tips delivered weekly.
              </p>

              {/* Status Handling */}
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="py-4 px-6 w-full text-center flex flex-col items-center bg-emerald-950/50 border border-emerald-700 rounded-2xl text-emerald-300 font-medium space-y-2"
                >
                  <CheckCircle2 size={40} className="text-emerald-400" />
                  <p className='font-semibold text-lg'>You're In!</p>
                  <p className='text-sm text-emerald-200/80'>Check your email to confirm subscription. 🚀</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                  {/* Email Input (VIP Style) */}
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-400 transition-colors" size={20} />
                    <input 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      type="email" 
                      required 
                      placeholder="your.email@company.com" 
                      className="w-full bg-gray-900 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-2xl placeholder:text-gray-600 outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-500 transition-all text-lg shadow-inner" 
                    />
                  </div>
                  
                  {/* Submit Button (VIP Style - High Contrast) */}
                  <button 
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full group relative overflow-hidden bg-white text-gray-950 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-gray-200 active:scale-[0.98] flex items-center justify-center gap-3 h-16 shadow-lg shadow-white/10"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin text-gray-600" size={24} /> 
                        <span className='text-gray-600'>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe for Free Insights</span>
                        <Sparkles size={20} className="text-blue-600 group-hover:rotate-12 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  {/* Footer Text */}
                  <p className="text-xs text-gray-600 text-center pt-1">
                    Zero spam. Unsubscribe with one click anytime.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}