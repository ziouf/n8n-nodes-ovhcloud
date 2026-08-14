# OVH Cloud Nutanix — Confirm Termination

> Opération `confirmTerminationPost` · Fichier source : `nodes/OvhCloudNutanix/resources/confirmTerminationPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/nutanix/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `token` | string | Oui |
| `reason` | string | — |
| `futureUse` | string | — |
| `commentary` | string | — |
| `commentaryFutureUse` | string | — |
| `commentaryReason` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
