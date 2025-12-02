import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre | Casa Flora',
  description: 'Conheça nossa história e filosofia de criar marcas memoráveis.',
};

export default function Sobre() {
  return (
    <div className="container py-24">
      <h1 className="h1 mb-8">Sobre</h1>
      <p className="body-large">Nossa historia e filosofia em breve.</p>
    </div>
  );
}