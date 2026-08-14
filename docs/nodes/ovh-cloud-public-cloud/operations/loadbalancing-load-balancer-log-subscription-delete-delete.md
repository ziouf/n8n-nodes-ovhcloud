# OVH Cloud Public Cloud — loadbalancingLoadBalancerLogSubscriptionDeleteDelete

> Opération `loadbalancingLoadBalancerLogSubscriptionDeleteDelete` · Fichier source : `nodes/OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerLogSubscriptionDeleteDelete.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| DELETE | `/publicCloud/project/{projectId}{regionName}{loadBalancerIdVal}{subscriptionIdVal}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `regionName` | string | Oui |
| `loadBalancerId` | string | Oui |
| `subscriptionId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
