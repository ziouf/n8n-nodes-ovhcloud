# OVH Cloud Public Cloud — loadbalancingL7PolicyCreatePost

> Opération `loadbalancingL7PolicyCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyCreatePost.operation.ts`

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
| `action` | string | Oui |
| `listenerId` | string | Oui |
| `position` | number | — |
| `redirectUrl` | string | — |
| `redirectPrefix` | string | — |
| `redirectPoolId` | string | — |
| `redirectHttpCode` | number | — |
| `description` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
