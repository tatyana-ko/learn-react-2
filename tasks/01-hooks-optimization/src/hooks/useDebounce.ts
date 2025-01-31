import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handlerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handlerId);
  }, [delay, value]);

  return debouncedValue;
}


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
