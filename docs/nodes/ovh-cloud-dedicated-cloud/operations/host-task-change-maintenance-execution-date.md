# OVH Cloud Dedicated Cloud — Change the Execution Date of a Maintenance Operation (Host)

> Opération `hostTaskChangeMaintenanceExecutionDate` · Fichier source : `nodes/OvhCloudDedicatedCloud/host/hostTaskChangeMaintenanceExecutionDate.operation.ts`

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
| `executionDate` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
