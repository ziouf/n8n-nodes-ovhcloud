# OVH Cloud Dedicated Cloud — List Operations Associated to Virtual Datacenter

> Opération `datacenterTaskList` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/datacenterTaskList.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
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
