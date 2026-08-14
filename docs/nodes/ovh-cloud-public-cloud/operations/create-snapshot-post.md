# OVH Cloud Public Cloud — Create Snapshot

> Opération `createSnapshotPost` · Fichier source : `nodes/OvhCloudPublicCloud/blockstorage/snapshotCreatePost.operation.ts`

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
| `snapshotTargetSpecName` | string | Oui |
| `snapshotTargetSpecDescription` | string | — |
| `snapshotTargetSpecLocationRegion` | string | Oui |
| `volumeId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
