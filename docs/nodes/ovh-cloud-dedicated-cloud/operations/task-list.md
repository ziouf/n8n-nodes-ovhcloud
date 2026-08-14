# OVH Cloud Dedicated Cloud — List Operations

> Opération `taskList` · Fichier source : `nodes/OvhCloudDedicatedCloud/task/taskList.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicatedCloud/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `executionDate` | string | — |
| `name` | string | — |
| `state` | options | — |
| `Canceled` | — | — |
| `Doing` | — | — |
| `Done` | — | — |
| `error` | — | — |
| `Fixing` | — | — |
| `toCancel` | — | — |
| `toCreate` | — | — |
| `Todo` | — | — |
| `Unknown` | — | — |
| `waitingForChilds` | — | — |
| `waitingTodo` | — | — |
| `returnAll` | boolean | — |
| `limit` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
