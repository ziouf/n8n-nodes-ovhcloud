# OVH Cloud Hosting — Get Statistics

> Opération `statisticsGet` · Fichier source : `nodes/OvhCloudHosting/statistics/statisticsGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/hosting/web/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `period` | options | Oui |
| `Day` | — | — |
| `Week` | — | — |
| `Month` | — | — |
| `Year` | — | — |
| `type` | options | Oui |
| `Bandwidth` | — | — |
| `Hits` | — | — |
| `Errors` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
