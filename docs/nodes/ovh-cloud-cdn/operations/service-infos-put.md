# OVH Cloud Cdn — Update Service Info

> Opération `serviceInfosPut` · Fichier source : `nodes/OvhCloudCdn/resources/service/serviceInfosPut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cdn/dedicated/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `canDeleteAtExpiration` | boolean | — |
| `contactAdmin` | string | — |
| `contactBilling` | string | — |
| `contactTech` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
