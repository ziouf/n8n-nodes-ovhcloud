# OVH Cloud Public Cloud — mongodbClusterUpdatePut

> Opération `mongodbClusterUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/database/mongodb/clusterUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cloud/project/{serviceName}{clusterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `clusterId` | string | Oui |
| `description` | string | — |
| `plan` | string | — |
| `version` | string | — |
| `flavor` | string | — |
| `maintenanceTime` | string | — |
| `backupTime` | string | — |
| `deletionProtection` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
