# OVH Cloud Public Cloud — M3dbBackupGetGet

> Opération `M3dbBackupGetGet` · Fichier source : `nodes/OvhCloudPublicCloud/database/m3db/M3dbBackupGetGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/cloud/project/{serviceName}{clusterId}{backupId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `backupId` | string | Oui |
| `clusterId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
