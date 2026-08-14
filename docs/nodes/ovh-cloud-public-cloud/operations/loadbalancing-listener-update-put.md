# OVH Cloud Public Cloud — loadbalancingListenerUpdatePut

> Opération `loadbalancingListenerUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/region/loadbalancing/loadbalancingListenerUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/publicCloud/project/{projectId}{regionName}{listenerIdVal}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `regionName` | string | Oui |
| `listenerId` | string | Oui |
| `defaultPoolId` | string | — |
| `certificateId` | string | — |
| `description` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
