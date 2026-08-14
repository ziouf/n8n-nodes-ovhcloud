# OVH Cloud Public Cloud — loadbalancingListenerCreatePost

> Opération `loadbalancingListenerCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/region/loadbalancing/loadbalancingListenerCreatePost.operation.ts`

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
| `protocol` | string | Oui |
| `port` | number | Oui |
| `loadbalancerId` | string | Oui |
| `defaultPoolId` | string | — |
| `certificateId` | string | — |
| `description` | string | — |
| `timeoutClientData` | number | — |
| `timeoutMemberData` | number | — |
| `tlsVersions` | string | — |
| `allowedCidrs` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
