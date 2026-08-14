# OVH Cloud Dedicated — Boot List

> Opération `bootListGet` · Fichier source : `nodes/OvhCloudDedicated/resources/bootListGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicated/server/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `bootType` | options | — |
| `Hardware` | — | — |
| `Hardware Boot` | — | — |
| `Netboot` | — | — |
| `Rescue` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
