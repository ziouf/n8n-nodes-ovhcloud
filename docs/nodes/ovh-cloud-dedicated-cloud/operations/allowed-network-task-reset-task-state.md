# OVH Cloud Dedicated Cloud — Relaunch Operation Currently in Error State (Allowed Network)

> Opération `allowedNetworkTaskResetTaskState` · Fichier source : `nodes/OvhCloudDedicatedCloud/allowedNetwork/allowedNetworkTaskResetTaskState.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{networkAccessId}{taskId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `networkAccessId` | number | Oui |
| `taskId` | number | Oui |
| `reason` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
