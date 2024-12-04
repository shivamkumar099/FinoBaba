import { useState, useCallback } from 'react';

interface SearchResult {
  id: string;
  type: 'service' | 'professional';
  title: string;
  description: string;
}

export function useSearch() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      // TODO: Implement actual search logic
      console.log('Searching for:', query);
      // Simulated results
      setResults([
        {
          id: '1',
          type: 'service',
          title: 'Tax Consulting',
          description: 'Professional tax consulting services'
        }
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, error, search };
}