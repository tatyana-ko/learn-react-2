# Задача 9: Оптимизация работы с API

## Теория, которую нужно изучить:
- Кэширование данных в React
- Оптимистичные обновления
- Стратегии обработки ошибок
- React Query и его возможности
- Дебаунсинг и тротлинг

## Проблема:
В приложении для управления задачами есть несколько проблем с производительностью:
1. Слишком много запросов к API
2. Отсутствие кэширования данных
3. Медленные обновления интерфейса
4. Плохая обработка ошибок

## Требования к решению:
1. Внедрить React Query для управления состоянием
2. Реализовать эффективное кэширование
3. Добавить оптимистичные обновления
4. Улучшить обработку ошибок

## Ограничения:
- Нельзя менять структуру API
- Необходимо сохранить текущий функционал
- Необходимо использовать TypeScript

## Как начать работу:
1. Установите зависимости:
```bash
npm install
```

2. Запустите проект:
```bash
npm run dev
```

3. Откройте Chrome DevTools Network панель для анализа запросов.
4. Найдите и оптимизируйте проблемные места в компонентах.

## Проверка результата:
Ваше решение должно:
- Минимизировать количество запросов к API
- Мгновенно обновлять UI при действиях пользователя
- Корректно обрабатывать ошибки
- Поддерживать консистентность данных

## Полезные материалы:
- [TanStack Query](https://tanstack.com/query/latest)
- [Optimistic Updates](https://tanstack.com/query/latest/docs/react/guides/optimistic-updates)
- [Error Handling](https://tanstack.com/query/latest/docs/react/guides/error-handling)
