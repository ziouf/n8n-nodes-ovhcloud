# OVH Cloud Cdn — Add SSL

> Opération `sslCreatePost` · Fichier source : `nodes/OvhCloudCdn/resources/ssl/sslCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cdn/dedicated/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `certificate` | string | — |
| `chain` | string | — |
| `key` | string | — |
| `name` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
