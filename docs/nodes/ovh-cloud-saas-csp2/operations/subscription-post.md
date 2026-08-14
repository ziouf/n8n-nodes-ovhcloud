# OVH Cloud Saas Csp2 — Add Subscription

> Opération `subscriptionPost` · Fichier source : `nodes/OvhCloudSaasCsp2/resources/subscriptionPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/saas/csp2/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `licenseId` | number | Oui |
| `quantity` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
