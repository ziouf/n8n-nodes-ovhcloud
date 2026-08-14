# OVH Cloud Public Cloud — loadbalancingLoadBalancerCreatePost

> Opération `loadbalancingLoadBalancerCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerCreatePost.operation.ts`

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
| `flavorId` | string | Oui |
| `networkId` | string | Oui |
| `subnetId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
