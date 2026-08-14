# OVH Cloud Over The Box — Migrate Offers

> Opération `migrationChangeOffersPost` · Fichier source : `nodes/OvhCloudOverTheBox/resources/main/migrationChangeOffersPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/overTheBox/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `hardwareName` | string | — |
| `offer` | string | Oui |
| `shippingContactID` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
