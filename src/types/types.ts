export interface ChatMessage {
  id: string;
  content: string;
  timestamp: Date;
  sender: 'user' | 'ai';
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
} 