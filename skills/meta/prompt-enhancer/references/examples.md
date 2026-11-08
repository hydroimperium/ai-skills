# Worked examples

These examples show the level of detail to aim for. They are not templates to copy verbatim.

## Example 1: short coding request in Russian

**User input:**

```text
Улучши промпт: надо добавить авторизацию в мой Next.js проект.
```

**Good clarifying questions (only if needed):**

```text
1. Какая авторизация нужна: email+пароль, OAuth, magic link? Рекомендую email+пароль для MVP.
2. Можно ли менять схему базы данных и устанавливать зависимости? Рекомендую: да, но с остановкой перед миграцией.
3. Нужно ли делать UI или только API и защиту маршрутов? Рекомендую: API + защита маршрутов, UI отдельной задачей.
```

**Enhanced prompt:**

```text
Ты работаешь в существующем Next.js-проекте. Твоя задача — добавить авторизацию по email и паролю для MVP.

Контекст:
- Стек: Next.js App Router, TypeScript, [FILL: база данных и ORM].
- Сейчас авторизации нет; публичные страницы должны остаться публичными.
- Пользователи должны регистрироваться, входить, выходить и получать доступ к защищённым страницам.
- Используй существующие паттерны проекта и не переписывай несвязанный код.

Область работ:
- В области: схема пользователей и сессий, API-маршруты регистрации/входа/выхода, middleware или серверная проверка сессии, защита [FILL: список защищённых маршрутов].
- Вне области: OAuth, восстановление пароля, email-рассылки, платежи, редизайн UI.

Требования:
1. Пароли хранятся только в виде безопасного хеша; никогда не логируются.
2. Сессия хранится в httpOnly, secure, sameSite cookie.
3. Регистрация валидирует email и минимальную длину пароля.
4. Вход возвращает понятную ошибку без раскрытия существования аккаунта.
5. Защищённые маршруты перенаправляют неавторизованных пользователей на страницу входа.
6. Выход удаляет сессию и cookie.

Ограничения:
- Не добавляй зависимости без предварительного списка и обоснования.
- Не меняй публичные API, кроме новых маршрутов авторизации.
- Не трогай [FILL: пути, которые нельзя менять].
- Следуй существующему стилю кода и структуре проекта.

Границы одобрения:
- Остановись и спроси перед изменением схемы базы данных, установкой зависимостей и запуском миграций.
- Остановись и спроси, если для реализации нужен внешний сервис или секрет.

Готово, когда:
- Новый пользователь может зарегистрироваться и войти.
- Неверный пароль не создаёт сессию.
- Защищённый маршрут недоступен без сессии.
- Выход завершает сессию.
- Добавлены или обновлены тесты на регистрацию, вход, выход и защиту маршрута.

Проверка:
- Запусти `[FILL: команда тестов]`, `[FILL: lint]`, `[FILL: typecheck]`.
- Покажи точные команды и результат.
- Если тесты не проходят по причинам вне задачи, остановись и объясни.

Отчёт:
- Кратко опиши изменения.
- Перечисли изменённые файлы.
- Покажи результаты проверок.
- Укажи риски, предположения и то, что осталось непроверенным.

Условия остановки:
- Если решение меняет объём задачи, остановись и спроси.
- Если нужен секрет, платный сервис или необратимая операция, остановись и спроси.
```

**Why this is better:**

- The target agent knows the stack, scope, and non-goals.
- Security requirements are explicit.
- Approval boundaries prevent destructive actions.
- "Done" is observable, not "make it work".
- Unknowns are marked as `[FILL]` instead of invented.

## Example 2: study request in English

**User input:**

```text
Make me a prompt to learn linear algebra for machine learning.
```

**Enhanced prompt:**

```text
You are a patient linear algebra tutor for a machine learning beginner.

Learning goal:
After four weeks, I should be able to read the linear algebra notation in ML papers, explain vectors, matrices, eigenvalues, and SVD, and implement basic operations in NumPy.

My level:
I know basic Python and high-school algebra. I do not remember matrix multiplication.

Constraints:
- I can study 45 minutes per day, five days per week.
- I prefer concrete examples over formal proofs.
- I want to connect every concept to a machine learning use case.

Teaching method:
1. Start each topic with a concrete ML example.
2. Explain the intuition in plain language.
3. Give the formal definition.
4. Work through one numerical example.
5. Give me one exercise and wait for my answer.
6. Correct my mistakes and explain the error.
7. End each week with a 10-question recall quiz and a review plan.

Syllabus:
- Week 1: vectors, dot products, norms, cosine similarity.
- Week 2: matrices, matrix multiplication, linear transformations.
- Week 3: eigenvalues, eigenvectors, diagonalization.
- Week 4: SVD, low-rank approximation, PCA.

Rules:
- Ask one question at a time.
- Do not introduce more than three new concepts per session.
- Use NumPy code for examples.
- If I ask for a proof, give the intuition first, then the proof.
- Do not claim I understand something; check with an exercise.

Start with Week 1, Session 1. Give me the goal, one example, one explanation, and one exercise. Wait for my answer.
```

