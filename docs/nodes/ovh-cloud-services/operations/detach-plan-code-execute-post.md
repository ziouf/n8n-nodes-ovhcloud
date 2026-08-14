# OVH Cloud Services — Execute Detach

> Opération `detachPlanCodeExecutePost` · Fichier source : `nodes/OvhCloudServices/resources/detach/detachPlanCodeExecutePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/services/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `planCode` | string | Oui |
| `duration` | string | Oui |
| `pricingMode` | string | Oui |
| `quantity` | number | Oui |
| `autoPayWithPreferredPaymentMethod` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
