# OVH Cloud Public Cloud — Create Backup

> Opération `createBackupPost` · Fichier source : `nodes/OvhCloudPublicCloud/blockstorage/backupCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/publicCloud/project/{projectId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `backupTargetSpecName` | string | Oui |
| `backupTargetSpecDescription` | string | — |
| `backupTargetSpecLocationRegion` | string | Oui |
| `volumeId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
