# OVH Cloud Dedicated — Burst Update

> Opération `burstUpdate` · Fichier source : `nodes/OvhCloudDedicated/resources/burstUpdate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/dedicated/server/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `burstType` | options | — |
| `Off` | — | — |
| `Low` | — | — |
| `Medium` | — | — |
| `High` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
