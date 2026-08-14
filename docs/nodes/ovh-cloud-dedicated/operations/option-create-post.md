# OVH Cloud Dedicated — Option Create

> Opération `optionCreatePost` · Fichier source : `nodes/OvhCloudDedicated/resources/option/optionCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicated/server/{serviceName}{option}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `option` | options | Oui |
| `AntiDDoS Basic` | — | — |
| `Monitoring` | — | — |
| `Rescue Mode` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
