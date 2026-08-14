# OVH Cloud Dedicated Cloud — List Operations Associated to Host

> Opération `hostTaskList` · Fichier source : `nodes/OvhCloudDedicatedCloud/host/hostTaskList.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicatedCloud/{serviceName}{datacenterId}{hostId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `hostId` | number | Oui |
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
