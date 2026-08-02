'use client';

/**
 * Composant — Champ Recherche
 */

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/Input';

export interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export function SearchInput({ placeholder = 'Rechercher...', onSearch }: SearchInputProps) {
  const [query, setQuery] = useState('');

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative">
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        icon={<Search className="w-4 h-4" />}
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-700"
          title="Effacer"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
