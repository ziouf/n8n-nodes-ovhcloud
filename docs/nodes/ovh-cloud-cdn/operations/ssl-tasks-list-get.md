# OVH Cloud Cdn — List SSL Tasks

> Opération `sslTasksListGet` · Fichier source : `nodes/OvhCloudCdn/resources/ssl/sslTasksListGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/cdn/dedicated/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `function` | options | — |
| `Flush` | — | — |
| `Flush All` | — | — |
| `Generate SSL` | — | — |
| `Install SSL` | — | — |
| `Reinstall SSL` | — | — |
| `Remove Domain` | — | — |
| `Uninstall SSL` | — | — |
| `Update Cache Rule` | — | — |
| `status` | options | — |
| `Cancelled` | — | — |
| `Doing` | — | — |
| `Done` | — | — |
| `Error` | — | — |
| `Todo` | — | — |

## Filtres optionnels

> ⚠️ Paramètres plats (rétrocompatibles) — non affichés dans l'interface n8n.

| Paramètre n8n | Query param API | Type |
| --- | --- | --- |
| `function` | `function` | options |
| `status` | `status` | options |

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
