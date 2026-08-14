# OVH Cloud Dedicated Cloud — Change the Execution Date of a Maintenance Operation (Allowed Network)

> Opération `allowedNetworkTaskChangeMaintenanceExecutionDate` · Fichier source : `nodes/OvhCloudDedicatedCloud/allowedNetwork/allowedNetworkTaskChangeMaintenanceExecutionDate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{networkAccessId}{taskId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `networkAccessId` | number | Oui |
| `taskId` | number | Oui |
| `executionDate` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
