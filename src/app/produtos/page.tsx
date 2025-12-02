import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produtos | Casa Flora',
  description: 'Explore nossa linha de produtos exclusivos.',
};

export default function Produtos() {
  return (
    <div className="container py-24">
      <h1 className="h1 mb-8">Produtos</h1>
      <p className="body-large">Catalogo de produtos em desenvolvimento.</p>
    </div>
  );
}