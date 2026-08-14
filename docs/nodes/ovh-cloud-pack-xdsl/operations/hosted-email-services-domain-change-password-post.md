# OVH Cloud Pack Xdsl — Change Hosted Email Password

> Opération `hostedEmailServicesDomainChangePasswordPost` · Fichier source : `nodes/OvhCloudPackXdsl/resources/hostedEmail/servicesDomainChangePasswordPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/pack/xdsl/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `packName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `domain` | string | Oui |
| `password` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
