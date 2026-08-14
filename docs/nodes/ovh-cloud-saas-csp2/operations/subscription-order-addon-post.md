# OVH Cloud Saas Csp2 — Create Add-On Subscription

> Opération `subscriptionOrderAddonPost` · Fichier source : `nodes/OvhCloudSaasCsp2/resources/subscriptionOrderAddonPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/saas/csp2/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `id` | number | Oui |
| `licenseId` | number | Oui |
| `quantity` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
