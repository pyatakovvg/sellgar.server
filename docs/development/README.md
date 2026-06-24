# Конвенции Разработки

Этот каталог фиксирует правила разработки для backend-монорепозитория
`sellgar.server`.

## Что Здесь Есть

Universal baseline:

- [core/README.md](./core/README.md) - переносимые правила разработки.
- [core/file-structure.md](./core/file-structure.md) - общие правила структуры
  файлов.

Project overlay:

- [project/README.md](./project/README.md) - карта правил текущего repo.
- [project/source-of-truth.md](./project/source-of-truth.md) - источники
  истины.
- [project/imports.md](./project/imports.md) - импорты и exports.
- [project/code-style.md](./project/code-style.md) - TypeScript/NestJS стиль.
- [project/oop-runtime-contract.md](./project/oop-runtime-contract.md) -
  слойность NestJS runtime.
- [project/styles.md](./project/styles.md) - frontend-only правила, которые в
  этом repo почти не применяются.
- [project/change-checklist.md](./project/change-checklist.md) - checklist
  изменения.

## Как Читать

Для обычной задачи:

1. открыть ближайший `AGENTS.md`;
2. определить workspace-владельца;
3. открыть релевантный документ из `docs/development/project`;
4. сверить текущий код и `package.json` workspace;
5. выполнить проверку из ближайшего `AGENTS.md`.

Код показывает фактическое состояние. Документация задает норму для новых
правок. Если они расходятся, не копировать старое расхождение без отдельного
решения.
