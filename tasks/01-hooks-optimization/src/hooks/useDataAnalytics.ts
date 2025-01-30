import { useState, useEffect, useCallback, useMemo } from 'react';
import type { DataPoint, AnalyticsState } from '../types';

export const useDataAnalytics = () => {
  const [state, setState] = useState<AnalyticsState>({
    data: [],
    filters: {
      category: null,
      dateRange: [null, null]
    },
    view: 'chart',
    loading: false,
    error: null
  });

  // Здесь студент должен реализовать логику
  // Пример структуры:
  
  const fetchData = useCallback(async () => {
    // TODO: Реализовать загрузку данных
  }, []);

  const filteredData = useMemo(() => {
    // TODO: Реализовать фильтрацию
    return state.data;
  }, [state.data, state.filters]);

  const updateFilters = useCallback((newFilters: Partial<AnalyticsState['filters']>) => {
    // TODO: Реализовать обновление фильтров
  }, []);

  useEffect(() => {
    // TODO: Реализовать эффект загрузки данных
    return () => {
      // TODO: Реализовать очистку
    };
  }, [fetchData]);

  return {
    ...state,
    filteredData,
    updateFilters,
    fetchData
  };
};

//---------------------

// import { useState, useEffect, useCallback, useMemo } from 'react';
// import type { AnalyticsState, DataPoint } from '../types';

// export const useDataAnalytics = () => {
//   const [state, setState] = useState<AnalyticsState>({
//     data: [],
//     filters: {
//       category: null,
//       dateRange: [null, null],
//     },
//     view: 'chart',
//     loading: false,
//     error: null,
//   });

//   // Функция для загрузки данных
//   const fetchData = useCallback(async () => {
//     setState(prev => ({ ...prev, loading: true, error: null }));

//     try {
//       const response = await fetch('/api/data'); // Замените на реальный запрос
//       const data: DataPoint[] = await response.json();
//       setState(prev => ({ ...prev, data, loading: false }));
//     } catch (error) {
//       setState(prev => ({ ...prev, error: 'Ошибка загрузки данных', loading: false }));
//     }
//   }, []);

//   // Мемоизация отфильтрованных данных
//   const filteredData = useMemo(() => {
//     return state.data.filter(item => {
//       const { category, dateRange } = state.filters;
//       const isInCategory = category ? item.category === category : true;
//       const isInDateRange =
//         dateRange[0] && dateRange[1]
//           ? new Date(item.date) >= dateRange[0] && new Date(item.date) <= dateRange[1]
//           : true;
//       return isInCategory && isInDateRange;
//     });
//   }, [state.data, state.filters]);

//   // Функция обновления фильтров
//   const updateFilters = useCallback((newFilters: Partial<AnalyticsState['filters']>) => {
//     setState(prev => ({
//       ...prev,
//       filters: { ...prev.filters, ...newFilters },
//     }));
//   }, []);

//   // Эффект для загрузки данных при монтировании
//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return {
//     ...state,
//     filteredData,
//     updateFilters,
//     fetchData,
//   };
// };