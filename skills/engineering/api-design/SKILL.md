---
name: api-design
description: Designs and reviews APIs, interfaces, and contracts for correctness, consistency, security, and evolvability. Use when defining endpoints, request and response schemas, errors, auth, pagination, versioning, or integration boundaries. Trigger on "API", "endpoint", "эндпоинт", "contract", "interface", "спроектируй API", "контракт".
metadata:
  category: engineering
  version: "1.0.0"
  inspired-by: "addyosmani/agent-skills, wshobson/agents"
---

# API Design

Design the contract before the implementation.

## When to use

Use when the user:

- designs a new API or interface;
- changes an existing contract;
- defines request/response schemas;
- reviews error handling, auth, pagination, or versioning;
- integrates with a third-party service;
- asks "how should this endpoint look?".

## 1. Clarify the contract

Identify:

- who calls the API: frontend, mobile, service, partner, agent;
- what the caller needs to accomplish;
- what data goes in and out;
- what the caller must never see;
- latency, volume, and reliability requirements;
- compatibility and versioning constraints.

## 2. Model resources and actions

- Use nouns for resources and explicit actions for operations that are not CRUD.
- Keep URLs stable and predictable.
- Prefer one clear way to do one thing.
- Avoid leaking database structure into the public contract.
- Define identifiers, ownership, and tenancy.

## 3. Define the schema

For each endpoint or interface:

- method and path;
- purpose;
- auth and permissions;
- path, query, and body parameters;
- validation rules;
- success response;
- error responses;
- idempotency;
- pagination;
- rate limits;
- examples.

## 4. Design errors

Every error should include:

- a stable machine-readable code;
- a human-readable message;
- the field or parameter that caused it;
- a request ID for support;
- no stack traces, secrets, or internal paths.

Use consistent HTTP status codes. Do not return 200 for a failed operation.

## 5. Security and privacy

- Authenticate every non-public endpoint.
- Authorize at the object level, not only the route level.
- Validate all input at the boundary.
- Return only the fields the caller needs.
- Do not expose internal IDs if they leak information.
- Define rate limits and abuse controls.
- Treat webhooks as untrusted input.

## 6. Evolvability

- Add fields rather than changing their meaning.
- Keep old fields until clients migrate.
- Version only when necessary.
- Document deprecation and migration.
- Avoid breaking changes in minor releases.

## 7. Output format

````markdown
## Contract

### `METHOD /path`

**Purpose:** <what it does>
**Auth:** <who can call it>
**Idempotency:** <yes/no and key>

#### Request

| Field | Type | Required | Rules |
|---|---|---|---|

#### Response

```json
{}
```

#### Errors

| Status | Code | When |
|---|---|---|

#### Example

```http
METHOD /path
...
```

## Compatibility

- <what can change>
- <what requires a new version>

## Open questions

- <question>
````

## Rules

- Do not invent business rules.
- Do not expose internal fields without a reason.
- Do not use inconsistent naming between endpoints.
- Do not design a public API around the current database schema.
- Do not omit error and empty-state behavior.
- If the API handles money, health, or personal data, require a security review.

## Quality checks

- [ ] The caller and job are clear.
- [ ] The schema is complete.
- [ ] Errors are consistent and safe.
- [ ] Auth and object-level permissions are defined.
- [ ] Pagination and limits are defined.
- [ ] Compatibility is addressed.
- [ ] Examples are valid.
