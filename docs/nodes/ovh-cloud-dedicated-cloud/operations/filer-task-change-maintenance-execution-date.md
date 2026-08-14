# OVH Cloud Dedicated Cloud — Change the Execution Date of a Maintenance Operation (Datastore)

> Opération `filerTaskChangeMaintenanceExecutionDate` · Fichier source : `nodes/OvhCloudDedicatedCloud/filer/filerTaskChangeMaintenanceExecutionDate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}{filerId}{taskId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `filerId` | number | Oui |
| `taskId` | number | Oui |
| `executionDate` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
