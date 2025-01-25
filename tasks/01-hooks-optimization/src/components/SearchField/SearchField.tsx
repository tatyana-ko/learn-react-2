import React from 'react';

interface Props {
  onSearch: (query: string) => Promise<void>;
  isLoading: boolean;
}

/**
 * 🔍 Поисковый компонент
 * 
 * Подумайте:
 * 
 * 1. Производительность:
 *    - Что происходит при каждом вводе символа?
 *    - Почему компонент может тормозить?
 *    - Как пользователь воспринимает задержки?
 * 
 * 2. Побочные эффекты:
 *    - Что происходит при быстром вводе?
 *    - Куда деваются старые запросы?
 *    - Что случится при размонтировании компонента?
 * 
 * 3. UX:
 *    - Как пользователь поймет что идет поиск?
 *    - Что показывать если поиск не дал результатов?
 *    - Как обрабатывать ошибки?
 * 
 * 💡 Подсказка:
 * Понаблюдайте за поведением поиска в популярных сервисах.
 * Как они решают эти проблемы?
 */
export const SearchField: React.FC<Props> = ({
  // Добавьте параметры
}) => {
  // Реализуйте компонент
  return null;
};
