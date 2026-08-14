# OVH Cloud Metrics — Create Metrics Token

> Opération `tokenCreatePost` · Fichier source : `nodes/OvhCloudMetrics/resources/tokenCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/metrics/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `permission` | options | Oui |
| `Read` | — | — |
| `Write` | — | — |
| `description` | string | — |
| `labels` | json | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
