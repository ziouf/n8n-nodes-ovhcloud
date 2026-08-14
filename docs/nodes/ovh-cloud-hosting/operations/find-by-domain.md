# OVH Cloud Hosting — Find Hosting by Domain

> Opération `findByDomain` · Fichier source : `nodes/OvhCloudHosting/findByDomain.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/hosting/web/attachedDomain` |
| GET | `/hosting/web/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `domain` | string | Oui |
| `withDetails` | boolean | — |
| `withAttachedDomains` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
