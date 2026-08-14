# OVH Cloud Public Cloud — loadbalancingL7PolicyUpdatePut

> Opération `loadbalancingL7PolicyUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/publicCloud/project/{projectId}{regionName}{l7PolicyIdVal}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `regionName` | string | Oui |
| `l7PolicyId` | string | Oui |
| `action` | string | — |
| `listenerId` | string | — |
| `position` | number | — |
| `redirectUrl` | string | — |
| `redirectPrefix` | string | — |
| `redirectPoolId` | string | — |
| `redirectHttpCode` | number | — |
| `description` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
