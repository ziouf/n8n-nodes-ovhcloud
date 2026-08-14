# OVH Cloud Public Cloud — confirmTerminationPost

> Opération `confirmTerminationPost` · Fichier source : `nodes/OvhCloudPublicCloud/confirmTermination/confirmTerminationPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cloud/project/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `token` | string | Oui |
| `reason` | options | — |
| `Budget` | — | — |
| `Security` | — | — |
| `Technical` | — | — |
| `Other` | — | — |
| `commentary` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
