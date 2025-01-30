import React, { useState, useEffect } from 'react';
import type { User, SearchState } from '../types';

export const UserSearch: React.FC = () => {
  const [state, setState] = useState<SearchState>({
    query: '',
    results: [],
    loading: false,
    error: null
  });

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchUser = async () => {
      setState(prevState => ({ ...prevState, loading: true }));

      try {
        const response = await fetch("https:// ...", { signal });
        const data = await response.json();
        setState(prevState => ({ ...prevState, results: data, loading: false }))
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error);
          setState(prevState => ({ ...prevState, error: "Request error", loading: false }))
        }
      }
    };

    if(state.query) {
      fetchUser()
    }

    return () => {
      controller.abort();
    };
  }, [state.query]);

  return (
    <div>
      <input
        type="text"
        value={state.query}
        onChange={(e) => setState(prev => ({ ...prev, query: e.target.value }))}
        placeholder="Поиск пользователей..."
      />

      {state.loading && <div>Загрузка...</div>}
      {state.error && <div>Ошибка: {state.error}</div>}

      <ul>
        {state.results.map((user: User) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};