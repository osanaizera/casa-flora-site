'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function CookieIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
      <path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" /><path d="M11 17v.01" /><path d="M7 14v.01" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  )
}

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consented = localStorage.getItem('casa_flora_consent')
    if (!consented) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('casa_flora_consent', 'true')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-[#1A1714]/95 backdrop-blur-md border border-amber-700/20 rounded-xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500" />
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-amber-700/10 rounded-lg shrink-0">
                <CookieIcon className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 text-sm tracking-wide">Privacidade & Consentimento</h4>
                <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                  Utilizamos cookies para melhorar sua experiência de navegação, em conformidade com a LGPD.
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={handleAccept}
                    className="bg-amber-700 hover:bg-amber-600 text-white px-5 py-2 rounded-lg text-xs font-semibold transition-colors shadow-md hover:shadow-lg"
                  >
                    Aceitar
                  </button>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-zinc-500 text-xs hover:text-white transition-colors"
                  >
                    Dispensar
                  </button>
                </div>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
              >
                <XIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
