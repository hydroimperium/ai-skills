# Источники и исследование

Дата сбора данных: 2026-11-07. Звёзды указаны приблизительно, по GitHub API на эту дату.

## Как выбирались источники

1. **Популярность и активность.** Высокие звёзды, недавние коммиты, живое сообщество.
2. **Совместимость.** Навыки в формате Agent Skills или легко адаптируемые инструкции.
3. **Практическая польза.** Задачи, которые реально повторяются в разработке, учёбе и работе.
4. **Лицензия.** MIT/Apache-2.0 или явное разрешение на переиспользование.
5. **Разнообразие.** Не только кодинг: учёба, тексты, встречи, таблицы, исследования.
6. **Качество инструкций.** Конкретные шаги, проверяемые критерии, отсутствие «магии».

## Репозитории, которые повлияли на MVP

| Репозиторий | Звёзды | Лицензия | Что взято |
|---|---:|---|---|
| [anthropics/skills](https://github.com/anthropics/skills) | ~188k | Apache-2.0 (многие навыки) | Формат `SKILL.md`, прогрессивное раскрытие, идеи skill-creator, документные навыки |
| [obra/superpowers](https://github.com/obra/superpowers) | ~314k | MIT | Системная отладка, TDD, планы, проверка перед завершением, код-ревью |
| [mattpocock/skills](https://github.com/mattpocock/skills) | ~317k | MIT | Маленькие компонуемые навыки, двухосевое ревью, обучение, handoff |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ~114k | MIT | Context engineering, планирование, качество кода, безопасность |
| [google/skills](https://github.com/google/skills) | ~23k | Apache-2.0 | Упаковка навыков под продукты и технологии |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | ~28k | MIT | Встречи, продуктовые документы, резюме |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | ~56k | MIT | Исследовательские и научные процессы |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | ~51k | MIT | Obsidian, Markdown, база знаний |
| [blader/humanizer](https://github.com/blader/humanizer) | ~66k | MIT | Удаление AI-шаблонов из текста |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | ~65k | MIT | Структура многофазного аудита безопасности |
| [vercel-labs/skills](https://github.com/vercel-labs/skills) | ~38k | MIT | Установщик и экосистема навыков |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | ~34k | См. репозиторий | Frontend, React, web design, writing guidelines |
| [wshobson/agents](https://github.com/wshobson/agents) | ~42k | MIT | Большой каталог инженерных и предметных навыков |
| [agentskills/agentskills](https://github.com/agentskills/agentskills) | ~27k | Apache-2.0 | Спецификация Agent Skills |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | ~27k | MIT | Файловое планирование, `task_plan.md`, `findings.md`, `progress.md` |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | ~81k | MIT | Поиск работы, резюме, интервью, трекинг вакансий |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | ~111k | MIT | Визуальный вкус и борьба с generic AI UI |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | ~105k | Apache-2.0 | Словарь дизайна, critique, audit, polish |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | ~59k | MIT | Маркетинговые навыки и структура копирайтинга |

## Промпт-энхансеры

| Репозиторий | Звёзды | Лицензия | Что взято |
|---|---:|---|---|
| [nidhinjs/prompt-master](https://github.com/nidhinjs/prompt-master) | ~16k | MIT | Определение целевого инструмента, извлечение intent, дисциплина вывода |
| [ckelsoe/prompt-architect](https://github.com/ckelsoe/prompt-architect) | ~331 | MIT | Оценка качества промпта, выбор фреймворка, уточняющие вопросы |
| [codegiveness/kernel-prompt](https://github.com/codegiveness/kernel-prompt) | — | MIT | Сохранение замысла, разделение known/assumed/open, self-contained handoff |
| [PhAlves23/prompt-engineering-skill](https://github.com/PhAlves23/prompt-engineering-skill) | ~13 | MIT | Диагностика, каноническая структура, адаптация под модель |
| [Alvaro-Manzo/promptshift](https://github.com/Alvaro-Manzo/promptshift) | ~10 | MIT | Борьба с раздуванием и подменой intent |

Дополнительно изучены:

- [tronghieu/agent-skills — system-prompt-creator](https://github.com/tronghieu/agent-skills/tree/main/skills/system-prompt-creator) — создание системных инструкций и тестовые запросы.
- [thinhkhuat/prompt-enhancer](https://github.com/thinhkhuat/prompt-enhancer) — улучшение черновика перед отправкой в Claude Code.

## Русский язык и текст

| Репозиторий | Звёзды | Лицензия | Что взято |
|---|---:|---|---|
| [N1arko/redaktura-skills](https://github.com/N1arko/redaktura-skills) | ~196 | NOASSERTION | Идеи редактуры, редполитики, UX-текста; текст не копировался |
| [smixs/humanizer-ru](https://github.com/smixs/humanizer-ru) | ~201 | MIT | Паттерны AI-слопа в русском тексте, режим аудита |
| [Anic888/russian-text-quality](https://github.com/Anic888/russian-text-quality) | ~6 | MIT | Проверка русских UI-строк, плюрализация, падежи, терминология |
| [codemistake/human-writing](https://github.com/codemistake/human-writing) | ~4 | MIT | Русскоязычная редактура без искусственной «человечности» |
| [dripips/plain-prose](https://github.com/dripips/plain-prose) | ~16 | MIT | Анти-слоп для EN/RU/DE, сохранение смысла |
| [ETOART/antislop-ru](https://github.com/ETOART/antislop-ru) | ~2 | MIT | Структурная таксономия русского AI-текста |
| [serge-masiutin/clear-writing](https://github.com/serge-masiutin/clear-writing) | ~1 | MIT | Ясный русский и английский текст |
| [ExAleks/russian-skill](https://github.com/ExAleks/russian-skill) | ~0 | MIT | Правило «отвечать по-русски» для разных агентов |
| [shahmen2088/codex-opencode-engineering](https://github.com/shahmen2088/codex-opencode-engineering) | ~0 | MIT | Русскоязычные инженерные навыки для Codex/OpenCode |

`N1arko/redaktura-skills` имеет лицензию NOASSERTION, поэтому его текст не копировался. Использованы только общие идеи и структура, а `russian-editor` написан заново.

## Академические и студенческие работы

| Репозиторий | Звёзды | Лицензия | Что взято |
|---|---:|---|---|
| [piofant/diploma-skills](https://github.com/piofant/diploma-skills) | ~16 | MIT | Цикл ВКР, антиплагиат и ИИ-детектор как тема, оформление, защита |
| [Bbar0n234/gost-report-skill](https://github.com/Bbar0n234/gost-report-skill) | ~6 | Apache-2.0 | ГОСТ 7.32, структура лабораторных и курсовых, детерминированная сборка .docx |
| [maarshir/gost-skills](https://github.com/maarshir/gost-skills) | ~3 | MIT | Проверка курсовых, ВКР и библиографии по ГОСТ |
| [cyclomethane/gost-skills](https://github.com/cyclomethane/gost-skills) | ~2 | MIT | Профили ГОСТ для ВКР, отчётов, статей, рефератов и библиографии |
| [timpara/opencode-academic-research](https://github.com/timpara/opencode-academic-research) | ~86 | NOASSERTION | Идеи OpenCode-команд для академического процесса; текст не копировался |
| [LeonChaoX/qinyan-academic-skills](https://github.com/LeonChaoX/qinyan-academic-skills) | ~1017 | MIT | Структура академических навыков, научная коммуникация |
| [neverbiasu/awesome-research-skills](https://github.com/neverbiasu/awesome-research-skills) | ~13 | CC0-1.0 | Каталог исследовательских навыков и критерии отбора |
| [junbolian/Academic-Humanizer](https://github.com/junbolian/Academic-Humanizer) | ~56 | NOASSERTION | Идеи академического анти-слопа; текст не копировался |

`timpara/opencode-academic-research` и `junbolian/Academic-Humanizer` имеют лицензию NOASSERTION. Их текст не копировался; использованы только общие идеи и структура.

## Что не копировалось

- Крупные каталоги на сотни навыков: они полезны как источники, но не как содержимое одного репозитория.
- Навыки с неясной лицензией или без лицензии.
- Узкие навыки под один продукт, если они не нужны для базового набора.
- Агрессивные jailbreak-промпты и материалы, нарушающие правила безопасности.

## Звёзды из личного профиля

При подготовке учитывались также репозитории, отмеченные звёздами в профиле `hydroimperium`, в частности:

- `mattpocock/skills`
- `multica-ai/andrej-karpathy-skills`
- `ComposioHQ/awesome-claude-skills`
- `google/skills`
- `nidhinjs/prompt-master`
- `ckelsoe/prompt-architect`
- `PatrickJS/awesome-cursorrules`
- `f/prompts.chat`
- `luongnv89/claude-howto`

## Как обновлять этот список

При добавлении навыка:

1. Укажите источник в `metadata.inspired-by`.
2. Добавьте строку в таблицу выше.
3. Если текст адаптирован, добавьте запись в `NOTICE.md`.
4. Проверьте лицензию источника.
