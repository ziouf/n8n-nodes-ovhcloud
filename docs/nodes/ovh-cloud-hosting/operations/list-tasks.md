# OVH Cloud Hosting — List Tasks

> Opération `listTasks` · Fichier source : `nodes/OvhCloudHosting/listTasks.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/hosting/web/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |

## Filtres optionnels

| Paramètre n8n | Query param API | Type |
| --- | --- | --- |
| `filters.function` | `function` | string |
| `filters.status` | `status` | options |

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
