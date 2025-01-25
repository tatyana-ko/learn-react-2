import { useContext, useCallback } from 'react';
import { NotificationsContext } from '../context/NotificationsContext';

interface NotificationOptions {
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  actions?: Array<{
    label: string;
    onClick: () => void;
  }>;
}

/**
 * 🎯 Хук для работы с уведомлениями
 * 
 * Подумайте:
 * 
 * 1. API:
 *    - Как сделать удобный интерфейс?
 *    - Какие опции важны?
 *    - Как обрабатывать ошибки?
 * 
 * 2. Состояние:
 *    - Где хранить уведомления?
 *    - Как управлять очередью?
 *    - Когда удалять из памяти?
 * 
 * 3. Контекст:
 *    - Как избежать ререндеров?
 *    - Когда разделять логику?
 *    - Как тестировать?
 * 
 * 💡 Подсказка:
 * Представьте, что вы создаете почтовую службу.
 * Как бы вы организовали доставку сообщений,
 * чтобы каждое дошло вовремя и по адресу?
 */
export function useNotifications() {
  // Реализуйте хук
  return {
    show: (message: string, options?: NotificationOptions) => {},
    clear: () => {}
  };
}
