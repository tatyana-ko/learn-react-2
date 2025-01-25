# Derived State Calculation Task

## Бизнес-контекст
В современных e-commerce приложениях важно предоставлять пользователям актуальную информацию о состоянии их корзины покупок, включая промежуточные и итоговые расчеты. В этой задаче вам предстоит реализовать компонент корзины покупок с различными вычисляемыми значениями.

## Задача
Создать компонент ShoppingCart, который управляет списком товаров в корзине и автоматически вычисляет различные показатели на основе состояния корзины.

### Функциональные требования

1. Управление товарами:
   - Добавление товара в корзину
   - Изменение количества товара
   - Удаление товара
   - Применение промокода

2. Вычисляемые значения:
   - Подытог (сумма всех товаров)
   - Скидка (процент или фиксированная сумма)
   - Налог (процент от подытога)
   - Стоимость доставки (на основе веса или суммы заказа)
   - Итоговая сумма

3. Дополнительная функциональность:
   - Проверка наличия товара на складе
   - Минимальная сумма заказа
   - Бесплатная доставка при определенной сумме
   - История изменений корзины

### Технические требования

1. State Management:
   - Использование useState для базового состояния
   - Использование useMemo для вычисляемых значений
   - Оптимизация перерендеров

2. TypeScript:
   - Строгая типизация всех интерфейсов
   - Типы для товаров и вычислений
   - Обработка краевых случаев

3. React:
   - Компонентная архитектура
   - Оптимизация производительности
   - Обработка побочных эффектов

4. Тестирование:
   - Тестирование вычислений
   - Тестирование взаимодействия
   - Тестирование граничных случаев

## Процесс проверки

### Автотесты (70%)
- [ ] Корректное добавление товаров
- [ ] Изменение количества товаров
- [ ] Удаление товаров
- [ ] Расчет подытога
- [ ] Применение скидок
- [ ] Расчет налога
- [ ] Расчет доставки
- [ ] Расчет итоговой суммы
- [ ] Проверка минимальной суммы
- [ ] Применение промокода

### Ручная проверка (30%)
- [ ] Корректность всех вычислений
- [ ] Производительность при большом количестве товаров
- [ ] Обработка граничных случаев
- [ ] UX при изменении количества
- [ ] Качество TypeScript типов

## Необходимая теория

### Производное состояние
1. [Вычисляемые значения](https://react.dev/learn/managing-state#choosing-the-state-structure)
   - Принципы вычисления
   - Избегание дублирования
   - Кэширование результатов
   - Зависимости вычислений

### Оптимизация
1. [Мемоизация](https://react.dev/reference/react/useMemo)
   - useMemo хук
   - Выбор зависимостей
   - Предотвращение перерасчетов
   - Баланс памяти

### Работа с числами
1. [Числовые операции](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
   - Форматирование
   - Округление
   - Валидация
   - Обработка ошибок

### TypeScript
1. [Типизация вычислений](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
   - Числовые типы
   - Generics
   - Utility Types
   - Type Guards

*Дополнительно*
- [Decimal.js](https://github.com/MikeMcl/decimal.js/) - точные вычисления
- [date-fns](https://date-fns.org/) - работа с датами

## Полезные материалы для изучения

### Производные вычисления в React
1. [Мемоизация с useMemo](https://react.dev/reference/react/useMemo)
   - Основы мемоизации
   - Оптимизация вычислений
   - Когда использовать useMemo

2. [Выбор структуры состояния](https://react.dev/learn/choosing-the-state-structure)
   - Организация состояния
   - Вычисляемые значения
   - Избегание дублирования

### Оптимизация производительности
1. [Оптимизация рендеринга](https://react.dev/learn/render-and-commit)
   - Предотвращение лишних рендеров
   - Профилирование компонентов
   - Стратегии оптимизации

2. [React DevTools Profiler](https://react.dev/learn/react-developer-tools)
   - Анализ производительности
   - Поиск проблемных мест
   - Оптимизация ререндеров

### Типизация с TypeScript
1. [TypeScript в React](https://react-typescript-cheatsheet.netlify.app/)
   - Типизация пропсов и состояния
   - Дженерики
   - Utility Types

2. [Продвинутые типы](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
   - Mapped Types
   - Conditional Types
   - Template Literal Types

### Работа с числами
1. [JavaScript Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
   - Форматирование чисел
   - Округление
   - Работа с валютой

2. [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
   - Форматирование валют
   - Локализация чисел
   - Настройка отображения

### Дополнительные инструменты
1. [Reselect](https://github.com/reduxjs/reselect) - библиотека для мемоизации селекторов
2. [Decimal.js](https://github.com/MikeMcl/decimal.js/) - точные вычисления с десятичными числами
3. [date-fns](https://date-fns.org/) - работа с датами и временем

## Полезные материалы
- [React Performance](https://react.dev/learn/render-and-commit)
- [useMemo Hook](https://react.dev/reference/react/useMemo)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)