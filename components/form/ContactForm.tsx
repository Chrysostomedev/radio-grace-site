'use client';

/**
 * Composant — Formulaire Contact
 */

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { ContactFormData } from '@/types';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Placeholder : À brancher sur API Laravel
      console.log('Form data:', formData);
      
      // Simulation d'envoi
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <p className="text-green-800 font-semibold">✓ Merci pour votre message !</p>
        <p className="text-green-700 text-sm mt-2">Nous vous répondrons dans les meilleurs délais.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-2xl">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 text-sm">
          {error}
        </div>
      )}

      <Input
        type="text"
        name="name"
        placeholder="Votre nom"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <Input
        type="email"
        name="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        type="text"
        name="subject"
        placeholder="Sujet"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Votre message..."
        value={formData.message}
        onChange={handleChange}
        required
        rows={6}
        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-forest-900 focus:ring-2 focus:ring-forest-900/20 transition-colors resize-none"
      />

      <Button type="submit" variant="primary" loading={loading} size="lg">
        Envoyer le message
      </Button>
    </form>
  );
}
