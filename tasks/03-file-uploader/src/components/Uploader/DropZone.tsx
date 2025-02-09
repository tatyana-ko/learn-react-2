import React from 'react';

interface Props {
  onDrop: (files: FileList) => void;
  accept?: string[];
}

/**
 * 🎯 Компонент зоны загрузки
 * 
 * Подумайте:
 * 
 * 1. События:
 *    - Какие события нужно обработать?
 *    - Как они связаны между собой?
 *    - Почему важен их порядок?
 * 
 * 2. Обратная связь:
 *    - Как показать что файл можно бросить?
 *    - Что делать при неверном формате?
 *    - Как помочь пользователю?
 * 
 * 3. Валидация:
 *    - Когда проверять файлы?
 *    - Как сообщать об ошибках?
 *    - Что можно проверить на клиенте?
 * 
 * 💡 Подсказка:
 * Представьте, что вы принимаете документы в офисе.
 * Как бы вы организовали рабочее место и процесс,
 * чтобы помочь посетителям не ошибиться?
 */
export const DropZone: React.FC<Props> = ({
  onDrop,
  accept
}) => {
  
  return <>
    
  </>;
};
