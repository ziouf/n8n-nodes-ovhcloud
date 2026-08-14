# OVH Cloud Xdsl — linesStatisticsGet

> Opération `linesStatisticsGet` · Fichier source : `nodes/OvhCloudXdsl/resources/lines/linesStatisticsGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/xdsl/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `number` | string | Oui |
| `period` | options | Oui |
| `Day` | — | — |
| `Month` | — | — |
| `Week` | — | — |
| `Year` | — | — |
| `type` | options | Oui |
| `Attenuation` | — | — |
| `Errors Power` | — | — |
| `FEC` | — | — |
| `Noise Margin` | — | — |
| `Synchronisation` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
