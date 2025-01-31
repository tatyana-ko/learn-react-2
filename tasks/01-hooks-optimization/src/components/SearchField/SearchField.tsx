import { useDebounce } from '../../hooks/useDebounce';
import React, { useEffect, useState } from 'react';

interface Props {
  onSearch: (query: string) => Promise<void>;
  isLoading?: boolean;
}

export const SearchField: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [prevQuery, setPrevQuery] = useState("");

  useEffect(() => {
    if (debouncedQuery !== prevQuery) {
      onSearch(debouncedQuery);
      setPrevQuery(debouncedQuery);
    }
  }, [debouncedQuery, onSearch, prevQuery]);

  return <>
    <input
      type="search"
      name="search-field"
      id="search-field"
      placeholder='Search...'
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  </>;
};