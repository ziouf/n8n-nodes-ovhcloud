# OVH Cloud Public Cloud — loadbalancingPoolMemberGetGet

> Opération `loadbalancingPoolMemberGetGet` · Fichier source : `nodes/OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolMemberGetGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/publicCloud/project/{projectId}{regionName}{poolIdVal}{memberIdVal}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `regionName` | string | Oui |
| `poolId` | string | Oui |
| `memberId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
