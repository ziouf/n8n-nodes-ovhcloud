# OVH Cloud Cdn — Get Domain Statistics

> Opération `domainStatisticsGet` · Fichier source : `nodes/OvhCloudCdn/resources/domains/domainStatisticsGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/cdn/dedicated/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `domain` | string | Oui |
| `period` | options | Oui |
| `Day` | — | — |
| `Month` | — | — |
| `Week` | — | — |
| `type` | options | Oui |
| `Backend` | — | — |
| `Cdn` | — | — |
| `Threat` | — | — |
| `value` | options | Oui |
| `Bandwidth` | — | — |
| `Request` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
