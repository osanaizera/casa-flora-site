'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import DownloadForm from '@/components/forms/DownloadForm';
import { downloadMaterials, DownloadMaterial } from '@/data/downloads';

// export const metadata: Metadata = {
//   title: 'Downloads | Casa Flora',
//   description: 'Materiais exclusivos, estudos e videoaulas para elevar sua estratégia de marca e hospitalidade.',
// };

export default function DownloadsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
            Materiais <strong>Exclusivos</strong>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Estudos, guias e videoaulas para elevar sua estratégia de marca e hospitalidade
          </p>
          <div className="w-24 h-0.5 bg-gray-900 mx-auto"></div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloadMaterials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 uppercase tracking-[0.12em] mb-6">
            Transforme seu negócio
          </h2>
          <p className="text-gray-600 mb-8">
            Acesse conteúdos desenvolvidos pelos especialistas da Casa Flora
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium">
            📚 Materiais sempre atualizados
          </div>
        </div>
      </section>
    </>
  );
}

interface MaterialCardProps {
  material: DownloadMaterial;
}

function MaterialCard({ material }: MaterialCardProps) {
  const [showForm, setShowForm] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return '📄';
      case 'video':
        return '🎥';
      case 'guide':
        return '📖';
      default:
        return '📁';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'PDF';
      case 'video':
        return 'Videoaula';
      case 'guide':
        return 'Guia';
      default:
        return 'Material';
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 bg-gray-100">
          {material.thumbnailUrl ? (
            <img 
              src={material.thumbnailUrl} 
              alt={material.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-6xl">
              {getTypeIcon(material.type)}
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-700">
              {getTypeLabel(material.type)}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              {material.category}
            </span>
            {material.fileSize && (
              <span className="text-xs text-gray-400">• {material.fileSize}</span>
            )}
            {material.duration && (
              <span className="text-xs text-gray-400">• {material.duration}</span>
            )}
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 mb-3 line-clamp-2">
            {material.title}
          </h3>
          
          <p className="text-sm text-gray-600 line-clamp-3 mb-4">
            {material.description}
          </p>
          
          <button
            onClick={() => setShowForm(true)}
            className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Baixar Material
          </button>
        </div>
      </div>

      {showForm && (
        <DownloadForm
          material={material}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}