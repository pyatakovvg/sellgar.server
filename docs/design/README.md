# Проектирование Изменений

Документы этого каталога помогают выбрать владельца изменения до правки кода.

## Когда Читать

- меняется внешний gateway endpoint;
- меняется внутренний service contract;
- появляется новый module/helper/common слой;
- меняется auth/session/security behavior;
- нужно выбрать владельца между `gateways/*` и `services/*`;
- старый код противоречит документации.

## Что Читать

- [boundaries.md](boundaries.md) - границы gateway/service/common/helper.
- [checks.md](checks.md) - проверки проектного решения.
- [protocol.md](protocol.md) - как собирать контекст и останавливаться на
  развилках.
- [instruction-rules.md](instruction-rules.md) - как писать agent-facing docs.

Для очевидной локальной правки достаточно ближайшего `AGENTS.md` и текущего
кода.
