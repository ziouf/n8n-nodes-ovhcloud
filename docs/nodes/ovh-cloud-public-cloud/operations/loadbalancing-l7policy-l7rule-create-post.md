# OVH Cloud Public Cloud — loadbalancingL7PolicyL7RuleCreatePost

> Opération `loadbalancingL7PolicyL7RuleCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyL7RuleCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/publicCloud/project/{projectId}{regionName}{l7PolicyIdVal}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `regionName` | string | Oui |
| `l7PolicyId` | string | Oui |
| `ruleType` | string | Oui |
| `value` | string | Oui |
| `compareType` | string | Oui |
| `invert` | boolean | — |
| `key` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
