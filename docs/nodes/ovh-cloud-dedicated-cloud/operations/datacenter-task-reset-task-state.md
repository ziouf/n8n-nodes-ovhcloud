# OVH Cloud Dedicated Cloud — Relaunch Operation Currently in Error State (Datacenter)

> Opération `datacenterTaskResetTaskState` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/datacenterTaskResetTaskState.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}{taskId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `taskId` | number | Oui |
| `reason` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
