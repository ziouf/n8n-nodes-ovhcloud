# OVH Cloud Pack Xdsl — Activate Domain Service

> Opération `domainServicesPost` · Fichier source : `nodes/OvhCloudPackXdsl/resources/domain/servicesPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/pack/xdsl/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `packName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `action` | options | Oui |
| `authInfo` | string | — |
| `domain` | string | Oui |
| `tld` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
