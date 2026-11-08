# AI Skills

Личная коллекция Agent Skills и слэш-команд для разработки, учёбы, текста, языка, работы, данных, продукта и дизайна. Плюс универсальный промпт-энхансер.

**37 навыков · 38 команд · 9 категорий**

## Категории

- `meta` — промпты, планирование, `grill-me`, контекст, создание навыков.
- `engineering` — отладка, TDD, ревью, git, безопасность, API, рефакторинг, документация.
- `study` — исследование, обучение, конспекты, лабораторные, курсовые, ВКР, ГОСТ, оригинальность.
- `writing` — деловые тексты и очистка от AI-слопа.
- `language` — редактура русского, перевод, проверка русских UI-строк.
- `work` — встречи, презентации, таблицы, проекты, карьера.
- `data` — анализ данных и SQL.
- `product` — PRD и приоритизация.
- `design` — интерфейсы и доступность.

Полный каталог: [`docs/CATALOG.md`](docs/CATALOG.md).

## Установка

OpenCode:

```powershell
.\install.ps1 -Target opencode
```

Claude Code:

```powershell
.\install.ps1 -Target claude
```

В текущий проект:

```powershell
.\install.ps1 -Target opencode -Scope project
```

`install.sh` делает то же самое в macOS/Linux. Установщик копирует и навыки, и команды. `npx skills add` ставит только навыки.

## Команды

`/prompt`, `/plan`, `/spec`, `/tasks`, `/grill-me`, `/brainstorm`, `/review`, `/debug`, `/test`, `/verify`, `/commit`, `/api`, `/refactor`, `/docs`, `/research`, `/learn`, `/notes`, `/lab`, `/coursework`, `/gost`, `/originality`, `/write`, `/humanize`, `/edit-ru`, `/translate`, `/ru-quality`, `/meeting`, `/slides`, `/project`, `/career`, `/data`, `/sql`, `/prd`, `/prioritize`, `/ui`, `/a11y`, `/skill`, `/handoff`.

## Структура

```text
skills/<category>/<skill>/SKILL.md
commands/<command>.md
prompts/<category>/<prompt>.md
docs/                  # каталог, источники, формат, roadmap
scripts/               # валидаторы и генератор навыков
```

## Проверка

```bash
npm run validate
```

## Права и источники

© 2026 hydroimperium. Все права защищены. Лицензия на оригинальные тексты и команды не предоставляется. Сторонние идеи и их лицензии перечислены в [`docs/SOURCES.md`](docs/SOURCES.md) и [`NOTICE.md`](NOTICE.md).
