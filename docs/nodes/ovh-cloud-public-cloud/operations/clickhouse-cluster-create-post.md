# OVH Cloud Public Cloud — clickhouseClusterCreatePost

> Opération `clickhouseClusterCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/database/clickhouse/clusterCreatePost.operation.ts`

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
| `version` | string | — |
| `plan` | string | — |
| `nodesPattern` | json | — |
| `nodesList` | json | — |
| `networkId` | string | — |
| `subnetId` | string | — |
| `backups` | json | — |
| `maintenanceTime` | string | — |
| `ipRestrictions` | json | — |
| `forkFrom` | json | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
