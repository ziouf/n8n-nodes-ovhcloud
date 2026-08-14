# OVH Cloud Pack Xdsl — Activate Hosted Email Service

> Opération `hostedEmailServicesPost` · Fichier source : `nodes/OvhCloudPackXdsl/resources/hostedEmail/servicesPost.operation.ts`

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
| `email` | string | Oui |
| `password` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
