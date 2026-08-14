# OVH Cloud Public Cloud — gatewayInterfaceCreatePost

> Opération `gatewayInterfaceCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/region/gateway/gatewayInterfaceCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/publicCloud/project/{projectId}{regionName}{idVal}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `regionName` | string | Oui |
| `id` | string | Oui |
| `subnetId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
