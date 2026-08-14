# OVH Cloud Dedicated Cloud — Change the Execution Date of a Maintenance Operation (User)

> Opération `userTaskChangeMaintenanceExecutionDate` · Fichier source : `nodes/OvhCloudDedicatedCloud/user/userTaskChangeMaintenanceExecutionDate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{userId}{taskId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `userId` | number | Oui |
| `taskId` | number | Oui |
| `executionDate` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
