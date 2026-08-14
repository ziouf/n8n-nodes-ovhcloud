# OVH Cloud Public Cloud — loadbalancingHealthMonitorCreatePost

> Opération `loadbalancingHealthMonitorCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/region/loadbalancing/loadbalancingHealthMonitorCreatePost.operation.ts`

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
| `monitorType` | string | Oui |
| `delay` | number | Oui |
| `timeout` | number | Oui |
| `maxRetries` | number | Oui |
| `maxRetriesDown` | number | Oui |
| `httpMethod` | string | — |
| `httpPath` | string | — |
| `httpStatusCode` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
