# OVH Cloud Public Cloud — loadbalancingLoadBalancerLogUrlPost

> Opération `loadbalancingLoadBalancerLogUrlPost` · Fichier source : `nodes/OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerLogUrlPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/publicCloud/project/{projectId}{regionName}{loadBalancerIdVal}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `regionName` | string | Oui |
| `loadBalancerId` | string | Oui |
| `kind` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
