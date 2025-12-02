import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços | Casa Flora',
  description: 'Conheça nossos serviços de branding, arquitetura e design.',
};

export default function Servicos() {
  return (
    <div className="container py-24">
      <h1 className="h1 mb-8">Servicos</h1>
      <p className="body-large">Detalhes dos nossos servicos em breve.</p>
    </div>
  );
}