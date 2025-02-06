import React from 'react';
import { useChat } from './hooks/useChat';
import { MessageList } from './components/MessageList';
import './App.css';

function App() {
  const { messages, users, hasMore, loading, loadMessages } = useChat();

  return (
    <div className="app">
      <header className="header">
        <h1>Чат</h1>
      </header>

      <main className="main">
        <MessageList
          messages={messages}
          users={users}
          hasMore={hasMore}
          loading={loading}
          onLoadMore={loadMessages}
        />
      </main>
    </div>
  );
}

export default App;