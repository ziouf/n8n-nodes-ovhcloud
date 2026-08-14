# OVH Cloud Public Cloud — Create Volume

> Opération `createVolumePost` · Fichier source : `nodes/OvhCloudPublicCloud/blockstorage/volumeCreatePost.operation.ts`

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
| `availabilityZone` | string | Oui |
| `volumeSize` | number | Oui |
| `volumeTypeId` | string | Oui |
| `volumeName` | string | — |
| `description` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
