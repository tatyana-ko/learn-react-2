# Задача 2: Оптимизация списка задач с React.memo

## Теория, которую нужно изучить:
- React.memo и мемоизация компонентов
- Когда использовать мемоизацию
- Ререндеринг компонентов в React

## Требования к компоненту:
1. Оптимизировать компонент TaskItem с помощью React.memo
2. Сохранить всю существующую функциональность
3. Уменьшить количество ненужных ререндеров

## Как начать работу:
1. Установите зависимости:
```bash
npm install
```

2. Запустите проект:
```bash
npm run dev
```

3. Откройте файл `src/components/TaskItem.tsx` и оптимизируйте компонент.
4. Используйте консоль браузера для отслеживания ререндеров.

## Подсказки по реализации:

1. Базовое использование React.memo:
```tsx
const MemoizedComponent = React.memo(function Component() {
  return <div>...</div>
});
```

2. Проверьте, что компонент действительно ререндерится реже:
```tsx
console.log('Rendering TaskItem:', task.title);
```

## Ограничения:
- Использовать только React.memo для оптимизации
- Сохранить текущую функциональность
- Не изменять логику родительского компонента

## Проверка результата:
Ваше решение должно:
- Уменьшить количество ререндеров (проверяется по консоли)
- Сохранить возможность отмечать задачи как выполненные
- Корректно отображать состояние задач

## Тестирование:
```bash
npm test
```

## Полезные материалы:
- [React.memo Documentation](https://react.dev/reference/react/memo)
- [When to use React.memo](https://react.dev/reference/react/memo#when-to-use-memo)