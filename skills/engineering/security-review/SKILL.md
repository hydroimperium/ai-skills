---
name: security-review
description: Reviews code, features, and architecture for common security risks. Use when handling authentication, authorization, user input, file uploads, payments, secrets, APIs, AI agents, or when the user asks for a security audit, threat model, or hardening review. Trigger on "security", "безопасность", "уязвимость", "аудит", "threat model".
metadata:
  category: engineering
  version: "1.0.0"
  inspired-by: "addyosmani/agent-skills, wshobson/agents, cloudflare/security-audit-skill"
---

# Security Review

Look for realistic risks, not a checklist of scary words.

## When to use

Use when the change touches:

- authentication or authorization;
- user input, HTML, SQL, shell commands, or file paths;
- file uploads or downloads;
- payments or financial data;
- secrets, tokens, or credentials;
- APIs, webhooks, or third-party integrations;
- personal or health data;
- AI agents with tools, memory, or untrusted input;
- infrastructure, CI/CD, or deployment.

## 1. Define the trust boundaries

Map:

- who can call the system;
- what data crosses each boundary;
- which components are trusted;
- where untrusted input enters;
- what an attacker could gain.

If the system has no sensitive data or external input, say so and keep the review proportional.

## 2. Review the high-risk areas

### Authentication

- Are passwords hashed with a modern algorithm and per-user salt?
- Are sessions httpOnly, secure, and sameSite where appropriate?
- Is session expiration enforced?
- Is logout invalidating the session server-side?
- Are password reset tokens single-use and expiring?
- Is MFA available for sensitive actions?

### Authorization

- Is every sensitive action checked server-side?
- Are object-level permissions checked, not only role-level?
- Can a user access another user's data by changing an ID?
- Are admin routes protected independently?
- Are feature flags or UI hiding treated as non-security?

### Input and output

- Is input validated at the boundary?
- Are SQL queries parameterized?
- Is HTML escaped or sanitized?
- Are shell commands built with argument arrays, not string concatenation?
- Are file paths normalized and restricted?
- Are redirects and URLs validated?
- Is output encoded for the target context?

### Secrets

- Are secrets in environment variables or a secret store, not the repository?
- Are secrets excluded from logs, errors, and client bundles?
- Are keys scoped and rotated?
- Are test fixtures free of real credentials?

### Data exposure

- Does the API return only the fields the client needs?
- Are errors revealing stack traces, SQL, or internal paths?
- Are logs free of tokens, passwords, and personal data?
- Are backups and exports protected?
- Is data retention defined?

### Dependencies and supply chain

- Are dependencies pinned and scanned?
- Are install scripts reviewed?
- Are packages from trusted sources?
- Is the lockfile committed?
- Are CI secrets scoped and protected?

### AI and agent-specific risks

- Is untrusted text delimited as data, not instructions?
- Is there a clear instruction hierarchy?
- Can the agent call tools that modify external systems?
- Are tool permissions least-privilege?
- Is human approval required for destructive actions?
- Are prompts and outputs logged safely?
- Can retrieved documents inject instructions?
- Is there a limit on loops, spend, and data access?

## 3. Rate findings

- **Critical** — remote code execution, auth bypass, mass data exposure, secret leak.
- **High** — privilege escalation, stored XSS, SQL injection, payment manipulation.
- **Medium** — information disclosure, CSRF, weak session handling, unsafe defaults.
- **Low** — hardening, missing headers, verbose errors.
- **Info** — observation or best practice.

## 4. Output format

```markdown
## Scope

<what was reviewed and what was not>

## Trust boundaries

<who can reach what>

## Findings

### <severity>: <title>

- **Location:** `<file>:<line>`
- **Issue:** <what is wrong>
- **Impact:** <what an attacker can do>
- **Evidence:** <code or reproduction>
- **Fix:** <specific change>
- **Verification:** <how to confirm the fix>

## Positive controls

- <what is already done well>

## Residual risk

- <what remains and why>
```

## Rules

- Do not claim a vulnerability without evidence or a plausible attack path.
- Do not run exploits against systems you do not own or have permission to test.
- Do not include real secrets or personal data in the report.
- Do not recommend security theater that does not change the attack surface.
- If the review is incomplete, say which areas were not covered.
- For critical findings, recommend stopping the release until fixed.

## Quality checks

- [ ] Trust boundaries are mapped.
- [ ] Authn and authz are reviewed separately.
- [ ] Input and output handling is checked.
- [ ] Secrets and logs are checked.
- [ ] Dependencies are considered.
- [ ] AI-specific risks are considered when relevant.
- [ ] Findings have evidence and a fix.
- [ ] Severity is calibrated.
