import React, { memo, useCallback } from 'react';
import type { AnalyticsState } from '../types';

interface Props {
  filters: AnalyticsState['filters'];
  onFilterChange: (filters: Partial<AnalyticsState['filters']>) => void;
}

// Студент должен оптимизировать этот компонент
export const FilterPanel = memo(({ filters, onFilterChange }: Props) => {
  const handleCategoryChange = useCallback((category: string | null) => {
    // TODO: Реализовать изменение категории
  }, [onFilterChange]);

  const handleDateRangeChange = useCallback((dateRange: [Date | null, Date | null]) => {
    // TODO: Реализовать изменение диапазона дат
  }, [onFilterChange]);

  return (
    <div>
      <select name="category" id="category">
        <option value="category1">Category-1</option>
        <option value="category2">Category-2</option>
        <option value="category3">Category-3</option>
      </select>

      <div>
        <label>Start:
          <input type="date" name="date-end" id="date-start" />
        </label>
        <label>End:
          <input type="date" name="date-end" id="date-end" />
        </label>
      </div>
    </div>
  );
});