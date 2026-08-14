# OVH Cloud Public Cloud — Create LB Configuration

> Opération `loadbalancerConfigurationCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/loadbalancer/configurationCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cloud/project/{projectId}{loadBalancerId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `loadBalancerId` | string | Oui |
| `backends` | json | — |
| `frontends` | json | — |
| `certificates` | json | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
