# OVH Cloud Dedicated Cloud — List Filtered Operations

> Opération `globalTasksList` · Fichier source : `nodes/OvhCloudDedicatedCloud/root/globalTasksList.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicatedCloud/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | — |
| `endDate.from` | string | — |
| `endDate.to` | string | — |
| `executionDate.from` | string | — |
| `executionDate.to` | string | — |
| `filerId` | number | — |
| `hostId` | number | — |
| `lastModificationDate.from` | string | — |
| `lastModificationDate.to` | string | — |
| `name` | string | — |
| `networkAccessId` | number | — |
| `orderId` | number | — |
| `parentTaskId` | number | — |
| `state` | multiOptions | — |
| `Canceled` | — | — |
| `Doing` | — | — |
| `Done` | — | — |
| `Error` | — | — |
| `Fixing` | — | — |
| `To Cancel` | — | — |
| `To Create` | — | — |
| `Todo` | — | — |
| `Unknown` | — | — |
| `Waiting For Childs` | — | — |
| `Waiting Todo` | — | — |
| `userId` | number | — |
| `vlanId` | number | — |
| `returnAll` | boolean | — |
| `limit` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
