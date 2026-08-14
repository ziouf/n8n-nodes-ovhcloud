# OVH Cloud Public Cloud — regionVolumeUpdatePut

> Opération `regionVolumeUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/region/regionVolumeUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/publicCloud/project/{projectId}{regionName}{volumeId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `regionName` | string | Oui |
| `volumeId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
