import { useEffect, useState } from 'react';

/**
 * Хук для контроля частоты обновлений
 * 
 * Подумайте:
 * 
 * 1. Состояние:
 *    - Что происходит между обновлениями?
 *    - Как часто нужно обновлять значение?
 *    - Какие данные важно сохранить?
 * 
 * 2. Таймеры:
 *    - Что произойдет при быстрых изменениях?
 *    - Когда запускать и останавливать таймер?
 *    - Как избежать гонки таймеров?
 * 
 * 3. Очистка:
 *    - Что случится при размонтировании?
 *    - Как отследить неактуальные таймеры?
 *    - Когда очищать ресурсы?
 * 
 * Подсказка:
 * Представьте, что вы управляете краном с водой.
 * Как бы вы контролировали поток, чтобы он не был
 * слишком частым или редким?
 */
export function useDebounce<T>(value: T, delay: number): T {
  // Реализуйте хук
  return value;
}
