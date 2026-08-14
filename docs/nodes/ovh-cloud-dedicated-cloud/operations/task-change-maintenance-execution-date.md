# OVH Cloud Dedicated Cloud — Change the Execution Date of a Maintenance Operation (Task)

> Opération `taskChangeMaintenanceExecutionDate` · Fichier source : `nodes/OvhCloudDedicatedCloud/task/taskChangeMaintenanceExecutionDate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{taskId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `taskId` | number | Oui |
| `executionDate` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
