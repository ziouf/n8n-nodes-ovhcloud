# OVH Cloud Dedicated — Netboot Order Update

> Opération `netbootOrderUpdate` · Fichier source : `nodes/OvhCloudDedicated/resources/netbootOrderPut.operation.ts`

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
| `netbootOrder` | options | — |
| `Harddisk Boot` | — | — |
| `Internal Boot` | — | — |
| `Network Boot (PXE)` | — | — |
| `Rescue Mode` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
