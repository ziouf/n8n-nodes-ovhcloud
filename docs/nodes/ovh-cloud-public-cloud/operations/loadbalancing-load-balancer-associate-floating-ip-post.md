# OVH Cloud Public Cloud — loadbalancingLoadBalancerAssociateFloatingIpPost

> Opération `loadbalancingLoadBalancerAssociateFloatingIpPost` · Fichier source : `nodes/OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerAssociateFloatingIpPost.operation.ts`

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
| `floatingIpId` | string | Oui |
| `ip` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
