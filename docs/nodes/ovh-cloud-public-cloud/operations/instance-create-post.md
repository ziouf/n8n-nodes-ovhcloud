# OVH Cloud Public Cloud — instanceCreatePost

> Opération `instanceCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/instance/instanceCreatePost.operation.ts`

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
| `flavorId` | string | Oui |
| `imageId` | string | Oui |
| `networkId` | string | — |
| `namePrefix` | string | — |
| `tags` | string | — |
| `userData` | string | — |
| `volumeType` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
