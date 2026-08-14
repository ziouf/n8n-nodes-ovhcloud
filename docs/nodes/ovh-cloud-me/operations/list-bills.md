# OVH Cloud Me — List Bills

> Opération `listBills` · Fichier source : `nodes/OvhCloudMe/operations/billing.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/me/bill` |
| GET | `/me/bill/{id}` |

## Paramètres

Aucun paramètre supplémentaire.

## Filtres optionnels

| Paramètre n8n | Query param API | Type |
| --- | --- | --- |
| `filters.date.from` | `date.from` | dateTime |
| `filters.date.to` | `date.to` | dateTime |
| `filters.orderId` | `orderId` | number |
| `filters.category` | `category` | options |

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
