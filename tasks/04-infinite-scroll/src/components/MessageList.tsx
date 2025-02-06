import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { Message, User } from '../types';
import { MessageItem } from './MessageItem';

interface Props {
  messages: Message[];
  users: Record<string, User>;
  hasMore: boolean;
  loading: boolean;
  onLoadMore: () => void;
}

export const MessageList: React.FC<Props> = ({
  messages,
  users,
  hasMore,
  loading,
  onLoadMore
}) => {
  const listRef = useRef<List>(null);
  const observerRef = useRef<IntersectionObserver>();
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  const handleScroll = useCallback(({ scrollOffset, scrollDirection }) => {
    if (scrollDirection === "backward") {
      setScrollDirection("up");
      return;
    }

    if (scrollOffset === 0) {
      onLoadMore();
    }

    setScrollDirection("down");
  }, [onLoadMore]);

  const setUpObserver = useCallback((element: HTMLElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !loading && scrollDirection === "down") {
        onLoadMore();
      }
    });

    if (element) {
      observerRef.current.observe(element);
    }
  }, [hasMore, loading, onLoadMore, scrollDirection]);

  const renderMessage = useCallback(({ index, style }) => {
    const message = messages[index];
    const user = users[message.userId];

    return (
      <MessageItem
        key={message.id}
        message={message}
        user={user}
        style={style}
      />
    );
  }, [messages, users]);

  useLayoutEffect(() => {
    if(!hasMore) {
      return;
    }

    const item = document.querySelector(".message-item:last-child") as HTMLElement;

    if (item) {
      setUpObserver(item);
    }

    return () => {
      observerRef.current?.disconnect();
    }
  }, [hasMore, messages, setUpObserver])

  return (
    <div className="message-list">
      <List
        ref={listRef}
        height={600}
        width="100%"
        itemCount={messages.length}
        itemSize={80}
        onScroll={handleScroll}
      >
        {renderMessage}
      </List>

      {loading && (
        <div className="loading-indicator">
          Загрузка сообщений...
        </div>
      )}
    </div>
  );
};

