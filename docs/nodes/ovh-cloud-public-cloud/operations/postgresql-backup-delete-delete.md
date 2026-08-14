# OVH Cloud Public Cloud — postgresqlBackupDeleteDelete

> Opération `postgresqlBackupDeleteDelete` · Fichier source : `nodes/OvhCloudPublicCloud/database/postgresql/backupDeleteDelete.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| DELETE | `/cloud/project/{serviceName}{clusterId}{backupId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `clusterId` | string | Oui |
| `backupId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
