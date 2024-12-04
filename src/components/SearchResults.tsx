import React from 'react';
import { useSearch } from '../hooks/useSearch';

interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query }: SearchResultsProps) {
  const { results, loading, error } = useSearch();

  if (loading) {
    return <div className="text-center py-4">Searching...</div>;
  }

  if (error) {
    return <div className="text-red-600 py-4">{error}</div>;
  }

  if (!results.length) {
    return <div className="text-gray-500 py-4">No results found</div>;
  }

  return (
    <div className="space-y-4">
      {results.map((result) => (
        <div key={result.id} className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold text-gray-900">{result.title}</h3>
          <p className="text-gray-600">{result.description}</p>
        </div>
      ))}
    </div>
  );
}