**Why this is better:**

- The tutor knows the goal, level, time budget, and preferred style.
- The syllabus is sequenced.
- Active recall is built in.
- The prompt tells the tutor to wait and check understanding.

## Example 3: work email in Russian

**User input:**

```text
Напиши промпт, чтобы ИИ составил письмо клиенту о переносе сроков.
```

**Enhanced prompt:**

```text
Ты помогаешь написать письмо клиенту о переносе срока проекта.

Ситуация:
- Проект должен был быть сдан [FILL: дата].
- Новая реалистичная дата: [FILL: дата].
- Причина: [FILL: кратко и честно, без обвинений].
- Клиент: [FILL: имя, роль, история отношений].
- Что уже сделано: [FILL: факты].
- Что будет сделано, чтобы снизить риск: [FILL: конкретные шаги].

Цель письма:
- Сохранить доверие.
- Честно объяснить перенос.
- Дать новую дату и план.
- Предложить компенсацию или следующий шаг, если это уместно.

Тон:
- Прямой, спокойный, уважительный.
- Без канцелярита, оправданий и обещаний, которые нельзя выполнить.
- Без фраз «надеемся на понимание» и «в кратчайшие сроки».

Структура:
1. Тема письма.
2. Краткое объяснение ситуации.
3. Новая дата и что она означает.
4. План действий и контрольные точки.
5. Что нужно от клиента, если что-то нужно.
6. Короткое закрытие.

Ограничения:
- Не обвиняй команду или клиента.
- Не выдумывай факты, даты и компенсации.
- Не обещай то, чего нет в исходных данных.
- Длина: до 250 слов.

Перед выводом проверь:
- Причина объяснена без ухода от ответственности.
- Новая дата и следующий шаг однозначны.
- Нет неподтверждённых обещаний.
- Тон соответствует отношениям с клиентом.

Верни только тему письма и текст письма.
```

**Why this is better:**

- The prompt separates facts the user must supply from wording the AI can write.
- It prevents invented dates and compensation.
- The tone constraints are concrete.
- The output is ready to use.

## Example 4: Russian coursework section

**User input:**

```text
Сделай промпт, чтобы ИИ помог написать первую главу курсовой по экономике.
```

**Enhanced prompt:**

```text
Ты помогаешь написать первую главу курсовой работы по [FILL: дисциплина] на тему «[FILL: тема]».

Задание:
- Объём главы: [FILL: страниц].
- Срок: [FILL: дата].
- Требования вуза: [FILL: методичка или ссылка].
- Оформление: [FILL: ГОСТ 7.32 / шаблон вуза].
- Стиль цитирования: [FILL: ГОСТ Р 7.0.100-2018 / другой].

Структура главы:
1. [FILL: раздел]
2. [FILL: раздел]
3. Выводы по главе.

Источники:
- Используй только источники, которые я предоставлю.
- Каждое заимствованное положение должно иметь ссылку.
- Не выдумывай источники, данные, цитаты и результаты.
- Если данных не хватает, пометь `[FILL: ...]` и задай вопрос.

Требования к тексту:
- Академический русский язык, без канцелярита и AI-слопа.
- Не пересказывай источники подряд: сравнивай позиции, выделяй противоречия и формулируй собственный анализ.
- Не помогай обходить антиплагиат или AI-детекторы. Оригинальность должна быть настоящей: собственные выводы, корректные ссылки, переработка своими словами.
- Не выдавай сгенерированный текст за готовую работу без моей проверки.

Формат результата:
1. Сначала предложи план главы и список тезисов.
2. После моего подтверждения напиши текст раздела.
3. В конце дай список мест, где нужны мои данные, источники или проверка.

Проверка:
- Все ссылки соответствуют списку источников.
- Структура соответствует заданию.
- Нет выдуманных фактов.
- Стиль академический, но читаемый.
- Объём соответствует требованию.
```

**Why this is better:**

- It separates the assignment requirements from the AI's writing.
- It forces citations and own analysis.
- It blocks fabricated sources and detector evasion.
- It asks for an outline before the full text.
