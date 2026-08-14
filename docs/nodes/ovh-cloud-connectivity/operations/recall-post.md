# OVH Cloud Connectivity — Create Eligibility Recall

> Opération `recallPost` · Fichier source : `nodes/OvhCloudConnectivity/resources/eligibilityRecall/recallPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/connectivity/eligibility/recall` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `reference` | string | Oui |
| `referenceType` | options | Oui |
| `Address` | — | — |
| `Building` | — | — |
| `profiberRequest` | boolean | — |
| `dedicatedfiberRequest` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
