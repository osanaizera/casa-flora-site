import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato | Casa Flora',
  description: 'Entre em contato conosco para transformar seu negócio.',
};

export default function Contato() {
  return (
    <div className="container py-24">
      <h1 className="h1 mb-8">Contato</h1>
      <p className="body-large">Formulario de contato detalhado em breve.</p>
    </div>
  );
}