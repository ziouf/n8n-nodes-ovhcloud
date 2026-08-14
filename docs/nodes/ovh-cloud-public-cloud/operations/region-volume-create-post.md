# OVH Cloud Public Cloud — regionVolumeCreatePost

> Opération `regionVolumeCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/region/regionVolumeCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/publicCloud/project/{projectId}{regionName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `regionName` | string | Oui |
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
