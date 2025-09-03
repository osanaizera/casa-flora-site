'use client';

import { useState } from 'react';
import { DownloadMaterial } from '@/data/downloads';

interface DownloadFormProps {
  material: DownloadMaterial;
  onClose: () => void;
}

export default function DownloadForm({ material, onClose }: DownloadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Aqui você faria a integração com seu sistema de CRM/email
    console.log('Lead capturado:', { ...formData, material: material.title });
    
    setIsSuccess(true);
    setIsSubmitting(false);

    // Iniciar download após sucesso
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = material.downloadUrl;
      link.download = material.title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Fechar modal após download
      setTimeout(onClose, 1000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          ×
        </button>

        {!isSuccess ? (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-light text-gray-900 mb-2">
                Baixar Material
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {material.title}
              </p>
              <p className="text-xs text-gray-500">
                Preencha os dados abaixo para acessar o conteúdo exclusivo
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      Processando...
                    </span>
                  ) : (
                    'Baixar Material'
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                Ao preencher este formulário, você concorda em receber comunicações da Casa Flora.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Sucesso!
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Seu download será iniciado automaticamente
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
              Iniciando download...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}