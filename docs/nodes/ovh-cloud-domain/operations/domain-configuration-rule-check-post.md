# OVH Cloud Domain — Validate a Rule Data for a Specified Domain

> Opération `domainConfigurationRuleCheckPost` · Fichier source : `nodes/OvhCloudDomain/resources/root/domainConfigurationRuleCheckPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/domain/configurationRule/check` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `action` | options | Oui |
| `Create` | — | — |
| `Trade` | — | — |
| `Transfer` | — | — |
| `Update` | — | — |
| `domain` | string | Oui |
| `adminAccount` | json | — |
| `extras` | json | — |
| `owner` | json | — |
| `techAccount` | json | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
