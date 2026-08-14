# OVH Cloud Connectivity — Update Eligibility Recall

> Opération `recallUpdatePut` · Fichier source : `nodes/OvhCloudConnectivity/resources/eligibilityRecall/recallUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/connectivity/eligibility/recall/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `id` | number | Oui |
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
