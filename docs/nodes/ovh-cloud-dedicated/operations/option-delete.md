# OVH Cloud Dedicated — Option Delete

> Opération `optionDelete` · Fichier source : `nodes/OvhCloudDedicated/resources/optionDelete.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| DELETE | `/dedicated/server/{serviceName}{option}` |

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
