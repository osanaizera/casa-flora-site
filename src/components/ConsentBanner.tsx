'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consented = localStorage.getItem('casa_flora_consent')
    if (!consented) {
      // Small delay for better UX
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
            {/* Decorative line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500" />
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-amber-700/10 rounded-lg shrink-0">
                <Cookie className="w-6 h-6 text-amber-600" />
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
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
