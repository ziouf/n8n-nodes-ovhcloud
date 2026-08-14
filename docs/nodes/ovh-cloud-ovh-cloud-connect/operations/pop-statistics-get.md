# OVH Cloud Ovh Cloud Connect — Get POP Statistics

> Opération `popStatisticsGet` · Fichier source : `nodes/OvhCloudOvhCloudConnect/resources/config/popStatisticsGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/ovhCloudConnect/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `popId` | number | Oui |
| `period` | options | Oui |
| `1 Day` | — | — |
| `1 Hour` | — | — |
| `1 Month` | — | — |
| `1 Week` | — | — |
| `1 Year` | — | — |
| `type` | options | Oui |
| `CPU` | — | — |
| `Memory` | — | — |
| `Traffic` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
