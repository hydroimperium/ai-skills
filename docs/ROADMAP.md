# План развития

## Сейчас (MVP)

- 37 навыков в 9 категориях: `meta`, `engineering`, `study`, `writing`, `language`, `work`, `data`, `product`, `design`.
- Универсальный `prompt-enhancer` + standalone-версия.
- Русскоязычные навыки: редактура, проверка UI-строк, перевод, академическое письмо, ГОСТ, оригинальность.
- Валидатор навыков и CI.
- Каталог источников и атрибуция.
- Команды и OpenCode-агенты вынесены в репозиторий `opencode-ai-skills`.

## Следующий этап

### Документы и офис

- `docx` — создание и редактирование Word-документов.
- `pdf` — извлечение текста, таблиц, форм.
- `pptx` — презентации с проверкой качества.
- `xlsx` — таблицы, формулы, анализ.
- `office-docs` — маршрутизация между форматами.

Источники: `anthropics/skills`, `wshobson/agents`.

### Разработка

- `webapp-testing` — браузерное тестирование.
- `mcp-builder` — создание MCP-серверов.
- `performance` — измерение и оптимизация.
- `observability` — логи, метрики, трейсы.
- `ci-cd` — пайплайны и автоматизация.
- `deprecation` — миграции и удаление старого кода.
- `browser-testing` — DevTools, консоль, скриншоты.

Источники: `anthropics/skills`, `vercel-labs/agent-skills`, `addyosmani/agent-skills`, `wshobson/agents`.

### Данные и ИИ

- `rag` — retrieval-augmented generation.
- `llm-evaluation` — оценка качества моделей и промптов.
- `statistics` — проверка гипотез и мощность.
- `scientific-writing` — статьи, графики, цитирование.
- `prompt-optimization` — APE, OPRO, DSPy.

Источники: `K-Dense-AI/scientific-agent-skills`, `wshobson/agents`, `PhAlves23/prompt-engineering-skill`.

### Работа и продукт

- `negotiation` — подготовка к переговорам.
- `customer-interview` — сценарии и анализ интервью.
- `stakeholder-map` — карта стейкхолдеров.
- `okr` — цели и ключевые результаты.
- `job-search` — расширенный поиск работы и трекинг.

Источники: `phuryn/pm-skills`, `career-ops-hq/career-ops`.

### База знаний

- `obsidian-markdown` — Obsidian Flavored Markdown.
- `obsidian-bases` — базы и представления.
- `json-canvas` — canvas-файлы.
- `defuddle` — извлечение чистого Markdown из веб-страниц.

Источники: `kepano/obsidian-skills`.

### Русский язык

- `russian-ux-copy` — тексты интерфейсов, ошибки, кнопки, пустые состояния.
- `russian-typography` — углублённая типографика и редакционные правила.
- `russian-glossary` — глоссарий терминов для проекта.
- `russian-defense` — подготовка речи и слайдов к защите.

Источники: `N1arko/redaktura-skills`, `smixs/humanizer-ru`, `Anic888/russian-text-quality`, `serge-masiutin/clear-writing`.

## Качество

- Добавить `evals/` с 2–3 тестовыми запросами для каждого навыка.
- Расширить CI: проверка ссылок, лицензий, тесты валидаторов.
- Проверить работу в OpenCode, Claude Code, Codex и Cursor.
- Добавить `CHANGELOG.md` и версионирование навыков.
- Добавить тесты навыков: правильные триггеры, аргументы, пустой ввод.

## Идеи

- `skill-router` — навык, который подбирает нужный навык под задачу.
- `prompt-library` — библиотека готовых промптов по категориям.
- `decision-log` — журнал архитектурных и продуктовых решений.
- `learning-plan` — персональный план обучения на несколько недель.
- `daily-review` — итоги дня, приоритеты и перенос задач.
