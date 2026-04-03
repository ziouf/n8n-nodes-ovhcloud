# Shared Documentation Includes

This directory contains reusable, self-contained markdown snippets that are referenced across multiple documentation files in the `docs/` hierarchy.

## Purpose

Many documentation files (e.g., `v1/vps.md`, `v1/me.md`, `v1/domain.md`, `v2/iam.md`, `v2/webhosting.md`) share common boilerplate sections such as authentication, error handling, type safety, testing, security, and common model definitions. Rather than duplicating this content in every file, these shared includes provide a single source of truth.

## Files

| File                                       | Description                                                                                                                                                                         |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`authentication.md`](./authentication.md) | OVH API credential requirements, how authentication works, and links to obtain credentials.                                                                                         |
| [`error-handling.md`](./error-handling.md) | HTTP status codes, `NodeApiError` usage, common error scenarios, and retry logic recommendations.                                                                                   |
| [`type-safety.md`](./type-safety.md)       | TypeScript strict mode configuration, `IDataObject` usage, and explicit type definition guidelines.                                                                                 |
| [`testing.md`](./testing.md)               | Manual testing procedures in n8n, credential test button, debug node usage, and testing checklist.                                                                                  |
| [`security.md`](./security.md)             | Credential handling, least privilege IAM principles, data sensitivity, and resource URN best practices.                                                                             |
| [`common-models.md`](./common-models.md)   | Shared type definitions: `common.Task`, `common.TaskError`, `common.CurrentTask`, `common.ResourceStatusEnum`, `iam.ResourceMetadata`, `iam.resource.TagFilter`, and related enums. |

## How to Use

### As References

Link to these files from other documentation using relative paths:

```markdown
See [Authentication](../_shared/authentication.md) for credential setup instructions.
```

### As Includes

If your documentation tooling supports markdown includes (e.g., MkDocs, Docusaurus with plugins), you can embed these files directly:

```markdown
<!-- Example: MkDocs include syntax -->

{% include '../_shared/authentication.md' %}
```

### As Copy-Paste Sources

When creating new documentation files, copy the relevant sections from these files and adapt them as needed for the specific resource or API version.

## Maintenance

- When updating boilerplate content, edit the file in `_shared/` only — do not duplicate changes across individual docs.
- If a new shared topic emerges (e.g., pagination, rate limiting as a standalone topic), create a new file here and update this README.
- Keep each file focused on a single concern for maximum reusability.
