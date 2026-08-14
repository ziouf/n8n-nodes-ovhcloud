# OVH Cloud Dedicated Cloud — Relaunch Operation Currently in Error State (Host)

> Opération `hostTaskResetTaskState` · Fichier source : `nodes/OvhCloudDedicatedCloud/host/hostTaskResetTaskState.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}{hostId}{taskId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `hostId` | number | Oui |
| `taskId` | number | Oui |
| `reason` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
