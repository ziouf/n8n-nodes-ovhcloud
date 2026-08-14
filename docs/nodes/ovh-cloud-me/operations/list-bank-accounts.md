# OVH Cloud Me — List Bank Accounts

> Opération `listBankAccounts` · Fichier source : `nodes/OvhCloudMe/operations/payment.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/me/paymentMean/bankAccount` |
| GET | `/me/paymentMean/bankAccount/{id}` |

## Paramètres

Aucun paramètre supplémentaire.

## Filtres optionnels

| Paramètre n8n | Query param API | Type |
| --- | --- | --- |
| `filters.state` | `state` | options |
| `filters.date.from` | `date.from` | dateTime |
| `filters.date.to` | `date.to` | dateTime |

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
