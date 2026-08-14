# OVH Cloud Public Cloud — clickhouseClusterUpdatePut

> Opération `clickhouseClusterUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/database/clickhouse/clusterUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cloud/project/{serviceName}{clusterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `clusterId` | string | Oui |
| `description` | string | — |
| `version` | string | — |
| `plan` | string | — |
| `backups` | json | — |
| `maintenanceTime` | string | — |
| `ipRestrictions` | json | — |
| `deletionProtection` | boolean | — |
| `enablePrometheus` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
