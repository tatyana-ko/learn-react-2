import React, { memo } from 'react';
import { format } from 'date-fns';
import type { Message, User } from '../types';

interface Props {
  message: Message;
  user: User;
  style: React.CSSProperties;
}

export const MessageItem: React.FC<Props> = memo(({ message, user, style }) => {
  const formattedTime = format(message.timestamp, 'HH:mm');

  const renderStatus = () => {
    switch (message.status) {
      case 'sent':
        return '✓';
      case 'delivered':
        return '✓✓';
      case 'read':
        return '✓✓';
      default:
        return null;
    }
  };

  return (
    <div className="message-item" style={style}>
      <div className="message-avatar">
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} />
        ) : (
          <div className="avatar-placeholder">
            {user.name[0]}
          </div>
        )}
      </div>

      <div className="message-content">
        <div className="message-header">
          <span className="user-name">{user.name}</span>
          <span className="message-time">{formattedTime}</span>
        </div>
        
        <div className="message-text">
          {message.text}
          <span className="message-status">
            {renderStatus()}
          </span>
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
 
  return (
    prevProps.message.id === nextProps.message.id &&
    prevProps.message.status === nextProps.message.status &&
    prevProps.style === nextProps.style
  );
});