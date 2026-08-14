# OVH Cloud Public Cloud — M3dbClusterCreatePost

> Opération `M3dbClusterCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/database/m3db/M3dbClusterCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cloud/project/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `description` | string | — |
| `plan` | string | — |
| `version` | string | — |
| `nodesList` | string | — |
| `nodesPattern` | string | — |
| `networkId` | string | — |
| `subnetId` | string | — |
| `disk` | string | — |
| `backup` | string | — |
| `backupTime` | string | — |
| `maintenanceTime` | string | — |
| `ipRestrictions` | string | — |
| `forkFrom` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
