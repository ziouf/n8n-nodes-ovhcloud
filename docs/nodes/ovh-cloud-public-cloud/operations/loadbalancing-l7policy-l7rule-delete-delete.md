# OVH Cloud Public Cloud — loadbalancingL7PolicyL7RuleDeleteDelete

> Opération `loadbalancingL7PolicyL7RuleDeleteDelete` · Fichier source : `nodes/OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyL7RuleDeleteDelete.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| DELETE | `/publicCloud/project/{projectId}{regionName}{l7PolicyIdVal}{l7RuleIdVal}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `regionName` | string | Oui |
| `l7PolicyId` | string | Oui |
| `l7RuleId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
