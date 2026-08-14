# OVH Cloud Public Cloud — loadbalancingHealthMonitorUpdatePut

> Opération `loadbalancingHealthMonitorUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/region/loadbalancing/loadbalancingHealthMonitorUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/publicCloud/project/{projectId}{regionName}{healthMonitorIdVal}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `regionName` | string | Oui |
| `healthMonitorId` | string | Oui |
| `delay` | number | — |
| `timeout` | number | — |
| `maxRetries` | number | — |
| `maxRetriesDown` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
