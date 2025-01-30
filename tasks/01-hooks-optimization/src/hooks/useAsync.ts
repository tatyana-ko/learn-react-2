import { useState, useCallback } from 'react';

interface AsyncState<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

/**
 * Хук для управления асинхронными операциями
 * 
 * Подумайте:
 * 
 * 1. Жизненный цикл операции:
 *    - Какие состояния проходит операция?
 *    - Как пользователь видит эти состояния?
 *    - Что может пойти не так?
 * 
 * 2. Параллельные операции:
 *    - Что если запустить несколько операций?
 *    - Как определить какая операция актуальна?
 *    - Как отменить неактуальные?
 * 
 * 3. Обработка ошибок:
 *    - Какие бывают ошибки?
 *    - Как их показать пользователю?
 *    - Как дать возможность повторить?
 * 
 * Подсказка:
 * Представьте, что вы руководите командой.
 * Как бы вы организовали параллельную работу,
 * отслеживание результатов и обработку проблем?
 */
export function useAsync<T>() {
  // Реализуйте хук
  return {
    data: null,
    error: null,
    isLoading: false,
    execute: async () => {},
    cancel: () => {}
  };
}

//=========================

// import { useState } from 'react';

// export function useAsync<T>() {
//   const [state, setState] = useState({
//     data: null,
//     error: null,
//     isLoading: false
//   });

//   const execute = async (asyncFunction: () => Promise<T>) => {
//     setState({ data: null, error: null, isLoading: true });
//     try {
//       const result = await asyncFunction();
//       setState({ data: result, error: null, isLoading: false });
//     } catch (error) {
//       setState({ data: null, error, isLoading: false });
//     }
//   };

//   const cancel = () => {
//     setState({ data: null, error: null, isLoading: false });
//   };

//   return { ...state, execute, cancel };
// }