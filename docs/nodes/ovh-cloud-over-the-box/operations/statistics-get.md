# OVH Cloud Over The Box — Get Statistics

> Opération `statisticsGet` · Fichier source : `nodes/OvhCloudOverTheBox/resources/main/statisticsGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/overTheBox/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `metricsType` | options | Oui |
| `Load` | — | — |
| `Memory Free` | — | — |
| `Traffic` | — | — |
| `period` | options | — |
| `Daily` | — | — |
| `Hourly` | — | — |
| `Monthly` | — | — |
| `Weekly` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
