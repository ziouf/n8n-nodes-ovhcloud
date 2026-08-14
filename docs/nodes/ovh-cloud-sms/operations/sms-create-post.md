# OVH Cloud Sms — smsCreatePost

> Opération `smsCreatePost` · Fichier source : `nodes/OvhCloudSms/resources/sms/smsCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/sms/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `receivers` | string | — |
| `message` | string | Oui |
| `sender` | string | — |
| `tag` | string | — |
| `charset` | options | — |
| `UTF-8` | — | — |
| `coding` | options | — |
| `7bit` | — | — |
| `8bit` | — | — |
| `class` | options | — |
| `Flash` | — | — |
| `phoneDisplay` | — | — |
| `Sim` | — | — |
| `Toolkit` | — | — |
| `priority` | options | — |
| `High` | — | — |
| `Low` | — | — |
| `Medium` | — | — |
| `veryLow` | — | — |
| `differedPeriod` | number | — |
| `validityPeriod` | number | — |
| `noStopClause` | boolean | — |
| `senderForResponse` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
