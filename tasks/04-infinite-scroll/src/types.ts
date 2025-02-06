export interface Message {
  id: string;
  text: string;
  userId: string;
  timestamp: number;
  status: 'sent' | 'delivered' | 'read';
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
}

export interface ChatState {
  messages: Message[];
  users: Record<string, User>;
  hasMore: boolean;
  loading: boolean;
  error: string | null;
  lastMessageId?: string;
}

export type ChatAction =
  | { type: 'MESSAGES_LOADING' }
  | { type: 'MESSAGES_LOADED'; payload: { messages: Message[]; users: User[] } }
  | { type: 'MESSAGES_ERROR'; payload: string }
  | { type: 'MESSAGE_RECEIVED'; payload: Message }
  | { type: 'MESSAGE_STATUS_UPDATED'; payload: { id: string; status: Message['status'] } };
