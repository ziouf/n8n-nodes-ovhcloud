# OVH Cloud Sms — outgoingListGet

> Opération `outgoingListGet` · Fichier source : `nodes/OvhCloudSms/resources/outgoing/outgoingListGet.operation.ts`

## Requête HTTP

Endpoint non détecté statiquement.

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `batchID` | string | — |
| `creationDatetimeFrom` | string | — |
| `creationDatetimeTo` | string | — |
| `deliveryReceipt` | number | — |
| `differedDelivery` | number | — |
| `messageID` | string | — |
| `ptt` | number | — |
| `receiver` | string | — |
| `sender` | string | — |
| `tag` | string | — |

## Filtres optionnels

> ⚠️ Paramètres plats (rétrocompatibles) — non affichés dans l'interface n8n.

| Paramètre n8n | Query param API | Type |
| --- | --- | --- |
| `batchID` | `batchID` | string |
| `creationDatetimeFrom` | `creationDatetime.from` | string |
| `creationDatetimeTo` | `creationDatetime.to` | string |
| `deliveryReceipt` | `deliveryReceipt` | number |
| `differedDelivery` | `differedDelivery` | number |
| `messageID` | `messageID` | string |
| `ptt` | `ptt` | number |
| `receiver` | `receiver` | string |
| `sender` | `sender` | string |
| `tag` | `tag` | string |

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
